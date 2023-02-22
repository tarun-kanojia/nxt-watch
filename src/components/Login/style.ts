
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components'
import LoginForm from './LoginForm'

interface GlobalProps {
    theme: string;
}


export const THEME = {
    LOGO_URL_DARK: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    LOGO_URL_LIGHT: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    LABEL_LIGHT: '#909090',
    LABEL_DARK: '#f8fafc',
    INPUT_LIGHT: '#0f0f0f',
    INPUT_DARK: '#ffffff',
    LOGIN_BTN_BG_COLOR: '#3b82f6',
    LOGIN_BTN_TXT_COLOR: ' #f8fafc',
    SHOW_PASSWORD_LIGHT: 'black',
    SHOW_PASSWORD_DARK: ' #f8fafc'
}

const getTheme = (themeLight: string, themeDark: string) => {
    return theme == 'light' ? themeLight : themeDark;
}


let theme = 'light';

export const GlobalStyle = createGlobalStyle<GlobalProps>`
    ${(GlobalProps) => theme = GlobalProps.theme}
    

    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

interface CenterContainerProps {
    width: string;
    height: string;
}

export const CenterContainer = styled.div<CenterContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(CenterContainerProps) => CenterContainerProps.width};
    height:  ${(CenterContainerProps) => CenterContainerProps.height};
`;

export const Text = styled.div`
`;

export const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    width: 80%;
    max-width: 30rem;
    height: 25rem;
    border: 1px solid #eee;
    border-radius: 1rem;
    align-items:center;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;



export const Logo = styled.img<GlobalProps>`
    content: url(${(GlobalProps) => GlobalProps.theme === 'light' ? THEME.LOGO_URL_LIGHT : THEME.LOGO_URL_DARK} );
    align-self: center;
    width: 100%;
    max-width: 20rem;
    aspect-ratio: 4/1;
`

export const LoginFormContainer = styled.form`
    width: 90%;
    max-width: 20rem;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    margin: 0px auto 0px auto;


`

interface CredentialInputProps {

}

export const CredentialLabel = styled.label<GlobalProps>`
    font-size: 0.8rem;
    padding-bottom: 2px;
    color: ${getTheme(THEME.LABEL_LIGHT, THEME.LABEL_DARK)};
    text-transform: uppercase;
`

export const CredentialInput = styled.input`
    outline: none;
    padding-left: 4px;
    margin-bottom:10px;
    color: ${getTheme(THEME.INPUT_LIGHT, THEME.INPUT_DARK)};
    border: 1px solid #7e858e;
    border-radius: 5px;
    height: 2rem;
`;

export const LoginButton = styled.input<GlobalProps>`
    height: 2rem;
    width: 10rem;
    border: none;
    color: ${THEME.LOGIN_BTN_TXT_COLOR};
    border-radius: 4px;
    align-self: center;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${THEME.LOGIN_BTN_BG_COLOR};
`

export const Checkbox = styled.input`
    outline: none;

`
export const ShowPasswordWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    color: ${getTheme(THEME.SHOW_PASSWORD_LIGHT, THEME.SHOW_PASSWORD_DARK)};
    font-size: 0.8rem;
`

export const ErrorMessageContainer = styled.p`
    color: red;
    font-weight: bold;
    font-size: small;
    text-transform: lowercase;



`;