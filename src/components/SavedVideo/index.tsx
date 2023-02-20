import React, { useContext } from 'react'
import { SavedVideosContext } from '../../hooks/SavedVideos';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import VideoCardListHorizontal from '../VideoCardListHorizontal';
import { SavedVideoContainer } from './style';

interface SavedVideoProps {

}

const SavedVideo = ({}) => {
    const videoList = useContext(SavedVideosContext);
    const totalVideos = new VideoList();
    totalVideos.total = (videoList ? videoList.savedVideos.length.toString() : '0');
    totalVideos.videos = (videoList ? videoList.savedVideos : []);

    return ( <SavedVideoContainer>
        {   videoList === null ? null
            :<VideoCardListHorizontal videoDataList={totalVideos}/>
        }
    </SavedVideoContainer> );
}

export default SavedVideo;