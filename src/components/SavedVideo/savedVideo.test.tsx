import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import Trending from "../Trending";
import { RootStore } from "../../store/RootStore";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import { TrendingVideoStore } from "../../store/TrendingVideoStore";
import { SavedVideosStore } from "../../store/SavedVideosStore";
import SavedVideo from ".";

let rootStore;
let transportLayer;
let savedVideoStore: SavedVideosStore;

describe("Test for SavedVideo Page rendering", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    savedVideoStore = new SavedVideosStore(transportLayer, rootStore);
    const spyApi = jest.spyOn(savedVideoStore, "loadVideos");
    
    beforeEach(() => {
        const bearerToken = "token";

        render(
            <MemoryRouter initialEntries={["/save-video"]}>
                <Provider savedVideoStore={savedVideoStore}>
                    <SavedVideo />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should render the savedVideo page", () => {
        expect(screen.getByTestId("save-video")).toBeInTheDocument();
    });

    it("[positive] should load saved videos videos", () => {
        //check if the videos are loaded correctly on mounting
        expect(spyApi).toBeCalledTimes(1);
    });
    it("[negative] should not load saved videos more than ones", () => {
        //check if the videos are loaded correctly on mounting
        expect(spyApi).not.toBeCalledTimes(2);
    });
});
