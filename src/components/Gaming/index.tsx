import { inject, Observer, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GAMING_VIDEO_URL } from '../../constants/endPoints';
import { APIStatus } from '../../constants/errorStatus';
import { GamingVideoList } from '../../model/GamingVideoList';
import { GamingVideoListResponse, VideoBaseResponse, VideoListResponse } from '../../model/types';
import { VideoBase } from '../../model/VideoBase';
import { VideoList } from '../../model/VideoList';
import { gamingVideoListStore } from '../../store/gamingVideoListStore';
import { GamingVideoStore } from '../../store/GamingVideoStore';
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

interface GamingInjectedProps {
    gamingVideoStore: GamingVideoStore
}

const Gaming = inject('gamingVideoStore')(
    observer((props:any) => {
        const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS)
        const [videoDataList, setVideoDataList] = useState<GamingVideoList>()
        const [gamingVideoList, setGamingVideoList] = useState<VideoBase[] | null>(null)

        const { gamingVideoStore } = props as GamingInjectedProps;

        const updateErrorStatus = (status: APIStatus) => {
            setErrorStatus(status);
        }

        const getVideoList = async () => {
            try {

                if(!gamingVideoStore.videos.length){
                    const bearerToken = getCookie(LOCAL_STORAGE.JWT_TOKEN)
                    gamingVideoStore.loadVideos(bearerToken);
                    // console.log(gamingVideoStore);
                }

                window.setTimeout(() => updateErrorStatus(APIStatus.PRESENT), 1000);
            } catch (error) {
                updateErrorStatus(APIStatus.FAILED)
                console.log(error)
            }
        }

        const renderGamingVideoList = (list?: GamingVideoList) => {
            return (
                <>
                    {
                        gamingVideoStore.videos ?
                            gamingVideoStore.videos.map((videoItem) => (
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
            updateErrorStatus(APIStatus.FAILED);
            return <></>

        }

        return <PageWrapper>{Render(errorStatus, GamingPage(), getVideoList)}</PageWrapper>
    })
);

export default Gaming;