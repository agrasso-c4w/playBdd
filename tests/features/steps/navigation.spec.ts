import {expect, Locator, test} from '@playwright/test';
import {Given, When, Then} from './fixtures';
import {convertStringToArray, getLinkBySportName} from './utils';

let tab, burger: Locator;
When('click on {string} and verify it is populated', async ({page}, sportType) => {

    // Check if the accordion TAB of sportType is already visible
    const sportArray = convertStringToArray(sportType);

    let prepHref: string = '';
    const navItems = await page.locator('nav.SportTopNavigation_container__6Efks li');

    for (const sport of sportArray) {
        prepHref = getLinkBySportName(sport);
        prepHref = `a[href='${prepHref}']`;
        // const expectedTab = page.locator(prepHref);
        const expectedTab = navItems.locator(prepHref);
        console.log();

        if (!await expectedTab.isVisible()) {
            console.log('Click on Burger Menu and SPORT');
            burger = page.locator('#menu');
            await burger.isVisible();
            await burger.click();
            await page.locator('.AccordionMenu_item__u5bWC').nth(0).waitFor({ state: 'visible' });
            await page.locator('.AccordionMenu_item__u5bWC.AccordionMenu_itemInActive__2JqpO >> text=SPORT').click();

            const topManifestazioni = page.locator("h2.Carousel_title__23mGd");
            await expect(topManifestazioni).toBeVisible();
        }

        const href = await navItems.locator(prepHref);
        console.log(`Link: ${href} | PrepHref: ${prepHref}`);
        await expect(href).toBeVisible();
        await expect(href).toBeEnabled();
        await href.click();

        // And verify it is populated
        await page.waitForLoadState('load', {timeout: 10000});
        // await page.locator('button.ScommesseAccordionFilterPrimary_button__DilPk').click();
        const catScommesse = await page.locator('ScommesseAccordionFilterPrimary_main__pCI2o ScommesseAccordionFilterPrimary_hidden__3U_ZC').all();
        for (const catScommessa of catScommesse) {
            console.log("Cat Scommessa: " + catScommessa);
        }
        const eventi = await page.locator('ScommesseTableRow_avvenimento__3u_4N').all();
        console.log("Eventi length(): " + eventi.length + " Eventi: " + eventi);
        for (const evento of eventi) {
            const data = await evento.locator('ScommesseTableDateTime_listItem___IUK8').nth(0).textContent();
            const ora = await evento.locator('.ScommesseTableDateTime_listItem___IUK8').nth(1).textContent();
            const squadraCasa = await evento.locator('.ScommesseTableCompetitors_item__QS_Bv').nth(0).textContent();
            const squadraOspite = await evento.locator('.ScommesseTableCompetitors_item__QS_Bv').nth(1).textContent();
            console.log(`Evento: ${squadraCasa?.trim()} vs ${squadraOspite} - ${data} - ${ora}`);
            await expect(evento).toBeVisible();
        }

    }

    // await page.screenshot({path: 'debug.png', fullPage: true});
});

Then('{string} is popolated', async ({page}, sportType) => {
    const sportArray = convertStringToArray(sportType);
    const eventi = await page.locator('ScommesseTableRow_avvenimento__3u_4N').all();
    for (const evento of eventi) {
        const data = await evento.locator('ScommesseTableDateTime_listItem___IUK8').nth(0).textContent();
        const ora = await evento.locator('.ScommesseTableDateTime_listItem___IUK8').nth(1).textContent();
        const squadraCasa = await evento.locator('.ScommesseTableCompetitors_item__QS_Bv').nth(0).textContent();
        const squadraOspite = await evento.locator('.ScommesseTableCompetitors_item__QS_Bv').nth(1).textContent();
        console.log(`Evento: ${squadraCasa?.trim()} vs ${squadraOspite} - ${data} - ${ora}`);
        await expect(evento).toBeVisible();
    }
});