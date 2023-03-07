import React from "react";
import {
    render,
    cleanup,
    screen,
    waitFor,
    getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Gaming from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import { GamingVideoStore } from "../../store/GamingVideoStore";

let rootStore: RootStore;
let transportLayer: TransportLayer;
let gamingVideoStore: GamingVideoStore;

describe("Unit Test for Gaming Page Rendering", () => {
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    gamingVideoStore = new GamingVideoStore(transportLayer, rootStore);
    const spyApi = jest.spyOn(gamingVideoStore, "loadVideos");

    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/gaming"]}>
                <Provider gamingVideoStore={gamingVideoStore}>
                    <Gaming />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(cleanup);

    it("[positive] Gaming Page should render", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 300);
        });
        expect(screen.getByTestId("gaming-page")).toBeInTheDocument();
    });

    it("[positive] Gaming page header should render", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 300);
        });
        expect(screen.getByTestId("page-header")).toBeInTheDocument();
    });

    it("[positive] fetch (for video list) should called ones", async () => {
        expect(spyApi).toBeCalledTimes(1);
    });

    it("[negative] fetch (for video list) should not called more than ones", async () => {
        expect(spyApi).not.toBeCalledTimes(2);
    });
});


