import { LoginMetaData } from "../../model/LoginMetaData";

export const successLoginData = {
    username: "rahul",
    password: "rahul@2021",
};

export const failureLoginData = {
    username: "notRahul",
    password: "rahul@2021",
};

export const successLoginMetaData = new LoginMetaData(
    successLoginData.username,
    successLoginData.password
);
export const failureLoginMetaData = new LoginMetaData(
    failureLoginData.username,
    failureLoginData.password
);
