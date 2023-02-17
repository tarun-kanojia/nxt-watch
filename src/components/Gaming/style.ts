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
    margin: auto;
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto auto;
    width: 90%;
`;

export const GamingVideoCardWrapper = styled.div`
    display:grid;
    grid-template-rows: 70% 10% 10%;
    max-width: 20rem;
    align-items: center;
`;

export const  GamingVideoThumbnail = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
`;

export const VideoTitle = styled.div`
    

`;

export const LiveWatching = styled.div`

`;