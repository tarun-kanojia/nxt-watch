import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { VIDEOS_BASE_URL, VIDEO_URL } from '../../constants/endPoints';
import { VideoResponse } from '../../model/types';
import { Video } from '../../model/Video';
import { getDuration } from '../../util/DateFunction';
import { getCookie, LOCAL_STORAGE } from '../Login/StorageUtil';
import { ActionButtonWrapper, CenterContainer, ChannelDescription, ChannelDetails, ChannelName, ChannelProfile, ChannelSubscribersCount, ChannelWrapper, Divider, DoteIcon, Duration, Title, VideoActonWrapper, VideoAnalyticsWrapper, VideoContainer, ViewCount, YoutubeEmbed } from './style';
import { BiLike, BiDislike, BiSave } from 'react-icons/bi'
import ActionIconButton from '../ActionIconButton';
import { ActionIconButtonList } from '../../model/ActionIconButton';
import { ICONS } from '../ActionIconButton/constant';
import ActionButtonList from '../ActionButtonsList';

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

const VideoComponent = ({ }) => {
    const [videoData, setVideoData] = useState<Video | null>(null)
    const [actionIconButtonList, setActionIconButtonList] = useState(new ActionIconButtonList(ICONS))

    const videoId = useParams().id;

    const updateActionButtonList = (list: ActionIconButtonList) => {
        setActionIconButtonList(new ActionIconButtonList(list))
    }

    const getVideoId = (videoUrl: string | undefined) => {
        return videoUrl == undefined ? ''
            : videoUrl.substring(videoUrl.indexOf('=') + 1);
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
            setVideoData(new Video(responseVideoData));


        } catch (error) {

        }
    }
    // console.log(videoData);

    useEffect(() => {
        console.log(getVideoData())
    }, [])

    return (
        videoData == null ?
            <>Loading</>

            : <VideoContainer>
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
                        <CenterContainer>

                            <BiSave size='2rem'
                                color={true ? '#3b82f6' : 'grey'}
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
    );
}

export default VideoComponent;