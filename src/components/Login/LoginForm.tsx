import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { LoginReducerAction } from '.';
import { LOGIN_URL } from '../../constants/endPoints';
import { LoginMetaData } from '../../model/LoginMetaData';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { updateCookie } from '../../util/storage/StorageUtil';
import { Checkbox, CredentialInput, CredentialLabel, ErrorMessageContainer, LoginButton, LoginFormContainer, LoginFormWrapper, Logo, ShowPasswordWrapper, Text } from './style';
import { validateForm } from './ValidationUtil';

interface LoginFormProps {
    loginMetaData: LoginMetaData;
    loginDispatch: Function;
}

const ErrorIntializer = {
    NO_ERROR: ""
}



const LoginForm = ({ loginMetaData, loginDispatch }: LoginFormProps) => {
    const theme = useContext(ThemeContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(ErrorIntializer.NO_ERROR)
    const navigate = useNavigate();
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const submitHandel = async (e: any) => {
        e.preventDefault();

        // console.log('submit hit')
        try {
            // const validateFormCredential = await validateForm(loginMetaData);

            const requestOption = {
                method: 'POST',
                body: JSON.stringify({
                    username: loginMetaData.username,
                    password: loginMetaData.password
                })/**  username: 'rahul', password: 'rahul@2021'*/
            }
            const response = await fetch(LOGIN_URL, requestOption);
            const responseData = await response.json()

            updateCookie(LOCAL_STORAGE.JWT_TOKEN, responseData.jwt_token);
            // console.log(responseData);
            navigate('/');
        }

        catch (error: any) {
            const errorName = error.errorName;
            updateError(errorName == undefined ? "Invalid Field Values" : errorName);
            renderErrorContainer();
            console.log(error);
        }
    }

    const updateError = (errorName: string) => {
        setError(errorName);
    }

    const renderErrorContainer = () => {
        return (<ErrorMessageContainer> {error} </ErrorMessageContainer>)
    }


    return (
        <LoginFormWrapper>
            <Logo />
            <LoginFormContainer>
                <CredentialLabel htmlFor='username'>Username</CredentialLabel>
                <CredentialInput
                    name='username'
                    placeholder='Username'
                    value={loginMetaData.username}
                    onChange={(e) => {
                        updateError(ErrorIntializer.NO_ERROR);
                        loginDispatch({
                            type: LoginReducerAction.CHANGE_USERNAME,
                            payload: e.target.value
                        })
                    }}
                />
                <CredentialLabel htmlFor='password'>Password</CredentialLabel>
                <CredentialInput
                    name='password'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'} value={loginMetaData.password}
                    onChange={(e) => {
                        updateError(ErrorIntializer.NO_ERROR);
                        loginDispatch({
                            type: LoginReducerAction.CHANGE_PASSWORD,
                            payload: e.target.value
                        })
                    }}

                />
                
                <ShowPasswordWrapper>
                    <Checkbox
                        type='checkbox'
                        onClick={() => toggleShowPassword()}
                    />
                    <Text> Show Password </Text>
                </ShowPasswordWrapper>
                
                <LoginButton
                    type='submit'
                    value='Login'
                    onClick={(e) => submitHandel(e)}
                />
                
                {error.length ? renderErrorContainer() : null}
            
            </LoginFormContainer>
        </LoginFormWrapper>
    );
}

export default LoginForm;