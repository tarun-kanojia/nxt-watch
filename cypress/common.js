/// <reference types="cypress" />
export const gotLoginPage = () => {
    cy.visit(LOGIN_URL);
}