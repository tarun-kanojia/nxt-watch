import React from 'react'
import { SAVED_VIDEO_EMPTY_PAGE } from '../../constants/icon';
import { EmptySavedVideoListImg, SavedVideoErrorComponentWrapper } from './style';

const SavedVideoErrorComponent = () => {
    return (<>
        
        <SavedVideoErrorComponentWrapper>

            <EmptySavedVideoListImg src={SAVED_VIDEO_EMPTY_PAGE} alt="" />
        </SavedVideoErrorComponentWrapper>
    </>);
}

export default SavedVideoErrorComponent;