import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from '../DashBoard';
import Header from '../Header';
import Login from '../Login';
import { getCookie, LOCAL_STORAGE } from '../Login/StorageUtil';
import NotFound from '../NotFound';
import ProtectedRoute from '../ProtectedRoute';
import { ROUTES } from '../Routes/constants';

const Router = () => {
    const th = () => {
        console.log('second routes')
    }
    const JWT_TOKEN = getCookie(LOCAL_STORAGE.JWT_TOKEN);
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
            {
                JWT_TOKEN ?
                <>
                <Header />
                <DashBoard />
                </>
                : null

            }
            <Routes>
                {ROUTES.map((route) => {
                    const Element = route.element;
                    console.log('inside')
                    return (
                        <Route key={route.path} path={route.path} element={
                            <ProtectedRoute renderElement={() => <Element />} />
                        } />
                    )
                })}

                <Route path='/not-found' element={<NotFound />} />
                <Route path='*' element={<Navigate to='/not-found' replace />} />

            </Routes>
            

        </>
    );
}

export default Router;