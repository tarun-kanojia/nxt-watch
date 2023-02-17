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
    height: 50%;

`;

export const VideoActonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h5`
    font-weight: bold;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
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
    text-transform: capitalize;
    width: 50%;
    justify-content: end;


`;

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-weight: bold;
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    cursor: pointer;
`;

export const Divider = styled.hr`
`;

export const ChannelWrapper = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.3rem;
`;


export const ChannelProfile = styled.img`
    width: 4rem;
    height: 4rem;
    padding: 1px;
    align-self: flex-start;
`;

export const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem 1rem 1rem; 
`;

export const ChannelName = styled.div`
    font-weight: bold;
    color:${(props) => props.theme.SEARCH_BAR_BORDER_COLOR};
    align-self: start;
    font-size: 15px;
`;

export const ChannelSubscribersCount = styled.div`
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
`;
export const DoteIcon = styled.div`
    background-color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1rem;

`;

export const ChannelDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    font-size: ${(props) => props.theme.DESCRIPTION_FONT_SIZE};
    padding: 1px;


`;

export const ActionButtonIcon = styled(ActionIconButton)`
    color: pink
`;