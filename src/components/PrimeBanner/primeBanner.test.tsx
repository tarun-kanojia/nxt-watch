import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrimeBanner from ".";

describe(" test for banner interaction", () => {
    const mockedHideBanner = jest.fn();
    beforeEach(() => {
        const bearerToken = "token";
        render(<PrimeBanner hidePrimeBanner={mockedHideBanner} />);
    });

    afterEach(() => {
        cleanup();
    });

    it("[positive] should remove banner on click", () => {
        // checking for if remove button click banner should be removed;
        waitFor(() => {
            userEvent.click(screen.getByTestId("banner-remove"));
            expect(mockedHideBanner).toBeCalled();
        });
    });
});
