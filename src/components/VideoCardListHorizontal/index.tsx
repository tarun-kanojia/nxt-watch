import React from 'react'
import { VideoList } from '../../model/VideoList';
import { getDuration } from '../../util/DateFunction';
import { VideoCardsContainer } from '../Trending/style';
import { CardImg, ChannelName, DurationTillRelease, TrendingVideoCardWrapper, VideoCardDetailsWrapper, VideoCardTitle, VideoViews } from './style';

interface VideoCardListHorizontalProps {
    videoDataList: VideoList
}

const VideoCardListHorizontal = ({ videoDataList }: VideoCardListHorizontalProps) => {
    return (<VideoCardsContainer>
        {videoDataList.videos == undefined ? null
            : videoDataList.videos.map((videoItem) => (
                <TrendingVideoCardWrapper>
                    <CardImg src={videoItem.thumbnailUrl} />
                    <VideoCardDetailsWrapper>
                        <VideoCardTitle>{videoItem.title}</VideoCardTitle>
                        <ChannelName>{videoItem.channel.name}</ChannelName>
                        <VideoViews>{videoItem.viewCount}</VideoViews>
                        <DurationTillRelease>{getDuration(videoItem.publishedAt)}</DurationTillRelease>
                    </VideoCardDetailsWrapper>
                </TrendingVideoCardWrapper>
            ))
        }
    </VideoCardsContainer>);
}

export default VideoCardListHorizontal;