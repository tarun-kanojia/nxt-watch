import {
    APIStatus,
    GAMING_END_POINT,
    GAMING_URL,
    login,
    VIDEO_URL,
} from "../common";
import { gotVideoComponent, stubApiGetVideoDetail } from "./homePage.cy";

describe("E2E for Gaming Page", () => {
    beforeEach(() => {
        stubApiGetVideoDetail(APIStatus.SUCCESS);
        cy.intercept("GET", GAMING_END_POINT, (req) => {
            req.reply({
                statusCode: 200,
                fixture: "../fixtures/gamingVideos.json",
            });
        });
        login();
    });

    it("[positive] should navigate to Gaming Page", () => {
        cy.get("[data-testid=gaming-testid]").click();
        cy.url().should("eq", GAMING_URL);
    });
    it("[positive] should navigate to video component", () => {
        cy.get("[data-testid=gaming-testid]").click();
        cy.url().should("eq", GAMING_URL);
        cy.get("[data-testid=gaming-video-container]")
            .children()
            .first()
            .click();
        cy.url().should("include", VIDEO_URL);
    });
});
