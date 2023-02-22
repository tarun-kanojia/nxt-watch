import React, { ReactNode, useEffect, useState } from 'react'
import { ALL_VIDEOS_URL } from '../../constants/endPoints';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import { filterList } from '../../util/ComponentMethods';
import Header from '../Header';
import { getCookie } from '../../util/storage/StorageUtil';
import PrimeBanner from '../PrimeBanner';
import SearchBar from '../SearchBar';
import VideoCardList from '../VideoCardList';
import { HomeContainer, PageWrapper } from './style';
import { getVideoListFromStore, updateVideoListToStore } from '../../util/storage/VideoListStore';
import { LOCAL_STORAGE } from '../../util/storage/constant';
import HomeError from '../Loader';
import { ErrorContainer } from '../Loader/style';
import Loader from '../Loader';
import { APIStatus } from '../../constants/errorStatus';
import ErrorComponent from '../ErrorComponent';

export const Render = (
    errorStatus: APIStatus,

    SuccessComponent: React.ReactNode,
    retryFunction: Function) => {
        
    switch (errorStatus) {
        case APIStatus.PRESENT:
            return (<>
                {SuccessComponent}
            </>)

        case APIStatus.IN_PROGRESS:
            return <Loader />

        case APIStatus.FAILED:
            return <HomeContainer>
                <ErrorComponent getVideoList={retryFunction} />
            </HomeContainer>

    }
}

const Home = () => {
    const [querry, setQuerry] = useState('')
    const [videoDataList, setVideoDataList] = useState<VideoList>({});
    const [showPrimeBanner, setShowPrimeBanner] = useState(true);
    const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS)
    const hidePrimeBanner = () => {
        setShowPrimeBanner(false);
    }

    const updateQuerry = (text: string) => {
        setQuerry(text);
        console.log(querry)
    }

    const updateVideoDataList = (list: Object) => {
        console.log('store home video list', list);
        // setVideoDataList(list)
    }

    const updateErrorStatus = (status: APIStatus) => {
        setErrorStatus(status);
    }

    const getVideoList = async () => {
        try {
            const list: null|VideoListResponse = getVideoListFromStore(LOCAL_STORAGE.HOME_VIDEO_LIST);
            if (list) {
                const listData = new VideoList(list);
                setVideoDataList(listData);

            } else {

                const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN)
                const requestOption = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    },

                    method: 'GET'

                }
                const listResponse = await fetch(ALL_VIDEOS_URL, requestOption);
                const listDataResponse: VideoListResponse = await listResponse.json();
                updateVideoListToStore(LOCAL_STORAGE.HOME_VIDEO_LIST, listDataResponse);
                const listData = new VideoList(listDataResponse);
                setVideoDataList(listData);
            }

            window.setTimeout(() => updateErrorStatus(APIStatus.PRESENT), 1000);

        } catch (error) {
            console.log(error)
            updateErrorStatus(APIStatus.FAILED);
        }
    }


    useEffect(() => {
        getVideoList();

    }, [])

    const HomePage = () => {
        return (
            <>
                    {showPrimeBanner ? <PrimeBanner hidePrimeBanner={hidePrimeBanner} /> : null}
                    <SearchBar querry={querry} updateQuerry={updateQuerry} />
                    <VideoCardList videoList={filterList(querry, videoDataList)} />
               
            </>
        )
    }

    return <PageWrapper>{Render(errorStatus, HomePage(), getVideoList)}</PageWrapper>

    


}

export default Home;