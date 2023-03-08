/// <reference types="cypress" />

import {
    ALL_VIDEOS_ENDPOINT,
    APIStatus,
    gotHomePage,
    login,
    VIDEO_ENDPOINT,
    VIDEO_URL,
} from "../common";
import { LOGIN_URL } from "../../src/constants/endPoints";
import userCredentials from "../fixtures/useCredential.json";
export const stubApiGetVideoList = (status) => {
    if (status === APIStatus.SUCCESS) {
        cy.intercept("GET", ALL_VIDEOS_ENDPOINT, {
            statusCode: status,
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
    } else if (status === APIStatus.FAILURE) {
        cy.intercept("GET", ALL_VIDEOS_ENDPOINT, {
            statusCode: status,
            body: {
                data: {
                    videos: [],
                },
            },
        });
    }
};

export const stubApiGetVideoDetail = (status) => {
    if (status === APIStatus.SUCCESS) {
        cy.intercept("GET", VIDEO_ENDPOINT, {
            video_details: {
                id: "30b642bd-7591-49f4-ac30-5c538f975b15",
                title: "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
                video_url: "https://www.youtube.com/watch?v=wB6IFCeTssk",
                thumbnail_url:
                    "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
                channel: {
                    name: "iB Cricket",
                    profile_image_url:
                        "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
                    subscriber_count: "4.13K",
                },
                view_count: "1.4K",
                published_at: "Apr 19, 2019",
                description:
                    "Destructive opening batsman, Virender Sehwag was impressed by iB Cricket, as he prepared himself up for the world’s first VR Cricket League, iB Cricket Super Over League.",
            },
        });
    } else {
        cy.intercept("GET", VIDEO_ENDPOINT, {
            statusCode: status,
        });
    }
};

describe("Home Page Render", () => {
    beforeEach(() => {
        stubApiGetVideoDetail(APIStatus.SUCCESS);
        login();
    });
    it("[positive] should filter component", () => {
        cy.get("[data-testid=search-bar]").type("se");
    });
    it("[positive] should navigate to video component", () => {
        cy.get("[data-testid=video-container]").children().first().click();
        cy.url().should("eq", VIDEO_URL);
    });

});

export const gotVideoComponent = () => {
    
    it("[positive] should navigate to video component", () => {
        cy.get("[data-testid=video-container]").children().first().click();
        cy.url().should("eq", VIDEO_URL);
    });
}