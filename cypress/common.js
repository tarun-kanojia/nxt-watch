/// <reference types="cypress" />
import fixtureVideoList from "../src/fixtures/getVideoList.json";
import { stubApiGetVideoList } from "./e2e/homePage.cy";
import userCredentials from "./fixtures/useCredential.json";

export const HOME_URL = "http://localhost:3000/";
export const LOGIN_URL = HOME_URL + "login";
export const TRENDING_URL = HOME_URL + "trending";
export const GAMING_URL = HOME_URL + "gaming";
export const SAVED_VIDEO_URL = HOME_URL + "save-videos";
export const VIDEO_URL =
    HOME_URL + "videos/30b642bd-7591-49f4-ac30-5c538f975b15";

export const ALL_VIDEOS_ENDPOINT = "https://apis.ccbp.in/videos/all?search=";
export const LOGIN_END_POINT = " https://apis.ccbp.in/login";
export const TRENDING_END_POINT = "https://apis.ccbp.in/videos/trending";
export const GAMING_END_POINT = "https://apis.ccbp.in/videos/gaming";
export const SAVED_VIDEO_END_POINT = "https://apis.ccbp.in/saved-videos";
export const VIDEO_ENDPOINT = "https://apis.ccbp.in/videos/*";
export const APIStatus = {
    SUCCESS: 200,
    FAILURE: 404,
};

export const stubApiLogin = (status) => {
    switch (status) {
        case APIStatus.SUCCESS:
            return cy.intercept("POST", LOGIN_END_POINT, {
                jwt_token: "dummyToken",
            });

        case APIStatus.FAILURE:
            return cy.intercept("POST", LOGIN_END_POINT, {
                statusCode: APIStatus.FAILURE,
            });

        default:
            return cy.intercept("POST", LOGIN_END_POINT, {
                statusCode: APIStatus.FAILURE,
            });
    }
};

export const gotLoginPage = () => {
    cy.visit(LOGIN_URL);
};

export const gotHomePage = () => {
    return cy.visit(HOME_URL);
};

export const gotTrendingPage = () => {
    return cy.visit(TRENDING_URL);
};

export const login = () => {
    const { username, password } = userCredentials;
    gotLoginPage();
    stubApiLogin(APIStatus.SUCCESS);
    stubApiGetVideoList(APIStatus.SUCCESS);
    cy.get("[data-testid=credential-username-id]").type(username);
    cy.get("[data-testid=credential-password-id]").type(password);
    cy.get("[data-testid=login-on-click-event").click();

    cy.url().should("eq", HOME_URL);
};
