import styled from "styled-components";
import React, { useContext } from 'react'

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    position: fixed;
    top: 0px;
    
`;



export const LogoContainer = styled.img`
    content: url(${(props) => props.theme.LOGO_URL});
    width: 90%;
    max-width: 20rem;

`;

export const HeaderComponents = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 20rem;
    
`;


export const ThemeChanger = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;

`;

export const ThemeChangerLogo = styled.img`
    content: url(${(props) => props.theme.THEME_TOGGLER});
    width: 2rem;
    height: 2rem;

`;

export const ProfileLogo = styled.img`
    content: url(${(props) => props.theme.PROFILE_LOGO});
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1/1;
`

export const LogOutButton = styled.button`
    background-color: transparent;
    border-radius: 4px;
    font-weight: bold;
    color: ${(props) => props.theme.LOGOUT_BTN_TXT_COLOR};
    border:1px solid ${(props) => props.theme.LOGOUT_BTN_BORDER_COLOR};

`