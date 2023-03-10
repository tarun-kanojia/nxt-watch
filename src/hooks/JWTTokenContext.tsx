import React, { createContext } from 'react'
import { LOCAL_STORAGE } from '../util/storage/constant';
import { deleteCookie, getCookie, updateCookie } from '../util/storage/StorageUtil'

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
