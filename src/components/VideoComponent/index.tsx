import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { VIDEOS_BASE_URL, VIDEO_URL } from '../../constants/endPoints';
import { VideoResponse } from '../../model/types';
import { Video } from '../../model/Video';
import { getDuration } from '../../util/DateFunction';
import { getCookie } from '../../util/storage/StorageUtil';
import { ActionButtonWrapper, CenterContainer, ChannelDescription, ChannelDetails, ChannelName, ChannelProfile, ChannelSubscribersCount, ChannelWrapper, Divider, DoteIcon, Duration, Title, VideoActonWrapper, VideoAnalyticsWrapper, VideoContainer, ViewCount, YoutubeEmbed } from './style';
import { BiLike, BiDislike, BiSave } from 'react-icons/bi'
import ActionIconButton from '../ActionIconButton';
import { ActionIconButtonList } from '../../model/ActionIconButton';
import { ICONS } from '../ActionIconButton/constant';
import ActionButtonList from '../ActionButtonsList';
import { SavedVideosContext, SavedVideosType } from '../../hooks/SavedVideos';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { PageWrapper } from '../Home/style';

interface VideoComponentProps {

}

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const savedVideoStatus = (videoList: SavedVideosType | null, id: string | undefined) => {
    const isSaved = videoList ?
        videoList.savedVideos.some((video) => video.id == id)
        : false;
    console.log(isSaved)
    return isSaved;
}

const VideoComponent = ({ }) => {
    const videoId = useParams().id;
    const videoList = useContext(SavedVideosContext);
    const [videoData, setVideoData] = useState<Video | null>(null)
    const [actionIconButtonList, setActionIconButtonList] = useState(new ActionIconButtonList(ICONS))
    const [videoSavedStatus, setVideoSavedStatus] = useState(savedVideoStatus(videoList, videoId));


    const updateVideoSavedStatus = () => {
        setVideoSavedStatus(!videoSavedStatus);

    }

    const updateActionButtonList = (list: ActionIconButtonList) => {
        setActionIconButtonList(new ActionIconButtonList(list))
    }

    //extracting id from url
    const getVideoId = (videoUrl: string | undefined) => {
        return videoUrl == undefined ? ''
            : videoUrl.substring(videoUrl.indexOf('=') + 1);
    }

    const updateVideoData = (data: Video) => {
        setVideoData(data);
    }

    const updateTheStatus = (newVideoData: Video) => {
        if (videoList) {
            videoList.updateSaveVideoList({ ...newVideoData });
            updateVideoData(newVideoData);
            console.log('inside updateTheStatus: ', videoList)
            updateVideoSavedStatus();

        }

    }

    const toggleSavedStatus = () => {

        if (videoData) {
            videoData.toggleSavedStatus();
            updateTheStatus(videoData)
            updateVideoSavedStatus();


        }

    }

    const getVideoData = async () => {
        const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);
        const requestOption = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
            },

            method: 'GET'

        }

        try {
            const response = await fetch(VIDEOS_BASE_URL + `/${videoId}`, requestOption);
            const responseData = await response.json();
            // console.log(responseData)
            const responseVideoData: VideoResponse = responseData.video_details;
            updateVideoData(new Video(responseVideoData));
            // setVideoData(new Video(responseVideoData));


        } catch (error) {

        }
    }
    // console.log(videoData);


    useEffect(() => {
        getVideoData();


    }, [])


    const onClickIcon = (videoData: Video) => {
        if (videoList !== null) {
            videoList.updateSaveVideoList(videoData)
        }

    }
    console.log(videoSavedStatus)

    return (
        videoData == null ?
            <>Loading</>

            :
            <PageWrapper>

                <VideoContainer>

                    <YoutubeEmbed videoId={getVideoId(videoData.videoUrl)} opts={opts} />
                    <Title>{videoData.title}</Title>
                    <VideoActonWrapper>
                        <VideoAnalyticsWrapper>
                            <ViewCount>{`${videoData.viewCount} views`}</ViewCount>
                            <DoteIcon />
                            <Duration>{`${getDuration(videoData.publishedAt)} ago`}</Duration>
                        </VideoAnalyticsWrapper>
                        <ActionButtonWrapper>
                            <ActionButtonList
                                actionIconButtonList={actionIconButtonList}
                                updateActionButtonList={updateActionButtonList}
                            />
                            <CenterContainer onClick={() => {

                                toggleSavedStatus()
                                // updateVideoSavedStatus();
                            }}>

                                <BiSave size='2rem'
                                    color={videoSavedStatus ? '#3b82f6' : 'grey'}
                                />
                                <span>Save</span>
                            </CenterContainer>
                        </ActionButtonWrapper>
                    </VideoActonWrapper>

                    <Divider />

                    <ChannelWrapper>
                        <ChannelProfile src={videoData.channel.profileImageUrl} />
                        <ChannelDetails>
                            <ChannelName>{videoData.channel.name}</ChannelName>
                            <ChannelSubscribersCount>{`${videoData.channel.subscriberCount} subscribers`}</ChannelSubscribersCount>
                            <ChannelDescription>{videoData.description}</ChannelDescription>
                        </ChannelDetails>
                    </ChannelWrapper>

                </VideoContainer>
            </PageWrapper>

    );
}

export default VideoComponent;