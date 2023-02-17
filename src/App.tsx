import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, redirect, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import SavedVideo from './components/SavedVideo';
import NotFound from './components/NotFound';
import { LoginMetaData } from './model/LoginMetaData';
import { GlobalStyle } from './components/Login/style';
import NxtWatch from './components/NxtWatch';
import { ROUTES } from './components/Routes/constants';
import RenderRoutes from './components/Routes';
import { ThemeProvider } from 'styled-components';
import { ThemContextModel } from './hooks/module/ThemeContext';
import { ThemeContextHook } from './hooks/ThemeContext';
import { getCookie, LOCAL_STORAGE } from './components/Login/StorageUtil';
import { JWTTokenContext, jwtTokenModel } from './hooks/JWTTokenContext';
import Router from './components/Router';
import { Video } from './model/Video';
import { SavedVideosContext } from './hooks/SavedVideos';



export let THEME_LIGHT = {

  LOGO_URL: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
  THEME_TOGGLER: "https://img.icons8.com/glyph-neue/256/bright-moon.png",
  PROFILE_LOGO: "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png ",
  BACKGROUND_COLOR: ' #ffffff',
  PAGE_BACKGROUND_COLOR: '#eeee',
  PAGE_BANNER_BG_COLOR: '  #dfdfdf',
  LABEL: '#909090',
  INPUT: '#0f0f0f',
  LOGIN_BTN_BG_COLOR: '#3b82f6',
  LOGIN_BTN_TXT_COLOR: ' #f8fafc',
  SHOW_PASSWORD: 'black',
  LOGOUT_BTN_BORDER_COLOR: '#3b82f6',
  LOGOUT_BTN_TXT_COLOR: '#3b82f6',
  SEARCH_BAR_BACKGROUND: '#ffffff',
  SEARCH_BAR_BORDER_COLOR: '#929292',
  DASH_BOARD_TXT_COLOR: '#606060',
  DASH_BOARD_COLOR: '#fffff',
  SUBSCRIBER_COUNT_TXT_SIZE: 'smaller',
  DESCRIPTION_FONT_SIZE: 'medium'

}

export let THEME_DARK = {
  LOGO_URL: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
  THEME_TOGGLER: "https://img.icons8.com/ios11/600/FFFFFF/sun.png",
  BACKGROUND_COLOR: ' #231f20',
  PAGE_BACKGROUND_COLOR: '#0f0f0f',
  PAGE_BANNER_BG_COLOR: ' #212121',
  LABEL: '#f8fafc',
  INPUT: '#ffffff',
  SHOW_PASSWORD: '#f8fafc',
  PROFILE_LOGO: "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png ",
  LOGIN_BTN_BG_COLOR: '#3b82f6',
  LOGIN_BTN_TXT_COLOR: ' #f8fafc',
  LOGOUT_BTN_BORDER_COLOR: '#ffffff',
  LOGOUT_BTN_TXT_COLOR: '#ffffff',
  SEARCH_BAR_BORDER_COLOR: '#adadad',
  SEARCH_BAR_BACKGROUND: '#0f0f0f',
  DASH_BOARD_TXT_COLOR: '#ffffff',
  DASH_BOARD_COLOR: '#231f20',
  SUBSCRIBER_COUNT_TXT_SIZE: 'smaller',
  DESCRIPTION_FONT_SIZE: 'medium'
}


function App() {
  const [theme, setTheme] = useState('light')
  // const [jwtToken, setJwtToken] = useState(getCookie(LOCAL_STORAGE.JWT_TOKEN))
  const [savedVideos, setSavedVideos] = useState<Video[]>([])

  const updateSaveVideoList = (data: Video) => {
    const newSavedVideoList = [...savedVideos];
    newSavedVideoList.map((video) => video.id === data.id)
    newSavedVideoList.push(data);
    console.log(newSavedVideoList);
    setSavedVideos(newSavedVideoList);
  }




  return (

    <BrowserRouter>
      {/* <JWTTokenContext.Provider value={{ jwtToken: jwtToken, setToken: setJwtToken }}> */}
      <SavedVideosContext.Provider value={{savedVideos, updateSaveVideoList}}>


        <ThemeContextHook.Provider value={{ active: theme, toggleTheme: setTheme }}>

          <ThemeProvider theme={theme === 'light' ? THEME_LIGHT : THEME_DARK}>

            <GlobalStyle />


            <Routes>

              <Route path='/login' element={<Login />} />
              {ROUTES.map((route) => {
                const Element = route.element;

                return (
                  <Route key={route.path} path={route.path} element={
                    <ProtectedRoute renderElement={() => <NxtWatch children={<Element />} />} />
                  } />
                )
              })}


              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' replace />} />

            </Routes>
          </ThemeProvider>
        </ThemeContextHook.Provider>
        {/* </JWTTokenContext.Provider> */}
      </SavedVideosContext.Provider>
    </BrowserRouter>
  );
}

export default App;
