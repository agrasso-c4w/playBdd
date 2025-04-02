// Generated from: tests/features/navigation.feature
import { test } from "../../../tests/features/steps/fixtures.ts";

test.describe('Navigation on all tab', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user open the snai login page "https://nspreprod.snai.it/"', null, { page }); 
  });
  
  test.describe('Navigate to "<sportName>"', () => {

    test('Navigate to "CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO"', async ({ When, page }) => { 
      await When('click on "CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO" and verify it is populated', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/navigation.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user open the snai login page \"https://nspreprod.snai.it/\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"https://nspreprod.snai.it/\"","children":[{"start":35,"value":"https://nspreprod.snai.it/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When click on \"CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO\" and verify it is populated","stepMatchArguments":[{"group":{"start":9,"value":"\"CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO\"","children":[{"start":10,"value":"CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end