import React from 'react'
import { GamingVideo } from '../../model/GamingVideoList';
import { Video } from '../../model/Video';
import { VideoList } from '../../model/VideoList';
import { getDuration } from '../../util/DateFunction';
import { StyledLink } from '../Login/style';
import { TrendingContainer, VideoCardsContainer } from '../Trending/style';
import { CardImg, ChannelName, DurationTillRelease, TrendingVideoCardWrapper, VideoAnalyticsWrapper, VideoCardDetailsWrapper, VideoCardTitle, VideoViews } from './style';

interface VideoCardListHorizontalProps {
    videoDataList: Video[];

}

export const VideoCardListHorizontal = ({ videoDataList }: VideoCardListHorizontalProps) => {
    return (
        <TrendingContainer>

            <VideoCardsContainer data-testid="trending-video-container">
                {videoDataList == undefined ? null
                    : videoDataList.map((videoItem) => (
                        <StyledLink to={`/videos/${videoItem.id}`} key={videoItem.id}>
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
                        </StyledLink>
                    ))
                }
            </VideoCardsContainer>
        </TrendingContainer>
    );
}

export default VideoCardListHorizontal;