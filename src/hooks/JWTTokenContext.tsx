import React, { createContext } from 'react'
import { deleteCookie, getCookie, LOCAL_STORAGE, updateCookie } from '../components/Login/StorageUtil'

export class  jwtTokenModel{
    token:string;
    constructor(jwt:string){
        this.token = jwt;
    }
    updateJwtToken = (value:string) => {
      updateCookie(LOCAL_STORAGE.JWT_TOKEN, value);
    }

  }
  
const deleteJwtToken = () => {
  deleteCookie(LOCAL_STORAGE.JWT_TOKEN);
}
export const JWTTokenContext = createContext<{jwtToken:string, setToken:Function}>({
    jwtToken:getCookie(LOCAL_STORAGE.JWT_TOKEN),
    setToken:()=>{console.log('setFunction is not bind')},
    
})
