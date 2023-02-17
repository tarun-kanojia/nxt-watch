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
    left: 0px;
    top:109px;

`;

export const DashBoardElement = styled.div`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 2rem 8rem;
    align-items: center;
    column-gap: 4px;
    cursor: pointer;

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

`;