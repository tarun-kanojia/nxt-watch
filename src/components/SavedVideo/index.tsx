import React, { useContext, useState } from 'react'
import { FaFire } from 'react-icons/fa';
import { ERROR_STATUS } from '../../constants/errorStatus';
import { SavedVideosContext } from '../../hooks/SavedVideos';
import { VideoListResponse } from '../../model/types';
import { VideoList } from '../../model/VideoList';
import { Render } from '../Home';
import { PageWrapper } from '../Home/style';
import PageHeader from '../PageHeader';
import SavedVideoErrorComponent from '../SavedVideoErrorComponent';
import VideoCardListHorizontal from '../VideoCardListHorizontal';
import { SavedVideoContainer } from './style';

interface SavedVideoProps {

}



const SavedVideo = ({ }) => {
    const [errorStatus, setErrorStatus] = useState(ERROR_STATUS.IN_PROGRESS)
    const videoList = useContext(SavedVideosContext);
    const totalVideos = new VideoList();
    totalVideos.total = (videoList ? videoList.savedVideos.length.toString() : '0');
    totalVideos.videos = (videoList ? videoList.savedVideos : []);

    const updateErrorStatus = (status: string) => {
        setErrorStatus(status)
    }

    const SavedVideoPage = () => {
        if (videoList && videoList.savedVideos.length > 0) {
            // updateErrorStatus(ERROR_STATUS.PRESENT);
            console.log('saved-videos', videoList.savedVideos)
            return (
                <>
                    <PageHeader Icon={FaFire} title='Saved Videos' />
                    <VideoCardListHorizontal videoDataList={totalVideos} />

                </>
            );
        } else {
            // updateErrorStatus(ERROR_STATUS.FAILED);
            return (<>
                <SavedVideoErrorComponent />
            </>)
        }
    }
    return <PageWrapper>{SavedVideoPage()}</PageWrapper>
}

export default SavedVideo;