import React from "react";
import {
    render,
    cleanup,
    screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from ".";
import videoList from "../../fixtures/getVideoList.json";

describe("Render Component in DOM", () => {
    afterEach(cleanup);

    const dummyQuery = "sehwag";
    const dummyVideoList = videoList;
    const mockedUpdateQuery = jest.fn();

    it("Renders the input fields", () => {
        render(
            <SearchBar query={dummyQuery} updateQuery={mockedUpdateQuery} />
        );
        expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    });

    it("test input fields", () => {
        render(
            <SearchBar query={dummyQuery} updateQuery={mockedUpdateQuery} />
        );
        expect(screen.getByTestId("search-bar")).toHaveValue(dummyQuery);
    });

   
});
