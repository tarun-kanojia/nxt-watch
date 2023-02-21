import styled from "styled-components";

export const ErrorContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.PAGE_BACKGROUND_COLOR};
    width: 78%;
    height: 100%;
    position: fixed;
    left: 22%;
    top: 109px;
`;