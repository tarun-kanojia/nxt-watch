import React from 'react'
import { SearchContainer, SearchIcon, SearchIconWrapper, SearchInput } from './style';

interface SearchBarProps {
    querry:string;
    updateQuerry:Function;
}

const SearchBar = ({ querry, updateQuerry}:SearchBarProps) => {
    return (
        <SearchContainer>
            <SearchInput 
                placeholder='search'
                value={querry}
                onChange = {(e) => updateQuerry(e.target.value)}
            />
            <SearchIconWrapper>

            <SearchIcon size='100%' />
            </SearchIconWrapper>
        </SearchContainer>
    );
}

export default SearchBar;