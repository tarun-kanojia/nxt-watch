import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, Outlet, useNavigate, redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import { getCookie } from '../../util/storage/StorageUtil';
import path from 'path';
import { JWTTokenContext } from '../../hooks/JWTTokenContext';
import Loader from '../Loader';

interface ProtectedRouteProps {
    renderElement: () => JSX.Element
}

const JWT_TOKEN_UPDATE = {
    IN_PROGRESS: 'IN_PROGRESS',
    PRESENT: 'PRESENT',
    MISSING: 'MISSING'
}

const Navigator = ({ to ,isToken}: { to: string,isToken:string }) => {
    // let navigate = useNavigate();
    // useEffect(() => {
    //     console.log('useeffct Missing JWT TOKEN')

    //     redirect('/login')

    // },[isToken])
    return <Navigate to ='/login' replace />
}

const ProtectedRoute = ({ renderElement }: ProtectedRouteProps) => {
    const JWT_TOKEN = getCookie('JWT_TOKEN');
    const token = useContext(JWTTokenContext)
    // console.log(JWT_TOKEN,'erfd');
    // useEffect(() => {
    //     if(!JWT_TOKEN)
    //     console.log('useeffct Missing JWT TOKEN')

    //     redirect('/login')

    // },[])


    console.log('JWT_TOKEN', JWT_TOKEN)
    const isToken = JWT_TOKEN === '' ? JWT_TOKEN_UPDATE.MISSING : JWT_TOKEN_UPDATE.PRESENT;

    switch (isToken) {
        case JWT_TOKEN_UPDATE.PRESENT:
            return (renderElement());

        case JWT_TOKEN_UPDATE.MISSING:
            return <Navigator to="/login" isToken={isToken}/>

        default:
            return <Loader />
    }
}
export default ProtectedRoute;