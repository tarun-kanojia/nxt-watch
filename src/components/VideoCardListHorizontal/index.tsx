import React from 'react'
import { Link } from 'react-router-dom';
import { VideoList } from '../../model/VideoList';
import { getDuration } from '../../util/DateFunction';
import { VideoCardsContainer } from '../Trending/style';
import { CardImg, ChannelName, DurationTillRelease, TrendingVideoCardWrapper, VideoAnalyticsWrapper, VideoCardDetailsWrapper, VideoCardTitle, VideoViews } from './style';

interface VideoCardListHorizontalProps {
    videoDataList: VideoList
}

const VideoCardListHorizontal = ({ videoDataList }: VideoCardListHorizontalProps) => {
    return (<VideoCardsContainer>
        {videoDataList.videos == undefined ? null
            : videoDataList.videos.map((videoItem) => (
                <Link to={`/videos/${videoItem.id}`}>
                    <TrendingVideoCardWrapper>
                        <CardImg src={videoItem.thumbnailUrl} />
                        <VideoCardDetailsWrapper>
                            <VideoCardTitle>{videoItem.title}</VideoCardTitle>
                            <ChannelName>{videoItem.channel.name}</ChannelName>
                            <VideoAnalyticsWrapper>

                                <VideoViews>{`${videoItem.viewCount} views`}</VideoViews>
                                <DurationTillRelease>{`${getDuration(videoItem.publishedAt)} ago`}</DurationTillRelease>
                            </VideoAnalyticsWrapper>
                        </VideoCardDetailsWrapper>
                    </TrendingVideoCardWrapper>
                </Link>
            ))
        }
    </VideoCardsContainer>);
}

export default VideoCardListHorizontal;