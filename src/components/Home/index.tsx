import React, { useEffect, useState } from 'react'
import { ALL_VIDEOS_URL } from '../../constants/endPoints';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import Header from '../Header';
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
            const requestOption = {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`,
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