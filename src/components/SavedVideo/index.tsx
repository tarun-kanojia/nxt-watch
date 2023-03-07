import { inject, observer } from "mobx-react";
import { reaction } from "mobx";
import React, { useContext, useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { APIStatus } from "../../constants/errorStatus";
import { SavedVideosContext } from "../../hooks/SavedVideos";
import { VideoListResponse } from "../../model/types";
import { VideoList } from "../../model/VideoList";
import { SavedVideosStore } from "../../store/SavedVideosStore";
import { LOCAL_STORAGE } from "../../util/storage/constant";
import { getCookie } from "../../util/storage/StorageUtil";
import { Render } from "../Home";
import { PageWrapper } from "../Home/style";
import PageHeader from "../PageHeader";
import SavedVideoErrorComponent from "../SavedVideoErrorComponent";
import VideoCardListHorizontal from "../VideoCardListHorizontal";
import { SavedVideoContainer } from "./style";

interface SavedVideoProps {}

interface SavedVideoInjectedProps {
    savedVideoStore: SavedVideosStore;
}

const SavedVideo = inject("savedVideoStore")(
    observer((props: any) => {
        const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS);
        const videoList = useContext(SavedVideosContext);
        const totalVideos = new VideoList();

        const { savedVideoStore } = props as SavedVideoInjectedProps;

        totalVideos.total = videoList
            ? videoList.savedVideos.length.toString()
            : "0";
        totalVideos.videos = videoList ? videoList.savedVideos : [];

        const updateErrorStatus = (status: APIStatus) => {
            setErrorStatus(status);
        };
        const getVideoList = () => {
            try {
                if (!savedVideoStore.videos.length) {
                    const bearerToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);
                    savedVideoStore.loadVideos();
                }
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getVideoList();
        }, []);

        const SavedVideoPage = () => {
            if (videoList && videoList.savedVideos.length > 0) {
                // updateErrorStatus(APIStatus.PRESENT);
                console.log("saved-videos", videoList.savedVideos);
                return (
                    <>
                        <PageHeader Icon={FaFire} title="Saved Videos" />
                        <VideoCardListHorizontal
                            videoDataList={savedVideoStore.videos}
                        />
                    </>
                );
            } else {
                return (
                    <>
                        <SavedVideoErrorComponent />
                    </>
                );
            }
        };
        return (
            <PageWrapper data-testid="save-video">
                {SavedVideoPage()}
            </PageWrapper>
        );
    })
);

export default SavedVideo;
