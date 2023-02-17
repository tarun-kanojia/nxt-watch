import styled from "styled-components";

export const TrendingVideoCardWrapper = styled.section`
    display: grid;
    grid-template-columns: 30% 70%;
    
    align-items:flex-start;
    border-radius: 5px;
    
`;

export const CardImg = styled.img`
    width: 100%;
`;

export const VideoCardDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    height: 100%;
    padding: 0% 5% 0% 5%;
`;

export const VideoCardTitle = styled.div`
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    font-weight: bold;
    margin-bottom: 1%;

    @media screen and (max-width:720px) {
        font-size: x-small;
    }
`;

export const ChannelName = styled.div`
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};
    margin-bottom: 1%;
    font-weight: bold;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
`;

export const VideoAnalyticsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1%;
    width: 9rem;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
`;

export const VideoViews = styled.div`
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};

`;

export const DurationTillRelease = styled.div`
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};
`;
