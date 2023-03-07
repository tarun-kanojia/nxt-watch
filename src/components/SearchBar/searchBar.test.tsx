import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from ".";
import videoList from "../../fixtures/getVideoList.json";
import { Provider } from "mobx-react";
import { TransportLayer } from "../../service/TarnsportLayer/index.fixture";
import { RootStore } from "../../store/RootStore";
import { HomeVideoStore } from "../../store/HomeVideoStore/index";
import { MemoryRouter } from "react-router-dom";

let rootStore: RootStore;
let transportLayer: TransportLayer;
let homeVideoStore: HomeVideoStore;

describe("Render Component in DOM", () => {
    const dummyQuery = "sehwag";
    const dummyVideoList = videoList;
    const mockedUpdateQuery = jest.fn();
    
    rootStore = new RootStore(null);
    transportLayer = new TransportLayer(null);
    homeVideoStore = new HomeVideoStore(transportLayer, rootStore);
    
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider homeVideoStore={homeVideoStore}>
                    <SearchBar
                        query={dummyQuery}
                        updateQuery={mockedUpdateQuery}
                        />
                </Provider>
            </MemoryRouter>
        );
    });
    
    afterEach(cleanup);
    
    it("Renders the input fields", () => {
        expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    });
    
    it("test input fields", () => {
        
        userEvent.type(screen.getByTestId("search-bar"), 'se')
        expect(screen.getByTestId("search-bar")).toHaveValue('se');
    });
});
