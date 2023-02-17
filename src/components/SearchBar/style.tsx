import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2rem;
    column-gap: 2px;
    border: 1px solid ${(props) => props.theme.SEARCH_BAR_BORDER_COLOR};
    
    background-color: ${(props) => props.theme.SEARCH_BAR_BACKGROUND};
    border-radius: 5px;
    margin: 1rem 0rem 1rem 1rem;
`;

export const SearchIconWrapper = styled.div`
    padding: 10px;
    background-color: #c0c0c0;
    border-radius: 0px 5px 5px 0px;
`;

export const SearchIcon = styled(FaSearch)`
    color: #4e4e4e;
    
`;

export const SearchInput = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    color: ${(props) => props.theme.INPUT};
`;