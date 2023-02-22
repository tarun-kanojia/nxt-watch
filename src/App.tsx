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
import { getCookie } from './util/storage/StorageUtil';
import { JWTTokenContext, jwtTokenModel } from './hooks/JWTTokenContext';
import Router from './components/Router';
import { Video } from './model/Video';
import { SavedVideosContext } from './hooks/SavedVideos';
import { LogoutModalContext } from './hooks/ModalContext';
import { LOCAL_STORAGE } from './util/storage/constant';
import { THEME_DARK, THEME_LIGHT } from './constants/style';






function App() {
  const [theme, setTheme] = useState('light')
  const [jwtToken, setJwtToken] = useState(getCookie(LOCAL_STORAGE.JWT_TOKEN))
  const [savedVideos, setSavedVideos] = useState<Video[]>([])
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const updateSaveVideoList = (data: Video) => {
    let newSavedVideoList = [...savedVideos];
    if (!newSavedVideoList.some((video) => video.id === data.id)) {
      newSavedVideoList.push(data)
    } else {
      newSavedVideoList = newSavedVideoList.filter((video) => video.id !== data.id)
    }
    console.log(newSavedVideoList);
    setSavedVideos(newSavedVideoList);
  }
  
  
  const closeLogoutModal = () => {
    console.log('modal close')
    setIsLogoutModalOpen(false);
  }

  const openLogoutModal = () => {
    console.log('modal open')
    setIsLogoutModalOpen(true);
  }
  const toggleModal = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  }

  const setToken = (token: string) => {
    setJwtToken(token);
  }

  
  return (

    <BrowserRouter>
      <JWTTokenContext.Provider value={{ jwtToken, setToken }}>
        <LogoutModalContext.Provider value={{ isLogoutModalOpen, openLogoutModal, closeLogoutModal, toggleModal }}>


          <SavedVideosContext.Provider value={{ savedVideos, updateSaveVideoList }}>


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
          </SavedVideosContext.Provider>
        </LogoutModalContext.Provider>
      </JWTTokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
