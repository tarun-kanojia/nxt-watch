import styled from "styled-components";

export const GamingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
    overflow-y: scroll;

`;

export const GamingVideosContainer = styled.div`
    overflow: scroll;
    width: 98%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const GamingVideoCardWrapper = styled.div`
    display:grid;
    grid-template-rows: 90% 1fr;
    max-width: 20rem;
    align-items: center;
`;

export const  GamingVideoThumbnail = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
`;

export const VideoDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 1px 2px 1px;

`

export const VideoTitle = styled.div`
    font-weight: bold;
    font-size:${(props) => props.theme.DESCRIPTION_FONT_SIZE};
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};

    

`;

export const LiveWatching = styled.div`
    font-size: ${(props) => props.theme.SUBSCRIBER_COUNT_TXT_SIZE};
    color:${(props) => props.theme.DASH_BOARD_TXT_COLOR}
`;