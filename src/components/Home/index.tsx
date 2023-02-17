import React, { useEffect, useState } from 'react'
import { ALL_VIDEOS_URL } from '../../constants/endPoints';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import Header from '../Header';
import { getCookie, LOCAL_STORAGE } from '../Login/StorageUtil';
import PrimeBanner from '../PrimeBanner';
import SearchBar from '../SearchBar';
import VideoCardList from '../VideoCardList';
import { HomeContainer } from './style';

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
            const listResponse = await fetch(ALL_VIDEOS_URL, requestOption);
            const listData:VideoListResponse = await listResponse.json();
            setVideoDataList(new VideoList(listData))
            
            

        } catch (error) {
            console.log(error)
        }
    }

    const filterList = (querry:string, list:VideoList) => {
        return list.videos ? list.videos.filter((video) => (
            video.title.toLowerCase().includes(querry.toLowerCase())
        ))
        :[];
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