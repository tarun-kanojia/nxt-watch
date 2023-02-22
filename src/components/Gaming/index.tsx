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
import { getVideoListFromStore, updateVideoListToStore } from '../../util/storage/VideoListStore';
import ErrorComponent from '../ErrorComponent';
import { Render } from '../Home';
import { PageWrapper } from '../Home/style';
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

            const list: VideoListResponse = getVideoListFromStore(LOCAL_STORAGE.GAMING_VIDEO_LIST);
            if (list) {
                const listData = new GamingVideoList(list);
                setVideoDataList(listData);

            } else {
                
                const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN)
                console.log('Inside gaming fetch ', jwtToken);
                const requestOption = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    },

                    method: 'GET'

                }
                const listResponse = await fetch(GAMING_VIDEO_URL, requestOption);
                const listData: GamingVideoListResponse = await listResponse.json();
                updateVideoListToStore(LOCAL_STORAGE.GAMING_VIDEO_LIST, listData);
                setVideoDataList(new GamingVideoList(listData));
            }
            window.setTimeout(() => updateErrorStatus(ERROR_STATUS.PRESENT), 1000);
        } catch (error) {
            updateErrorStatus(ERROR_STATUS.FAILED)
            console.log(error)
        }
    }

    const renderGamingVideoList = (list?: GamingVideoList) => {
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
                <>
                    <PageHeader Icon={FaGamepad} title='Gaming' />
                    <GamingVideosContainer>
                        {renderGamingVideoList(videoDataList)}

                    </GamingVideosContainer>
                </>
            );

        }
        updateErrorStatus(ERROR_STATUS.FAILED);
        return <></>

    }

    return <PageWrapper>{Render(errorStatus, GamingPage(), getVideoList)}</PageWrapper>
}

export default Gaming;