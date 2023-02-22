import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Video } from '../../model/Video';
import { VideoList } from '../../model/VideoList';
import EmptyVideoList from '../EmptyVideoList';
import { PageWrapper } from '../Home/style';
import VideoCard from '../VideoCard';
import { VideoCardListWrapper } from './style';

interface VideoCardListProps {
    videoList: Video[]
}



const VideoCardList = ({ videoList }: VideoCardListProps) => {
    const navigate = useNavigate();
    const renderVideoCards = (videoList: Video[]) => {
        return (videoList.length ?

            <VideoCardListWrapper>
                {
                    videoList.map((videoItem) => (
                        <VideoCard key={videoItem.id}
                            videoItem={videoItem}

                        />
                    ))
                }
            </VideoCardListWrapper>

            : <EmptyVideoList />
        )
    }

    return (<>
        {renderVideoCards(videoList)}
    </>);
}

export default VideoCardList;