import React, { useEffect, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { TRENDING_VIDEO_URL } from '../../constants/endPoints'
import { VideoListResponse } from '../../model/types'
import { VideoList } from '../../model/VideoList'
import { LOCAL_STORAGE } from '../../util/storage/constant'
import { getCookie } from '../../util/storage/StorageUtil'
import { Render } from '../Home'
import Loader from '../Loader'
import PageHeader from '../PageHeader'
import VideoCardList from '../VideoCardList'
import VideoCardListHorizontal from '../VideoCardListHorizontal'
import { TrendingContainer, TrendingPageWrapper } from './style'

const Trending = () => {
   // console.log('Inside trending')
   const [videoDataList, setVideoDataList] = useState({})
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
         const listResponse = await fetch(TRENDING_VIDEO_URL, requestOption);
         const listData: VideoListResponse = await listResponse.json();
         setVideoDataList(new VideoList(listData))


      } catch (error) {
         console.log(error)
      }
   }


   useEffect(() => {
      getVideoList();
   }, [])

   const TrendingPage = () => {
      return (
         <TrendingPageWrapper>
            <PageHeader Icon={FaFire} title='Trending' />
            <TrendingContainer>
               <VideoCardListHorizontal videoDataList={videoDataList} />
            </TrendingContainer>
         </TrendingPageWrapper>
      )
   }

   return (<>
      {Render("errorStatus", <Loader />, TrendingPage(), <>RETRY</>)}
   </>
   )

   return (
      <TrendingPageWrapper>
         <PageHeader Icon={FaFire} title='Trending' />
         <TrendingContainer>

            <VideoCardListHorizontal videoDataList={videoDataList} />
         </TrendingContainer>
      </TrendingPageWrapper>
   );
}

export default Trending;