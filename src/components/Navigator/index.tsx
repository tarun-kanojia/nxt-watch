import React from 'react'
import { Navigate } from 'react-router-dom';


const Navigator = ({ to ,isToken}: { to: string,isToken:string }) => {
   
    return <Navigate to ={to} replace />
}


export default Navigator;