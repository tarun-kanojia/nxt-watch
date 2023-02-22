import { AiFillHome } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import styled from "styled-components";


export const DashBoardContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.DASH_BOARD_COLOR};
    width: 20%;
    padding:1%;
    justify-content: flex-start;
    height: 85vh;
    position: fixed;
    /* left: 0px; */
    top:109px;
    /* transform: translate(0%, 20%); */
    
    
    @media screen and (max-width:670px){
        /* border: 1px solid black; */
        width: 98%;
        height: 4rem;
        top: 0px;
        background-color: ${(props) => props.theme.DASH_BOARD_COLOR};
        flex-direction: row;
        /* top: 0px; */
        border-radius: 1rem 1rem 0rem 0rem;
        /* top: calc(100% - 4rem); */
        justify-content: space-evenly;
        z-index: 2;
        transform: translate(0%, 93vh);
        /* transition: transform 1s ease-in; */
        animation: dashboard-position-changer 0.5s ease none 1 alternate;

    }

    @keyframes dashboard-position-changer {
        0%{
            opacity: 0%;
            transform: translate(0%, 20%);
        }

        100%{
            transform: translate(0%, 92vh);
            opacity: 100%;
        }
    }


`;

export const DashBoardElement = styled.div`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 2rem 8rem;
    align-items: center;
    column-gap: 4px;
    cursor: pointer;
    @media screen and (max-width:670px){
        margin-bottom: 0rem;
        grid-template-columns: 2rem;
        
        
    }

`;

export const ElementLogo = styled.div`
   width: 100%;
   aspect-ratio: 1/1;
`;


export const ElementText = styled.p<any>`
    margin: 0px;
    text-transform: capitalize;
    color: ${(props) => props.theme.DASH_BOARD_TXT_COLOR};
    font-size: larger;
    font-weight: ${(props) => props.active ? 'bold' : null };

    @media screen and (max-width:670px){
        margin-bottom: 0rem;
        display: none ;
    }

`;