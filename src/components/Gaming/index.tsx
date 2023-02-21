import React, { useEffect, useState } from 'react'
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GAMING_VIDEO_URL } from '../../constants/endPoints';
import { ERROR_STATUS } from '../../constants/errorStatus';
import { GamingVideoList } from '../../model/GamingVideoList';
import { GamingVideoListResponse, VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import { getCookie } from '../../util/storage/StorageUtil';
import ErrorComponent from '../ErrorComponent';
import { Render } from '../Home';
import Loader from '../Loader';
import { StyledLink } from '../Login/style';
import PageHeader from '../PageHeader';
import { GamingContainer, GamingVideoCardWrapper, GamingVideosContainer, GamingVideoThumbnail, LiveWatching, VideoDescription, VideoTitle } from './style';

interface GamingProps {

}

const Gaming = ({ }) => {
    const [errorStatus, setErrorStatus] = useState(ERROR_STATUS.IN_PROGRESS)
    const [videoDataList, setVideoDataList] = useState<GamingVideoList>()

    const updateErrorStatus = (status: string) => {
        setErrorStatus(status);
    }

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
            setVideoDataList(new GamingVideoList(listData));
            window.setTimeout(() => updateErrorStatus(ERROR_STATUS.PRESENT), 1000);

        } catch (error) {
            updateErrorStatus(ERROR_STATUS.FAILED)
            console.log(error)
        }
    }

    const renderGamingVideoList = (list ?: GamingVideoList) => {
        return (
            <>
                {
                    list ?
                        list.videos.map((videoItem) => (
                            <StyledLink key={videoItem.id} to={`/videos/${videoItem.id}`}>
                                <GamingVideoCardWrapper key={videoItem.id}>
                                    <GamingVideoThumbnail src={videoItem.thumbnailUrl} />
                                    <VideoDescription>
                                        <VideoTitle>{videoItem.title}</VideoTitle>
                                        <LiveWatching>{`${videoItem.viewCount} Watching Worldwide`}</LiveWatching>
                                    </VideoDescription>
                                </GamingVideoCardWrapper>
                            </StyledLink>
                        ))
                        : <></>
                }
            </>
        )
    }

    useEffect(() => {

        getVideoList();
    }, [])

    const GamingPage = () => {
        if (videoDataList !== null) {

            return (
                <GamingContainer>
                    <PageHeader Icon={FaGamepad} title='Gaming' />
                    <GamingVideosContainer>
                        {renderGamingVideoList(videoDataList)}

                    </GamingVideosContainer>
                </GamingContainer>
            );

        }
        updateErrorStatus(ERROR_STATUS.FAILED);
        return <></>

    }

    return <>{Render(errorStatus, GamingPage(), getVideoList)}</>
}

export default Gaming;