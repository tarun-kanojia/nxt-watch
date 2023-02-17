import React, { Children, createContext, useState } from 'react'
import { deleteCookie, LOCAL_STORAGE } from '../components/Login/StorageUtil';
import { ThemContextModel } from './module/ThemeContext';



type ThemeContextType = "light" | "dark";
export const ThemeContextHook = createContext<{ active: string, toggleTheme: Function}>({
    active: 'light',

    toggleTheme: () => { console.log('no function') },

});