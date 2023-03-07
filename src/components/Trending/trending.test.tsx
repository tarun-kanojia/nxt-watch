import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RootStore } from "../../store/RootStore";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import { HomeVideoStore } from "../../store/HomeVideoStore/index.fixture";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import Trending from ".";
import { TrendingVideoStore } from "../../store/TrendingVideoStore";

let rootStore;
let transportLayer;
let trendingVideoStore: TrendingVideoStore;

describe("test for Trending Page rendering", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    trendingVideoStore = new TrendingVideoStore(transportLayer, rootStore);

    beforeEach(() => {
        const bearerToken = "token";

        render(
            <MemoryRouter initialEntries={["/home"]}>
                <Provider trendingVideoStore={trendingVideoStore}>
                    <Trending />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should render the trending page", () => {
        expect(screen.getByTestId("trending")).toBeInTheDocument();
    });

    it("[positive] should load trending videos", () => {
        //check if the videos are loaded correctly on mounting
        waitFor(() => {
            expect(trendingVideoStore.loadVideos).toBeCalledTimes(1);
        });
    });
});

describe(" Test for Page Header Rendering", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/trending"]}>
                <Provider trendingVideoStore={trendingVideoStore}>
                    <Trending />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should render the page header", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 300);
        });
        expect(screen.getByTestId("page-header")).toBeInTheDocument();
        
        
    });
});

