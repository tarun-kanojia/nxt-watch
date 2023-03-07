import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VIDEOS_BASE_URL, VIDEO_URL } from "../../constants/endPoints";
import { VideoResponse } from "../../model/types";
import { Video } from "../../model/Video";
import { getDuration } from "../../util/DateFunction";
import { getCookie } from "../../util/storage/StorageUtil";
import {
    ActionButtonWrapper,
    CenterContainer,
    ChannelDescription,
    ChannelDetails,
    ChannelName,
    ChannelProfile,
    ChannelSubscribersCount,
    ChannelWrapper,
    Divider,
    DoteIcon,
    Duration,
    Title,
    VideoActonWrapper,
    VideoAnalyticsWrapper,
    VideoContainer,
    ViewCount,
    YoutubeEmbed,
} from "./style";
import { BiLike, BiDislike, BiSave } from "react-icons/bi";
import ActionIconButton from "../ActionIconButton";
import { ActionIconButtonList } from "../../model/ActionIconButton";
import { ICONS } from "../ActionIconButton/constant";
import ActionButtonList from "../ActionButtonsList";
import { SavedVideosContext, SavedVideosType } from "../../hooks/SavedVideos";
import { LOCAL_STORAGE } from "../../util/storage/constant";
import { PageWrapper } from "../Home/style";
import Loader from "../Loader";
import { LikedStatus, LikedStatusType } from "../../constants/errorStatus";
import {
    addVideoDataToStore,
    getVideoDataFromStore,
    videoComponentListStore,
} from "../../store/videoComponentStore";
import { inject, observer } from "mobx-react";
import { SavedVideosStore } from "../../store/SavedVideosStore";
import { reaction, autorun } from "mobx";
interface VideoComponentProps {}

interface VideoComponentInjectedProps {
    savedVideoStore: SavedVideosStore;
}

export const getVideoResponseTypeData = (data: Video) => {
    return {
        channel: {
            name: data.channel.name,
            profile_image_url: data.channel.profileImageUrl,
            subscriber_count: data.channel.subscriberCount,
        },
        id: data.id,
        published_at: data.publishedAt,
        thumbnail_url: data.thumbnailUrl,
        title: data.title,
        view_count: data.viewCount,
        video_url: data.videoUrl,
        is_liked: data.isLiked,
        description: data.description,
    };
};

export const youtubeStyleOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const savedVideoStatus = (
    videoList: SavedVideosType | null,
    id: string | undefined
) => {
    const isSaved = videoList
        ? videoList.savedVideos.some((video) => video.id == id)
        : false;
    return isSaved;
};

const VideoComponent = inject("savedVideoStore")(
    observer((props: any) => {
        const videoId = useParams().id;
        const videoList = useContext(SavedVideosContext);
        const [videoData, setVideoData] = useState<Video | null>(null);
        const [actionIconButtonList, setActionIconButtonList] = useState(
            new ActionIconButtonList(ICONS)
        );
        const [videoSavedStatus, setVideoSavedStatus] = useState(
            savedVideoStatus(videoList, videoId)
        );

        const { savedVideoStore } = props as VideoComponentInjectedProps;

        const updateVideoSavedStatus = () => {
            setVideoSavedStatus(!videoSavedStatus);
        };

        const updateActionButtonList = (list: ActionIconButtonList) => {
            setActionIconButtonList(new ActionIconButtonList(list));
        };

        //extracting id from url
        const getVideoId = (videoUrl: string | undefined) => {
            return videoUrl == undefined
                ? ""
                : videoUrl.substring(videoUrl.indexOf("=") + 1);
        };

        const updateVideoData = (data: Video) => {
            // const newData = getVideoResponseTypeData({...data});
            // console.log(newData)
            setVideoData(data);
            // console.log(newData.isLiked)
        };

        const updateTheStatus = (newVideoData: Video) => {
            if (videoList) {
                videoList.updateSaveVideoList({ ...newVideoData });
                updateVideoData(newVideoData);
                // console.log('inside updateTheStatus: ', videoList)
                updateVideoSavedStatus();
            }
        };

        const toggleSavedStatus = () => {
            if (videoData) {
                videoData.toggleSavedStatus();
                updateTheStatus(videoData);
                updateVideoSavedStatus();
            }
        };

        const getVideoData = async () => {
            const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);

            try {
                if (!videoId) throw new Error();

                const requestOption = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                        "Content-Type": "application/json",
                    },

                    method: "GET",
                };
                let videoResponseData: Video | null = null;
                const storeData = getVideoDataFromStore(videoId);
                if (storeData === null) {
                    const response = await fetch(
                        VIDEOS_BASE_URL + `/${videoId}`,
                        requestOption
                    );
                    const responseData: { video_details: VideoResponse } =
                        await response.json();
                    // console.log(responseData)
                    const videoResponse: VideoResponse =
                        responseData.video_details;
                    videoResponseData = new Video(videoResponse);
                    // setVideoData(new Video(responseVideoData));

                    addVideoDataToStore(videoResponseData);
                } else {
                    videoResponseData = getVideoDataFromStore(videoId);
                }

                window.setTimeout(() => {
                    if (videoResponseData !== null)
                        updateVideoData(videoResponseData);
                }, 100);
            } catch (error) {
                console.log(error);
            }
        };
        // console.log(videoData?.isLiked);

        useEffect(() => {
            getVideoData();
        }, []);

        const onClickIcon = (videoData: Video) => {
            if (videoList !== null) {
                videoList.updateSaveVideoList(videoData);
            }
        };
        // console.log(videoSavedStatus)

        return videoData == null ? (
            <Loader />
        ) : (
            <PageWrapper data-testid="full-video-card">
                <VideoContainer>
                    <YoutubeEmbed
                        videoId={getVideoId(videoData.videoUrl)}
                        opts={youtubeStyleOpts}
                    />
                    <Title>{videoData.title}</Title>
                    <VideoActonWrapper>
                        <VideoAnalyticsWrapper>
                            <ViewCount>{`${videoData.viewCount} views`}</ViewCount>
                            <DoteIcon />
                            <Duration>{`${getDuration(
                                videoData.publishedAt
                            )} ago`}</Duration>
                        </VideoAnalyticsWrapper>
                        <ActionButtonWrapper>
                            <ActionButtonList
                                actionIconButtonList={actionIconButtonList}
                                updateActionButtonList={updateActionButtonList}
                                video={videoData}
                                updateVideoData={updateVideoData}
                            />
                            <CenterContainer
                                onClick={() => {
                                    toggleSavedStatus();
                                    savedVideoStore.toggleVideoData(videoData);
                                    // updateVideoSavedStatus();
                                }}
                            >
                                <BiSave
                                    size="2rem"
                                    color={
                                        videoSavedStatus ? "#3b82f6" : "grey"
                                    }
                                />
                                <span>Save</span>
                            </CenterContainer>
                        </ActionButtonWrapper>
                    </VideoActonWrapper>

                    <Divider />

                    <ChannelWrapper>
                        <ChannelProfile
                            src={videoData.channel.profileImageUrl}
                        />
                        <ChannelDetails>
                            <ChannelName>{videoData.channel.name}</ChannelName>
                            <ChannelSubscribersCount>{`${videoData.channel.subscriberCount} subscribers`}</ChannelSubscribersCount>
                            <ChannelDescription>
                                {videoData.description}
                            </ChannelDescription>
                        </ChannelDetails>
                    </ChannelWrapper>
                </VideoContainer>
            </PageWrapper>
        );
    })
);

export default VideoComponent;
