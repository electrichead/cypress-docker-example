import { getGreeting } from '../support/app.po';

describe('remote site', () => {
  beforeEach(() => cy.visit('https://nx.dev'));

  it('should display welcome message', () => {
    getGreeting().contains('Extensible Dev Tools for Monorepos');
  });
});
