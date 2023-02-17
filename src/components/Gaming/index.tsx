import React, { useEffect, useState } from 'react'
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GAMING_VIDEO_URL } from '../../constants/endPoints';
import { GamingVideoList } from '../../model/GamingVideoList';
import { GamingVideoListResponse, VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import { getCookie, LOCAL_STORAGE } from '../Login/StorageUtil';
import PageHeader from '../PageHeader';
import { GamingContainer, GamingVideoCardWrapper, GamingVideosContainer, GamingVideoThumbnail, LiveWatching, VideoDescription, VideoTitle } from './style';

interface GamingProps {

}

const Gaming = ({ }) => {
    const [videoDataList, setVideoDataList] = useState<GamingVideoList | null>(null)
    const getVideoList = async () => {
        try {

            const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN)
            const requestOption = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                },

                method: 'GET'

            }
            const listResponse = await fetch(GAMING_VIDEO_URL, requestOption);
            const listData: GamingVideoListResponse = await listResponse.json();
            setVideoDataList(new GamingVideoList(listData))

        } catch (error) {
            console.log(error)
        }
    }

    console.log(videoDataList)

    useEffect(() => {
        getVideoList();
    }, [])
    return (
        videoDataList === null ? null
            : <GamingContainer>
                <PageHeader Icon={FaGamepad} title='Gaming' />
                <GamingVideosContainer>

                    {
                        videoDataList.videos.map((videoItem) => (
                            <Link to={`/videos/${videoItem.id}`}>
                                <GamingVideoCardWrapper key={videoItem.id}>
                                    <GamingVideoThumbnail src={videoItem.thumbnailUrl} />
                                    <VideoDescription>
                                        <VideoTitle>{videoItem.title}</VideoTitle>
                                        <LiveWatching>{`${videoItem.viewCount} Watching Worldwide`}</LiveWatching>
                                    </VideoDescription>
                                </GamingVideoCardWrapper>
                            </Link>
                        ))
                    }
                </GamingVideosContainer>
            </GamingContainer>);
}

export default Gaming;