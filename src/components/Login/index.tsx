import React, { useReducer, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginMetaData } from "../../model/LoginMetaData";
import LoginForm from "./LoginForm";
import { getCookie } from "../../util/storage/StorageUtil";
import { CenterContainer } from "./style";
import { LOCAL_STORAGE } from "../../util/storage/constant";

export enum LoginReducerAction {
    CHANGE_USERNAME = "change_username",
    CHANGE_PASSWORD = "change_password",
}

type LoginActionType = { type: LoginReducerAction; payload: string };

const loginReducer = (
    loginMetaData: LoginMetaData,
    action: LoginActionType
) => {
    switch (action.type) {
        case LoginReducerAction.CHANGE_USERNAME:
            return new LoginMetaData(action.payload, loginMetaData.password);
        case LoginReducerAction.CHANGE_PASSWORD:
            return new LoginMetaData(loginMetaData.username, action.payload);
        default:
            throw new Error();
    }
};

const Login = (props: any) => {
    const [loginMetaData, loginDispatch] = useReducer(
        loginReducer,
        new LoginMetaData()
    );

    const JWT_TOKEN = getCookie(LOCAL_STORAGE.JWT_TOKEN);
    if (JWT_TOKEN && JWT_TOKEN !== "") {
        return <Navigate to="/" />;
    } else {
        return (
            <CenterContainer width="100vw" height="100vh">
                <LoginForm
                    loginMetaData={loginMetaData}
                    loginDispatch={loginDispatch}
                />
            </CenterContainer>
        );
    }
};

export default Login;
