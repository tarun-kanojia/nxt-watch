import styled from "styled-components";
export const TrendingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
    padding: 1rem;
    overflow-y: scroll;

`;
export const VideoCardsContainer = styled.section`
    display: grid;
    margin: auto;
    width: 80%;

    row-gap: 10px;
`;