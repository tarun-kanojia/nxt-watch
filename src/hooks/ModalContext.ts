import { createContext } from "react";

type LogoutModalType = {
    isLogoutModalOpen:boolean,
    openLogoutModal:Function,
    closeLogoutModal:Function,
    toggleModal:Function
}

export const LogoutModalContext = createContext<LogoutModalType|null>(null);

