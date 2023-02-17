import YouTube from "react-youtube";
import styled from "styled-components";
import ActionIconButton from "../ActionIconButton";

export const VideoContainer = styled.section`
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    padding: 1%;
    width: 76%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
`;

export const YoutubeEmbed = styled(YouTube)`
    /* width: 100%; */
    height: 20rem;

`;

export const VideoActonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h5`

`;

export const VideoAnalyticsWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    width: 9rem;
    font-size: small;
    font-weight: bold;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    
`;

export const ViewCount = styled.div`

`;

export const Duration = styled.div`
`;

export const ActionButtonWrapper = styled.div`
    display:flex;
`;

export const Divider = styled.hr`
`;

export const ChannelWrapper = styled.div`
    display: flex;
`;


export const ChannelProfile = styled.img`
`;

export const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChannelName = styled.div`
`;

export const ChannelSubscribersCount = styled.div`
`;
export const DoteIcon = styled.div`
    background-color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1rem;

`;

export const ChannelDescription = styled.div`

`;

export const ActionButtonIcon = styled(ActionIconButton)`
    color:pink
`;