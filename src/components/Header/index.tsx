import React, { useContext} from 'react'
import { JWTTokenContext } from '../../hooks/JWTTokenContext';
import { ThemeContextHook } from '../../hooks/ThemeContext';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { deleteCookie } from '../../util/storage/StorageUtil';
import { HeaderComponents, HeaderContainer, LogoContainer, LogOutButton, ModalButton, ModalButtonWrapper, ModalContentWrapper, ModalMessage, ModalStyle, ProfileLogo, ThemeChanger, ThemeChangerLogo } from './style';
import { LogoutModalContext } from '../../hooks/ModalContext';
import ReactModal from 'react-modal';;

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

                
            </HeaderComponents>
        </HeaderContainer>



    );
}

export default Header;