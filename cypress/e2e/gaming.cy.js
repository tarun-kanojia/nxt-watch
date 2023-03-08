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
        cy.intercept("GET", GAMING_END_POINT, {
            statusCode: 200,
            body: {
                videos: [
                    {
                        channel: {
                            name: "iB Cricket",
                            profile_image_url:
                                "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
                        },
                        id: "30b642bd-7591-49f4-ac30-5c538f975b15",
                        published_at: "Apr 19, 2019",
                        thumbnail_url:
                            "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
                        title: "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
                        view_count: "1.4K",
                    },
                ],
            },
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
        cy.url().should("eq", VIDEO_URL);
    });
});
