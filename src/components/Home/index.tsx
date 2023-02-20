import React, { useEffect, useState } from 'react'
import { ALL_VIDEOS_URL } from '../../constants/endPoints';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import { filterList } from '../../util/ComponentMethods';
import Header from '../Header';
import { getCookie } from '../../util/storage/StorageUtil';
import PrimeBanner from '../PrimeBanner';
import SearchBar from '../SearchBar';
import VideoCardList from '../VideoCardList';
import { HomeContainer } from './style';
import { getVideoListFromStore, updateVideoListToStore } from '../../util/storage/VideoListStore';
import { LOCAL_STORAGE } from '../../util/storage/constant';

const Home = () => {
    const [querry, setQuerry] = useState('')
    const [videoDataList, setVideoDataList] = useState<VideoList>({});
    const [showPrimeBanner, setShowPrimeBanner] = useState(true);
    
    const hidePrimeBanner = () => {
      setShowPrimeBanner(false);
    }

    const updateQuerry = (text: string) => {
        setQuerry(text);
        console.log(querry)
    }

    const updateVideoDataList = (list:Object) => {
        console.log('store home video list',list);
        // setVideoDataList(list)
    }

    const getVideoList = async () => {
        try {
            const list:VideoListResponse = getVideoListFromStore(LOCAL_STORAGE.HOME_VIDEO_LIST);
            if(list){
                const listData = new VideoList(list);
                setVideoDataList(listData);

            }else{

                const jwtToken = getCookie(LOCAL_STORAGE.JWT_TOKEN)
                const requestOption = {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    },
                    
                    method: 'GET'
                    
                }
                const listResponse = await fetch(ALL_VIDEOS_URL, requestOption);
                const listDataResponse:VideoListResponse = await listResponse.json();
                updateVideoListToStore(LOCAL_STORAGE.HOME_VIDEO_LIST, listDataResponse);
                const listData = new VideoList(listDataResponse);
                setVideoDataList(listData)
            }
            

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getVideoList();
    },[])

    return (
        <HomeContainer>
        {showPrimeBanner ? <PrimeBanner hidePrimeBanner = {hidePrimeBanner}/> : null}
        <SearchBar querry={querry} updateQuerry={updateQuerry} />
        <VideoCardList videoList={filterList(querry, videoDataList)}/>
    </HomeContainer>);
}

export default Home;