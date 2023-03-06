import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import { GlobalStyle } from './components/Login/style';
import NxtWatch from './components/NxtWatch';
import { ROUTES } from './components/Routes/constants';
import { ThemeProvider } from 'styled-components';
import { ThemeContextHook } from './hooks/ThemeContext';
import { getCookie } from './util/storage/StorageUtil';
import { JWTTokenContext } from './hooks/JWTTokenContext';
import { Video } from './model/Video';
import { SavedVideosContext } from './hooks/SavedVideos';
import { LogoutModalContext } from './hooks/ModalContext';
import { LOCAL_STORAGE } from './util/storage/constant';
import { THEME_DARK, THEME_LIGHT } from './constants/style';
import { RootStore } from './store/RootStore';
import { TransportLayer } from './service/TarnsportLayer/index.api';
import { GamingVideoStore } from './store/GamingVideoStore';
import { HomeVideoStore } from './store/HomeVideoStore';
import { TrendingVideoStore } from './store/TrendingVideoStore';
import { Provider } from 'mobx-react';
import { SavedVideosStore } from './store/SavedVideosStore';

const rootStore = new RootStore(null);
const transportLayer = new TransportLayer(null);
const gamingVideoStore = new GamingVideoStore(transportLayer, rootStore);
const homeVideoStore = new HomeVideoStore(transportLayer, rootStore);
const trendingVideoStore = new TrendingVideoStore(transportLayer, rootStore);
const savedVideoStore = new SavedVideosStore(transportLayer, rootStore);
rootStore.updateHomeVideoRef(homeVideoStore);
rootStore.updateGamingVideoRef(gamingVideoStore);
rootStore.updateTrendingVideoRef(trendingVideoStore);
rootStore.updateSavedVideoRef(savedVideoStore);


function App () {
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
    // console.log(newSavedVideoList);
    setSavedVideos(newSavedVideoList);
  }


  const closeLogoutModal = () => {
    // console.log('modal close')
    setIsLogoutModalOpen(false);
  }

  const openLogoutModal = () => {
    // console.log('modal open')
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
      <Provider transportLayerRef={transportLayer} rootStore={rootStore}>

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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
