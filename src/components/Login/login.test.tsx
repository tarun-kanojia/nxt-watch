import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";
import { LoginMetaData } from "../../model/LoginMetaData";

import {
    failureLoginMetaData,
    successLoginMetaData,
} from "../../fixtures/AuthService/index.fixture";

const mockedLoginDispatch = jest.fn();
const mockedUsedNavigate = jest.fn();

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe("render form labels", () => {
    it("render username label", () => {
        render(
            <LoginForm
                loginMetaData={successLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );
        expect(screen.getByText("Username")).toBeInTheDocument();
    });

    it("render password label", () => {
        render(
            <LoginForm
                loginMetaData={successLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );
        expect(screen.getByText("Password")).toBeInTheDocument();
    });
});

it("test input form fields", () => {
    const { getByTestId } = render(
        <LoginForm
            loginMetaData={successLoginMetaData}
            loginDispatch={mockedLoginDispatch}
        />
    );
    expect(getByTestId("credential-username-id")).toHaveValue(
        successLoginMetaData.username
    );
});

it("test input form fields", () => {
    const { getByTestId } = render(
        <LoginForm
            loginMetaData={successLoginMetaData}
            loginDispatch={mockedLoginDispatch}
        />
    );
    expect(getByTestId("credential-password-id")).toHaveValue(
        successLoginMetaData.password
    );
});

    describe("test empty form fields on login button triggers", () => {
    it("test empty username fields", () => {
        const emptyUserNameLoginMetaData = new LoginMetaData("", "rahul@2021");
        const { getByText, getByTestId } = render(
            <LoginForm
                loginMetaData={emptyUserNameLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );

        userEvent.click(getByTestId("login-on-click-event"));
        
        waitFor(() => {
            getByText("empty username");
        });
    });

    it("test empty password fields", () => {
        const emptyUserNameLoginMetaData = new LoginMetaData("rahul", "");
        const { getByText, getByTestId } = render(
            <LoginForm
                loginMetaData={emptyUserNameLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );
        userEvent.click(getByTestId("login-on-click-event"));
        waitFor(() => {
            getByText("empty password");
        });
    });

    it("test empty username and password fields", () => {
        const emptyUserNameLoginMetaData = new LoginMetaData("", "");
        const { getByText, getByTestId } = render(
            <LoginForm
                loginMetaData={emptyUserNameLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );

        userEvent.click(getByTestId("login-on-click-event"));

        waitFor(() => {
            getByText("empty username");
        });
    });
});

describe("test showPassword click button", () => {
    it("test showPassword on click", () => {
        const { getByTestId } = render(
            <LoginForm
                loginMetaData={successLoginMetaData}
                loginDispatch={mockedLoginDispatch}
            />
        );

        userEvent.click(getByTestId("show-password-btn"));
        expect(
            getByTestId("credential-password-id").getAttribute("type")
        ).toEqual("text");
    });
});
