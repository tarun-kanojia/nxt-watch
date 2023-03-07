import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Video } from "../../model/Video";
import { getDuration } from "../../util/DateFunction";
import { StyledLink } from "../Login/style";
import {
    ChannelName,
    ChannelProfile,
    ChannelProfileWrapper,
    DoteIcon,
    TimeTillReleased,
    VideoAnalyticsWrapper,
    VideoCardFooter,
    VideoCardHeaderImg,
    VideoCardWrapper,
    VideoDescriptionWrapper,
    VideoTitle,
    ViewCount,
} from "./style";

interface VideoCardProps {
    videoItem: Video;
}

export const VideoCard = ({ videoItem }: VideoCardProps) => {
    return (
        <StyledLink to={`/videos/${videoItem.id}`}>
            <VideoCardWrapper  data-testid='video-card'>
                <VideoCardHeaderImg
                    data-testid="video-card-img"
                    src={videoItem.thumbnailUrl}
                />
                <VideoCardFooter>
                    <ChannelProfileWrapper>
                        <ChannelProfile
                            src={videoItem.channel.profileImageUrl}
                        />
                    </ChannelProfileWrapper>

                    <VideoDescriptionWrapper>
                        <VideoTitle> {videoItem.title} </VideoTitle>

                        <ChannelName>{videoItem.channel.name}</ChannelName>

                        <VideoAnalyticsWrapper>
                            <ViewCount>{`${videoItem.viewCount} views`}</ViewCount>
                            <DoteIcon />
                            <TimeTillReleased>
                                {getDuration(videoItem.publishedAt)}
                            </TimeTillReleased>
                        </VideoAnalyticsWrapper>
                    </VideoDescriptionWrapper>
                </VideoCardFooter>
            </VideoCardWrapper>
        </StyledLink>
    );
};

export default VideoCard;
