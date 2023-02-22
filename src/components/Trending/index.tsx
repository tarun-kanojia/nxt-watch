import React, { useEffect, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { TRENDING_VIDEO_URL } from '../../constants/endPoints'
import { APIStatus } from '../../constants/errorStatus'
import { VideoListResponse } from '../../model/types'
import { VideoList } from '../../model/VideoList'
import { LOCAL_STORAGE } from '../../util/storage/constant'
import { getCookie } from '../../util/storage/StorageUtil'
import { getVideoListFromStore, updateVideoListToStore } from '../../util/storage/VideoListStore'
import { Render } from '../Home'
import { PageWrapper } from '../Home/style'
import PageHeader from '../PageHeader'
import VideoCardListHorizontal from '../VideoCardListHorizontal'

const Trending = () => {
   // console.log('Inside trending')
   const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS)
   const [videoDataList, setVideoDataList] = useState({})

   const updateErrorStatus = (status: APIStatus) => {
      setErrorStatus(status);
   }

   const getVideoList = async () => {
      try {
         const list: null|VideoListResponse = getVideoListFromStore(LOCAL_STORAGE.TRENDING_VIDEO_LIST);
         if (list) {
            const listData = new VideoList(list);
            setVideoDataList(listData)

         } else {

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
            updateVideoListToStore(LOCAL_STORAGE.TRENDING_VIDEO_LIST, listData);
            setVideoDataList(new VideoList(listData))

         }
         window.setTimeout(() => setErrorStatus(APIStatus.PRESENT), 1000);
      } catch (error) {
         setErrorStatus(APIStatus.FAILED)
         console.log(error)
      }
   }


   useEffect(() => {
      getVideoList();
   }, [])

   const TrendingPage = () => {
      return (
         <>
            <PageHeader Icon={FaFire} title='Trending' />
            <VideoCardListHorizontal videoDataList={videoDataList} />
         </>
      )
   }

   return (<PageWrapper>
      {Render(errorStatus, TrendingPage(), getVideoList)}
   </PageWrapper>
   )


}

export default Trending;