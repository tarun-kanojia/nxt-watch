import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Video } from '../../model/Video';
import { VideoList } from '../../model/VideoList';
import VideoCard from '../VideoCard';
import { VideoCardListWrapper } from './style';

interface VideoCardListProps {
    videoList: Video[]
}



const VideoCardList = ({ videoList }: VideoCardListProps) => {
    const navigate = useNavigate();
    const renderVideoCards = (videoList: Video[]) => {
        return (videoList ?
            <>
                {
                    videoList.map((videoItem) => (
                        <VideoCard key={videoItem.id}
                            videoItem={videoItem}
                            
                        />
                    ))
                }
            </>
            : null
        )
    }

    return (
        <VideoCardListWrapper>
            {renderVideoCards(videoList)}
        </VideoCardListWrapper>
    );
}

export default VideoCardList;