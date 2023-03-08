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
        cy.intercept("GET", SAVED_VIDEO_END_POINT, {
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
    it("[positive] should navigate to Trending Page", () => {
        cy.get("[data-testid=saved-video-testid]").click();
        cy.url().should("eq", SAVED_VIDEO_URL);
    });
});
