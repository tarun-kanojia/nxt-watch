import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoComponent from ".";
import { MemoryRouter } from "react-router";
import { SavedVideosStore } from "../../store/SavedVideosStore";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import { RootStore } from "../../store/RootStore";
import { Provider } from "mobx-react";

let rootStore = new RootStore(null);
let transportLayer = new TransportLayer(null);
let savedVideoStore = new SavedVideosStore(transportLayer, rootStore);
describe("Unit Test for Video Component Rendering ", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider savedVideoStore={savedVideoStore}>
                    <VideoComponent />
                </Provider>
            </MemoryRouter>
        );
    });

    afterEach(cleanup);

    it("should render video component", async () => {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 300);
        });
        waitFor(() => {
            const video = screen.getByTestId("full-video-component");
            expect(video).toBeInTheDocument();
        });
    });
});
