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
        cy.intercept("GET", ALL_VIDEOS_ENDPOINT, (req) => {
            req.reply({
                statusCode: 200,
                fixture: "../fixtures/videoList.json",
            });
        });
    } else if (status === APIStatus.FAILURE) {
        cy.intercept("GET", ALL_VIDEOS_ENDPOINT, {
            statusCode: 404,
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
        cy.intercept("GET", VIDEO_ENDPOINT, (req) => {
            req.reply({
                statusCode: 200,
                fixture: "../fixtures/video.json",
            });
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
        cy.url().should("include", VIDEO_URL);
    });
});

export const gotVideoComponent = () => {
    it("[positive] should navigate to video component", () => {
        cy.get("[data-testid=video-container]").children().first().click();
        cy.url().should("include", VIDEO_URL);
    });
};
