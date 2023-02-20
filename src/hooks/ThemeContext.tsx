import { createContext} from 'react'




type ThemeContextType = "light" | "dark";
export const ThemeContextHook = createContext<{ active: string, toggleTheme: Function}>({
    active: 'light',

    toggleTheme: () => { console.log('no function') },

});