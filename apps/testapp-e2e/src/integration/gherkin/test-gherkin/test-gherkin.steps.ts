import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { getGreeting } from '../../../support/app.po';

When('the user lands on the homepage', () => {
  cy.visit('/');
});
Then('they should see the heading', () => {
  getGreeting().contains('Welcome to testapp!');
});
