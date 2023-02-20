import React, { useContext } from 'react'
import { JWTTokenContext } from '../../hooks/JWTTokenContext';
import { ThemeContextHook } from '../../hooks/ThemeContext';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { deleteCookie} from '../../util/storage/StorageUtil';
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