import React, { useEffect, useState } from "react";
import { ALL_VIDEOS_URL } from "../../constants/endPoints";
import { VideoListResponse } from "../../model/types";
import { VideoList } from "../../model/VideoList";
import { filterList } from "../../util/ComponentMethods";
import { getCookie } from "../../util/storage/StorageUtil";
import PrimeBanner from "../PrimeBanner";
import SearchBar from "../SearchBar";
import VideoCardList from "../VideoCardList";
import { HomeContainer, PageWrapper } from "./style";
import {
    getVideoListFromStore,
    updateVideoListToStore,
} from "../../util/storage/VideoListStore";
import { LOCAL_STORAGE } from "../../util/storage/constant";
import Loader from "../Loader";
import { APIStatus } from "../../constants/errorStatus";
import ErrorComponent from "../ErrorComponent";
import { inject, observer } from "mobx-react";
import { HomeVideoStore } from "../../store/HomeVideoStore/index";

export const Render = (
    errorStatus: APIStatus,
    SuccessComponent: React.ReactNode,
    retryFunction: Function
) => {
    switch (errorStatus) {
        case APIStatus.PRESENT:
            return <>{SuccessComponent}</>;

        case APIStatus.IN_PROGRESS:
            return <Loader />;

        case APIStatus.FAILED:
            return (
                <HomeContainer>
                    <ErrorComponent getVideoList={retryFunction} />
                </HomeContainer>
            );
    }
};

interface HomeInjectedPops {
    homeVideoStore: HomeVideoStore;
}

const Home = inject("homeVideoStore")(
    observer((props: any) => {
        const [query, setQuery] = useState("");
        const [videoDataList, setVideoDataList] = useState<VideoList>({});
        const [showPrimeBanner, setShowPrimeBanner] = useState(true);
        const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS);

        const { homeVideoStore } = props as HomeInjectedPops;

        const hidePrimeBanner = () => {
            setShowPrimeBanner(false);
        };

        const updateQuery = (text: string) => {
            setQuery(text);
            console.log(query);
        };

        const updateVideoDataList = (list: Object) => {
            console.log("store home video list", list);
        };

        const updateErrorStatus = (status: APIStatus) => {
            setErrorStatus(status);
        };

        const getVideoList = async () => {
            try {
                if (!homeVideoStore.videos.length) {
                    const bearerToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);
                    homeVideoStore.loadVideos(bearerToken);
                }

                window.setTimeout(
                    () => updateErrorStatus(APIStatus.PRESENT),
                    1000
                );
            } catch (error) {
                console.log(error);
                updateErrorStatus(APIStatus.FAILED);
            }
        };

        // console.log(homeVideoStore.filterVideos);

        useEffect(() => {
            getVideoList();
        }, []);

        const HomePage = () => {
            return (
                <>
                    <SearchBar query={query} updateQuery={updateQuery} />
                    <VideoCardList videoList={homeVideoStore.filterVideos} />
                </>
            );
        };

        return (
            <PageWrapper data-testid="Home">
                {showPrimeBanner ? (
                    <PrimeBanner hidePrimeBanner={hidePrimeBanner} />
                ) : null}
                {Render(errorStatus, HomePage(), getVideoList)}
            </PageWrapper>
        );
    })
);

export default Home;
