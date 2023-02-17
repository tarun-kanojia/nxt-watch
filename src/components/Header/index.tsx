import React, { useContext } from 'react'
import { JWTTokenContext } from '../../hooks/JWTTokenContext';
import { ThemeContextHook } from '../../hooks/ThemeContext';
import { deleteCookie, LOCAL_STORAGE } from '../Login/StorageUtil';
import { HeaderComponents, HeaderContainer, LogoContainer, LogOutButton, ProfileLogo, ThemeChanger, ThemeChangerLogo } from './style';


const Header = () => {
    const theme = useContext(ThemeContextHook);
    const jwtHandler = useContext(JWTTokenContext)
    // console.log(theme, 'themeModel')
    return (
        <HeaderContainer>
            <LogoContainer />
            <HeaderComponents>

                <ThemeChanger onClick={() => { theme.toggleTheme((theme.active === 'light' ? 'dark' : 'light')) }}  >
                    <ThemeChangerLogo />

                </ThemeChanger>
                <ProfileLogo />
                <LogOutButton
                    onClick={() => {
                        jwtHandler.setToken('')
                        deleteCookie(LOCAL_STORAGE.JWT_TOKEN)
                    }}
                >Logout</LogOutButton>
            </HeaderComponents>
        </HeaderContainer>



    );
}

export default Header;