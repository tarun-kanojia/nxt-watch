import React from "react";
import {
    render,
    cleanup,
    screen,
    waitFor,
    getByTestId,
    fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../Home";
import { Provider } from "mobx-react";
import { HomeVideoStore } from "../../store/HomeVideoStore/index.fixture";
import { RootStore } from "../../store/RootStore";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import VideoListFixture from "../../fixtures/getVideoList.json";
import { VideoListResponse } from "../../model/types";
import {
    BrowserRouter,
    MemoryRouter,
    Route,
    Router,
    Routes,
} from "react-router-dom";

let rootStore: RootStore;
let transportLayer: TransportLayer;
let homeVideoStore: HomeVideoStore;

describe("test for Home rendering", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    homeVideoStore = new HomeVideoStore(transportLayer, rootStore);

    beforeEach(() => {
        const bearerToken = "token";

        render(
            <MemoryRouter initialEntries={["/home"]}>
                <Provider homeVideoStore={homeVideoStore}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should render the home page", () => {
        expect(screen.getByTestId("Home")).toBeInTheDocument();
    });

    it("[positive] should load home videos", () => {
        //check if the videos are loaded correctly on mounting
        waitFor(() => {
            expect(homeVideoStore.loadVideos).toBeCalledTimes(1);
        });
    });
});

describe("test for Banner remove", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    homeVideoStore = new HomeVideoStore(transportLayer, rootStore);

    beforeEach(() => {
        const bearerToken = "token";

        render(
            <MemoryRouter initialEntries={["/home"]}>
                <Provider homeVideoStore={homeVideoStore}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        // cleanup();
    });

    it("[positive] should render a banner", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        });
        expect(screen.getByTestId("banner")).toBeInTheDocument();
    });

    it("[positive] should remove banner on click", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        });

        userEvent.click(screen.getByTestId("banner-remove"));
        // should remove banner on click
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        });

        expect(screen.queryByTestId("banner")).toBeFalsy();
    });

});

describe("test for Home search filter", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    homeVideoStore = new HomeVideoStore(transportLayer, rootStore);

    beforeEach(() => {
        const bearerToken = "token";

        render(
            <MemoryRouter initialEntries={["/home"]}>
                <Provider homeVideoStore={homeVideoStore}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should filter the video list", () => {
        waitFor(() => {
            expect(screen.getByTestId("search-bar")).toBeInTheDocument();
            userEvent.type(screen.getByTestId("search-bar"), "se");
            expect(homeVideoStore.filterVideos).toBeCalledTimes(1);
        });
    });
});
