import styled from "styled-components";
export const TrendingPageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
    `;
export const TrendingContainer = styled.section`
    
    overflow-y: scroll;
    padding: 1rem;
    width: 98%;
    height: 75vh;
    @media screen and (max-width:670px){
     height: 68vh;
    }
    

`;
export const VideoCardsContainer = styled.section`
    display: grid;
    margin: 10px auto auto auto;
    width: 80%;
    row-gap: 20px;
`;