import React, { useContext } from 'react'
import { SavedVideosContext } from '../../hooks/SavedVideos';

interface SavedVideoProps {

}

const SavedVideo = ({}) => {
    const videoList = useContext(SavedVideosContext);
    return ( <>
        {   videoList === null ? null
            :videoList.savedVideos.map((video) => <h1>{video.id}</h1>) 
        }
    </> );
}

export default SavedVideo;