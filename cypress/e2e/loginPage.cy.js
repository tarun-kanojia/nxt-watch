/// <reference types="cypress" />

import userCredentials from "../fixtures/useCredential.json";
import { gotLoginPage, HOME_URL, login, LOGIN_URL } from "../common";
import { cleanup } from "@testing-library/react";

afterEach(() => {
    cleanup;
});

login();

describe("Wrong Credentials", () => {
    it("[negative] Should not redirect on incorrect credentials", () => {
        gotLoginPage();
        cy.get("[data-testid=credential-username-id]").type(
            userCredentials.name
        );
        cy.get("[data-testid=credential-password-id]").type(
            userCredentials.wrongPassword
        );
        cy.get("[data-testid=login-on-click-event").click();
        cy.url().should("eq", LOGIN_URL);
    });


    
});
