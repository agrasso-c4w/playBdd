import {expect, test} from '@playwright/test';
import {Given, When, Then} from './fixtures';

Given('The user open the snai login page {string}', async ({page},url: string) => {
    console.log("Given The user open the snai login page: " + url);
    await page.evaluate(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });
    await page.goto(url, { waitUntil: 'load' });

});

When('click on Accedi', async ({page}) => {
    console.log('Click on Accedi...');
    const button = page.locator('//button[contains(text(), "Accedi")]');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await button.waitFor({ state: 'visible' });
    await button.click();
    await page.screenshot({path: 'debug.png', fullPage: true});
});

When('Insert username {string} and password {string}', async ({page},username: string, password: string) => {
    console.log("When username username and password ", username, " | " ,password);
    await page.locator('//*[@id="username"]').fill(username);
    await page.locator('//*[@id="Password"]').fill(password);
    console.log('Click on Entra....');
    await page.getByRole('button', { name: 'Entra' }).click();
});

Then('The user is logged in successfully', async ({page}) => {
    console.log('Then user is logged in successfully');
    await page.locator('button.UserNavigation_btnLink__vk3Hf').waitFor({ state: "visible" , timeout: 50000});
    await page.locator('button.UserNavigation_btnLink__vk3Hf').click();
    const locator = page.locator('a[href="/dashboard/il-mio-conto"]');
    await locator.waitFor({ state: 'visible', timeout: 60000 }); // Aspetta max 60 secondi
    await locator.click();

    let saldo: Record<string, string> = {};
    for (const tipo of ["Prelevabile", "Non prelevabile", "bonus cash"]) {
        const valore = await page.locator(`li:has-text("${tipo}") .PieChartComponent_legendValue__qAvbY`).first().textContent();
        saldo[tipo] = valore?.trim() || "Undefined value";
    }

    const prelevabile = saldo["Prelevabile"].replace(/[^0-9,.-]/g, "");
    const nonPrelevabile = saldo["Non prelevabile"].replace(/[^0-9,.-]/g, "");
    const bonusCash = saldo["bonus cash"].replace(/[^0-9,.-]/g, "");

    console.log("Prelevabile: " + prelevabile);
    console.log("Non prelevabile: " + nonPrelevabile);
    console.log("Bonus Cash: " + bonusCash);

    // TODO: Put this values on external file (for example a JSON) or
    await expect(prelevabile).toEqual('0,00');
    await expect(nonPrelevabile).toEqual('20,00');
    await expect(bonusCash).toEqual('0,00');

});

Then('The user is NOT logged in', async ({page}) => {
    console.log('Then access should be denied');
    await expect(page.getByText('Username o password errati')).toBeVisible();

});


