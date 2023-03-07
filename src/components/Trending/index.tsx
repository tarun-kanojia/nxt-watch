import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { TRENDING_VIDEO_URL } from '../../constants/endPoints'
import { APIStatus } from '../../constants/errorStatus'
import { VideoListResponse } from '../../model/types'
import { VideoList } from '../../model/VideoList'
import { TrendingVideoStore } from '../../store/TrendingVideoStore'
import { LOCAL_STORAGE } from '../../util/storage/constant'
import { getCookie } from '../../util/storage/StorageUtil'
import { getVideoListFromStore, updateVideoListToStore } from '../../util/storage/VideoListStore'
import { Render } from '../Home'
import { PageWrapper } from '../Home/style'
import PageHeader from '../PageHeader'
import VideoCardListHorizontal from '../VideoCardListHorizontal'

interface TrendingInjectedProps {
   trendingVideoStore: TrendingVideoStore
}

const Trending = inject('trendingVideoStore')(observer((props: any) => {
   // console.log('Inside trending')
   const [errorStatus, setErrorStatus] = useState(APIStatus.IN_PROGRESS)
   const [videoDataList, setVideoDataList] = useState({})

   const { trendingVideoStore } = props as TrendingInjectedProps;

   const updateErrorStatus = (status: APIStatus) => {
      setErrorStatus(status);
   }

   const getVideoList = async () => {
      try {
         if (!trendingVideoStore.videos.length) {
            const bearerToken = getCookie(LOCAL_STORAGE.JWT_TOKEN);
            trendingVideoStore.loadVideos(bearerToken);
         }
         
         window.setTimeout(() => setErrorStatus(APIStatus.PRESENT), 200);
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
            <PageHeader  Icon={FaFire} title='Trending' />
            <VideoCardListHorizontal videoDataList={trendingVideoStore.videos} />
         </>
      )
   }

   return (<PageWrapper data-testid='trending'>
      {Render(errorStatus, TrendingPage(), getVideoList)}
   </PageWrapper>
   )


}));

export default Trending;