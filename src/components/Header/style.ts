import styled from "styled-components";
import React, { useContext } from 'react'
import Modal from 'react-modal';
import ReactModal from "react-modal";

export const ModalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '20rem',
        height: '10rem',
        // marginRight: '-50%',

        transform: 'translate(-50%, -50%)',

    }
}


export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: ${(props) => props.theme.DASH_BOARD_COLOR}; */
    height: 100%;
    width: 100%;
    border-radius: 5px;
`;

export const ModalMessage = styled.h4`
`;

export const ModalButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
`;
export const ModalButton = styled.button`
    border: none;
    height: 2rem;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.LOGIN_BTN_BG_COLOR};
    background-color: transparent;
    color: ${(props) => props.theme.LOGIN_BTN_BG_COLOR};
    font-weight: bold;

    &:hover{
        color: ${(props) => props.theme.LOGIN_BTN_TXT_COLOR};
        background-color: ${(props) => props.theme.LOGIN_BTN_BG_COLOR};

    }
`;

export const ModalCancelButton = styled.button`
    border: none;
    height: 2rem;

`;

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