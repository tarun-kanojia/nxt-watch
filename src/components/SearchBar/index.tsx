import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import React from "react";
import { HomeVideoStore } from "../../store/HomeVideoStore";
import {
    SearchContainer,
    SearchIcon,
    SearchIconWrapper,
    SearchInput,
} from "./style";

interface SearchBarProps {
    query: string;
    updateQuery: Function;
}

interface InjectedProps extends SearchBarProps {
    homeVideoStore: HomeVideoStore;
}

const SearchBar = inject("homeVideoStore")(
    observer((props: SearchBarProps) => {
        const { homeVideoStore, query, updateQuery } = props as InjectedProps;
        console.log(homeVideoStore.query,'query');
        return (
            <SearchContainer>
                <SearchInput
                    data-testid="search-bar"
                    placeholder="search"
                    value={homeVideoStore.query}
                    onChange={(e) => {
                        homeVideoStore.setQuery(e.target.value);
                    }}
                />
                <SearchIconWrapper>
                    <SearchIcon size="100%" />
                </SearchIconWrapper>
            </SearchContainer>
        );
    })
);

export default SearchBar;
