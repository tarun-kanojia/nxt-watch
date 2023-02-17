import styled from "styled-components";

export const BannerContainer = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 20% 70%;
    grid-template-rows: 5rem;
    align-items: center;
    background-color: ${(props) => props.theme.PAGE_BANNER_BG_COLOR};
    padding: 0rem 1rem 0rem 1rem;
    margin-bottom: 1rem;
    position: sticky;
    top: 0px;
`;

export const BannerIconContainer = styled.div`
    width: 3rem;
    aspect-ratio: 1/1;
    background-color: ${(props) => props.theme.SEARCH_BAR_BACKGROUND};
    border-radius: 2rem;
    align-self: center;
    padding: 0.5rem;
`;

export const BannerTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};

`;