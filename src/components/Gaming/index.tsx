import { inject, Observer, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { FaGamepad } from "react-icons/fa";
import { APIStatus } from "../../constants/errorStatus";
import { GamingVideoList } from "../../model/GamingVideoList";
import { VideoBase } from "../../model/VideoBase";
import { GamingVideoStore } from "../../store/GamingVideoStore";
import { LOCAL_STORAGE } from "../../util/storage/constant";
import { getCookie } from "../../util/storage/StorageUtil";
import { Render } from "../Home";
import { PageWrapper } from "../Home/style";
import { StyledLink } from "../Login/style";
import PageHeader from "../PageHeader";
import {
    GamingVideoCardWrapper,
    GamingVideosContainer,
    GamingVideoThumbnail,
    LiveWatching,
    VideoDescription,
    VideoTitle,
} from "./style";

interface GamingInjectedProps {
    gamingVideoStore: GamingVideoStore;
}

const Gaming = inject("gamingVideoStore")(
    observer((props: any) => {
        const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS);
        const [videoDataList, setVideoDataList] = useState<GamingVideoList>();
        const [gamingVideoList, setGamingVideoList] = useState<
            VideoBase[] | null
        >(null);

        const { gamingVideoStore } = props as GamingInjectedProps;

        const updateErrorStatus = (status: APIStatus) => {
            setErrorStatus(status);
        };

        const getVideoList = async () => {
            try {
                if (!gamingVideoStore.videos.length) {
                    const bearerToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);
                    gamingVideoStore.loadVideos(bearerToken);
                    // console.log(gamingVideoStore);
                }

                window.setTimeout(
                    () => updateErrorStatus(APIStatus.PRESENT),
                    200
                );
            } catch (error) {
                updateErrorStatus(APIStatus.FAILED);
                console.log(error);
            }
        };

        const renderGamingVideoList = (list?: GamingVideoList) => {
            return (
                <>
                    {gamingVideoStore.videos ? (
                        gamingVideoStore.videos.map((videoItem) => (
                            <StyledLink
                                data-testid='gaming-video-card'
                                key={videoItem.id}
                                to={`/videos/${videoItem.id}`}
                            >
                                <GamingVideoCardWrapper key={videoItem.id}>
                                    <GamingVideoThumbnail
                                        src={videoItem.thumbnailUrl}
                                    />
                                    <VideoDescription>
                                        <VideoTitle>
                                            {videoItem.title}
                                        </VideoTitle>
                                        <LiveWatching>
                                            {`${videoItem.viewCount} Watching Worldwide`}
                                        </LiveWatching>
                                    </VideoDescription>
                                </GamingVideoCardWrapper>
                            </StyledLink>
                        ))
                    ) : (
                        <></>
                    )}
                </>
            );
        };

        useEffect(() => {
            getVideoList();
        }, []);

        const GamingPage = () => {
            if (videoDataList !== null) {
                return (
                    <PageWrapper data-testid="gaming-page">
                        <PageHeader Icon={FaGamepad} title="Gaming" />
                        <GamingVideosContainer data-testid="gaming-video-container">
                            {renderGamingVideoList(videoDataList)}
                        </GamingVideosContainer>
                    </PageWrapper>
                );
            }
            updateErrorStatus(APIStatus.FAILED);
            return <></>;
        };

        return (
            <PageWrapper>
                {Render(errorStatus, GamingPage(), getVideoList)}
            </PageWrapper>
        );
    })
);

export default Gaming;
