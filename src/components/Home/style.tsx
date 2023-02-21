import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;

    @media screen and (max-width:670px){
       width: 100%;
       left: 0px;

    }
    
`;

export const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 12%;

    @media screen and (max-width:670px){
       width: 100%;
       left: 0%;
       

    }
`;