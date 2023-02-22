import React, { useContext, useState } from 'react'
import { JWTTokenContext } from '../../hooks/JWTTokenContext';
import { ThemeContextHook } from '../../hooks/ThemeContext';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { deleteCookie } from '../../util/storage/StorageUtil';
import { HeaderComponents, HeaderContainer, LogoContainer, LogOutButton, ModalButton, ModalButtonWrapper, ModalCancelButton,  ModalContentWrapper, ModalMessage, ModalStyle, ProfileLogo, ThemeChanger, ThemeChangerLogo } from './style';
import Modal from 'react-modal';
import { LogoutModalContext } from '../../hooks/ModalContext';
import ReactModal from 'react-modal';
import App from '../../App';
import LogoutModal from '../Modal';
import PureModal from 'react-pure-modal';
import Popup from 'reactjs-popup';

const Header = () => {
    const theme = useContext(ThemeContextHook);
    const jwtHandler = useContext(JWTTokenContext)
    const modalOp = useContext(LogoutModalContext)
    const dummy = () => {
        modalOp?.closeLogoutModal();
    }

    return (
        <HeaderContainer>

            <LogoContainer />
            <HeaderComponents>

                <ThemeChanger onClick={() => { theme.toggleTheme((theme.active === 'light' ? 'dark' : 'light')) }}  >
                    <ThemeChangerLogo />

                </ThemeChanger>
                <ProfileLogo />
                <ReactModal
                    isOpen={modalOp ? modalOp.isLogoutModalOpen : false}
                    onRequestClose={dummy}
                    style={ModalStyle}
                    ariaHideApp={false}
                >
                    <ModalContentWrapper >

                        <ModalMessage>ARE YOU SURE YOU WANT TO LOGOUT</ModalMessage>
                        <ModalButtonWrapper>
                            <ModalButton
                                onClick={() => modalOp?.closeLogoutModal()}
                            >CANCEL</ModalButton>
                            <ModalButton
                                onClick={() => {
                                    jwtHandler.setToken('')
                                    deleteCookie(LOCAL_STORAGE.JWT_TOKEN)
                                    deleteCookie(LOCAL_STORAGE.HOME_VIDEO_LIST)
                                    modalOp?.closeLogoutModal()
                                }}
                            >CONFIRM</ModalButton>
                        </ModalButtonWrapper>
                    </ModalContentWrapper>
                </ReactModal>
                <LogOutButton
                    onClick={() => {
                        modalOp?.openLogoutModal()
                    }}
                >Logout</LogOutButton>

                {/* <Popup
                    trigger={
                        <LogOutButton
                            onClick={() => {
                                modalOp?.openLogoutModal()
                            }}
                        >Logout</LogOutButton>
                    }
                    modal={modalOp ? modalOp.isLogoutModalOpen : false}
                >
                    <>
                    {
                        (close: Function) => (
                            <>
                                <ModalCancelButton
                                    onClick={() => close()}
                                    >CANCEL</ModalCancelButton>
                                <ModalContentWrapper >

                                    <ModalMessage>ARE YOU SURE YOU WANT TO LOGOUT</ModalMessage>
                                    <ModalButtonWrapper>
                                        <ModalCancelButton
                                            onClick={() => modalOp?.closeLogoutModal()}
                                            >CANCEL</ModalCancelButton>
                                        <ModalConfirmButton
                                            onClick={() => {
                                                // jwtHandler.setToken('')
                                                // deleteCookie(LOCAL_STORAGE.JWT_TOKEN)
                                                modalOp?.closeLogoutModal()
                                            }}
                                            >CONFIRM</ModalConfirmButton>
                                    </ModalButtonWrapper>
                                </ModalContentWrapper>
                            </>
                        )
                    }
                    </>


                </Popup> */}
            </HeaderComponents>
        </HeaderContainer>



    );
}

export default Header;