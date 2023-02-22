import React from 'react'
import { LikedStatus } from '../../constants/errorStatus';
import { ActionIconButtonList, ActionIconButtonModel } from '../../model/ActionIconButton';
import { Video } from '../../model/Video';
import { patchUpdateVideoListToStore } from '../../store/videoComponentStore';
import { updateVideoListToStore } from '../../util/storage/VideoListStore';
import ActionIconButton from '../ActionIconButton';
import { getVideoResponseTypeData } from '../VideoComponent';
import { CenterContainer } from '../VideoComponent/style';

interface ActionButtonListProps {
    actionIconButtonList: ActionIconButtonList;
    updateActionButtonList: Function;
    updateVideoLikeStatus: Function;
    video: Video;
    updateVideoData: Function;
}

const ActionButtonList = ({ actionIconButtonList, updateVideoData, updateActionButtonList, video, updateVideoLikeStatus }: ActionButtonListProps) => {
    const toggleLikeButton = (buttonItem:ActionIconButtonModel) => {
        const data = {
            ...video,
            toggleLike: function () {
                this.isLiked = this.isLiked !== null && this.isLiked ? null : true;
            },
            toggleDislike: function () {
                this.isLiked = this.isLiked || this.isLiked === null ? false : null;
            }

        };
        if (buttonItem.name === 'like') {
            data.toggleLike();
            // data.isLiked = !data.isLiked;
            const newVideoData = new Video(getVideoResponseTypeData(data));

            patchUpdateVideoListToStore(newVideoData);
            updateVideoData(newVideoData)

        } else {
            debugger
            data.toggleDislike();
            const newVideoData = new Video(getVideoResponseTypeData(data));

            patchUpdateVideoListToStore(newVideoData);
            updateVideoData(newVideoData)


        }
    }

    return (<>
        {
            actionIconButtonList.list.map((buttonItem) => (
                <CenterContainer key={buttonItem.id}>
                    <buttonItem.Element
                        size="2rem"
                        color={
                            (video.isLiked == null
                                ? 'grey'
                                : (buttonItem.name == 'like'
                                    ? (video.isLiked ? '#3b82f6' : 'grey')
                                    : (!video.isLiked ? '#3b82f6' : 'grey')
                                )
                            )

                        }
                        onClick={() => {
                            toggleLikeButton(buttonItem)
                        }}
                    />
                    <span>{buttonItem.name}</span>
                </CenterContainer>
            ))
        }
    </>);
}

export default ActionButtonList;