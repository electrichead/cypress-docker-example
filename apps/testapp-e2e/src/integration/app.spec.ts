import { getGreeting } from '../support/app.po';

describe('testapp (local)', () => {
  // This will require a baseUrl to be set
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to testapp!');
  });
});
