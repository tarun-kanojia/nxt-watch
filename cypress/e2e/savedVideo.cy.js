import { cleanup } from "@testing-library/react";
import {
    APIStatus,
    gotVideoComponent,
    login,
    SAVED_VIDEO_END_POINT,
    SAVED_VIDEO_URL,
    TRENDING_END_POINT,
    TRENDING_URL,
    VIDEO_URL,
} from "../common";
import { stubApiGetVideoDetail } from "./homePage.cy";

describe("E2E for Saved Video Page", () => {
    beforeEach(() => {
        stubApiGetVideoDetail(APIStatus.SUCCESS);
        cy.intercept("GET", SAVED_VIDEO_END_POINT, (req) => {
            req.reply({
                statusCode: 200,
                fixture: "../../src/fixtures/getVideoList.json",
            });
        });
        login();
    });
    it("[positive] should navigate to Trending Page", () => {
        cy.get("[data-testid=saved-video-testid]").click();
        cy.url().should("eq", SAVED_VIDEO_URL);
    });
});
