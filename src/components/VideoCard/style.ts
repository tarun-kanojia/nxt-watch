import styled from "styled-components";

export const VideoCardWrapper = styled.section`
    display: grid;
    grid-template-rows: 11rem 7rem;
    cursor: pointer;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 5px;
    margin-bottom: 10px;
    
    &:hover{
        box-shadow: ${(props)=> props.theme.SEARCH_BAR_BORDER_COLOR} 0px 5px 15px;

    }
    
`;

export const VideoCardHeaderImg = styled.img`
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    height: 100%;
`;

export const VideoCardFooter = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    justify-content: center;
    column-gap: 5px;
    padding: 8px;
    
`;

export const ChannelProfileWrapper = styled.div`

`;

export const ChannelProfile = styled.img`
    width: 3rem;
    aspect-ratio: 1/1;

`;


export const VideoDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VideoTitle = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 1.4rem;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    `;

export const ChannelName = styled.div`
    font-weight: bold;
    color:${(props)=> props.theme.SEARCH_BAR_BORDER_COLOR};
    align-self: start;
    font-size: 15px;
`;

export const VideoAnalyticsWrapper = styled.div`
    display: grid;
    grid-template-columns: 5.5rem 0.5rem 1fr;
    column-gap: 4px;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    font-size: 15px;
    font-weight: bold;
    color:${(props)=> props.theme.SEARCH_BAR_BORDER_COLOR};
`;

export const ViewCount = styled.div`
    
`;

export const DoteIcon = styled.div`
    background-color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1rem;

`;


export const TimeTillReleased = styled.div`
    

`;

