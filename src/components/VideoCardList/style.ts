import styled from "styled-components";

export const VideoCardListWrapper = styled.section`
    /* display: grid;
    grid-template-columns: auto auto auto auto;
    gap:10px; */
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
    padding: 1rem;
    overflow: scroll;
   
    

    @media screen and (max-width: 1024px) {
        grid-template-columns: auto auto auto;
        
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: auto auto;
        
    }

    @media screen and (max-width: 425px) {
        grid-template-columns: auto;
        
    }

`;