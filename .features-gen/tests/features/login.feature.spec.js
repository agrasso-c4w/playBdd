// Generated from: tests/features/login.feature
import { test } from "../../../tests/features/steps/fixtures.ts";

test.describe('Login', () => {

  test('Login with valid credentials', async ({ Given, page, When, And, Then }) => { 
    await Given('The user open the snai login page "https://nspreprod.snai.it/"', null, { page }); 
    await When('click on Accedi', null, { page }); 
    await And('Insert username "alessio.grasso" and password "Alegra76!"', null, { page }); 
    await Then('The user is logged in successfully', null, { page }); 
  });

  test.skip('Login with invalid credentials', { tag: ['@skip'] }, async ({ Given, When, And, Then }) => { 
    await Given('The user open the snai login page "https://nstest.snai.it/"'); 
    await When('click on Accedi'); 
    await And('Insert username "Panther8" and password "WrongPassword."'); 
    await Then('The user is NOT logged in'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user open the snai login page \"https://nspreprod.snai.it/\"","stepMatchArguments":[{"group":{"start":34,"value":"\"https://nspreprod.snai.it/\"","children":[{"start":35,"value":"https://nspreprod.snai.it/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When click on Accedi","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And Insert username \"alessio.grasso\" and password \"Alegra76!\"","stepMatchArguments":[{"group":{"start":16,"value":"\"alessio.grasso\"","children":[{"start":17,"value":"alessio.grasso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"Alegra76!\"","children":[{"start":47,"value":"Alegra76!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then The user is logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":14,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given The user open the snai login page \"https://nstest.snai.it/\""},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When click on Accedi"},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And Insert username \"Panther8\" and password \"WrongPassword.\""},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The user is NOT logged in"}]},
]; // bdd-data-end