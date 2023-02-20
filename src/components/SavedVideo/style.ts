import styled from "styled-components";

export const SavedVideoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
`;