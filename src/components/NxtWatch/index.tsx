import { inject, observer, Provider } from "mobx-react";
import { chdir } from "process";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TransportLayer } from "../../service/TarnsportLayer/index.api";
import { RootStore } from "../../store/RootStore";
import DashBoard from "../DashBoard";
import Gaming from "../Gaming";
import Header from "../Header";
import Home from "../Home";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../Routes/constants";
import SavedVideo from "../SavedVideo";
import Trending from "../Trending";
import { Fixed, NxtWatchContainer } from "./style";

interface NxtWatchProps {
    children: React.ReactNode;
}

interface InjectedProps extends NxtWatchProps {
    rootStore: RootStore;
    transportLayerRef: TransportLayer;
}

const NxtWatch = inject(
    "rootStore",
    "transportLayerRef"
)(
    observer((props: NxtWatchProps) => {
        const { rootStore } = props as InjectedProps;
        return (
            <Provider
                homeVideoStore={rootStore.homeVideoStore}
                gamingVideoStore={rootStore.gamingVideoStore}
                trendingVideoStore={rootStore.trendingVideoStore}
                savedVideoStore={rootStore.savedVideoStore}
            >
                <NxtWatchContainer>
                    <Fixed>
                        <Header />
                        <DashBoard />
                    </Fixed>

                    {props.children}
                </NxtWatchContainer>
            </Provider>
        );
    })
);

export default NxtWatch;
