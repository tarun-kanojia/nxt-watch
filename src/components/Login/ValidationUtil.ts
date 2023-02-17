import { LoginMetaData } from "../../model/LoginMetaData"
import { ErrorModel } from "../../model/types"

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/


const validateUserPassword = (userPassword: string) => {
    const userPasswordValidation = userPassword.match(passwordRegex)

    return new Promise((resolve, reject) => {
        const regExResult = userPasswordValidation
        if (userPassword.length == 0) reject({ valid: false, errorName: 'EMPTY_PASSWORD' })
        else if (regExResult === null || regExResult.length == 0) {
            console.log('password Rejected')
            reject({
                valid: false,
                errorName: 'INVALID_PASSWORD'
            })

        } else {
            resolve({ valid: true })
        }

    })
}

const validateUserName = (userNameInput: string) => {
    const userNameValidation = new RegExp("(^\d|[\$\&\+\,\:\;\=\?\@\#\|\'\<\>\.\^\*\(\)\%\!\'\-\'\'])", "g");
    return new Promise((resolve, reject) => {
        // console.log('RegEx output: ', userNameValidation.exec(userNameInput))

        if (userNameInput.length == 0) {
            console.log('username Rejected');
            reject({
                valid: false,
                errorName: 'EMPTY_USERNAME'
            })
        }
        else if (userNameValidation.exec(userNameInput) !== null) {
            console.log(userNameValidation.exec(userNameInput));
            reject({
                valid: false,
                errorName: 'INVALID_USERNAME'
            })

        } else {
            resolve({ valid: true })
        }
    })
}

export const validateForm = (loginMetaData: LoginMetaData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const usernameValidation = await validateUserName(loginMetaData.username);
            const userPasswordValidation = await validateUserPassword(loginMetaData.password);

            resolve({ valid: true })
        }

        catch (error:any) {
            reject({valid:false, value:error.errorName.toString()})
            // throw new Error();
        }

    });
}