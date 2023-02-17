import { chdir } from 'process';
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from '../DashBoard';
import Gaming from '../Gaming';
import Header from '../Header';
import Home from '../Home';
import ProtectedRoute from '../ProtectedRoute';
import { ROUTES } from '../Routes/constants';
import SavedVideo from '../SavedVideo';
import Trending from '../Trending';
import { Fixed, NxtWatchContainer } from './style';

interface NxtWatchProps {
    children: React.ReactNode
}

const NxtWatch = ({ children }: NxtWatchProps) => {

    // console.log(window.location)
    return (
        <NxtWatchContainer>
            <Fixed>

                <Header />
                <DashBoard />
            </Fixed>

            {children}
        </NxtWatchContainer>



    );
}

export default NxtWatch;