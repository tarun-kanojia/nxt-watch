import styled from "styled-components";

interface ErrorWrapperProps{
    bgUrl:string;
}
export const ErrorWrapper = styled.section<ErrorWrapperProps>`
    display: flex;
    flex-direction: column;
    background-image: url(${(ErrorWrapperProps) => ErrorWrapperProps.bgUrl });
    background-size: contain;
    background-repeat: no-repeat;
    background-position: start;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;



export const ErrorMessageHeading = styled.h1`
    margin-top: 30%;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: bold;
    color:  ${(props)=>props.theme.DASH_BOARD_TXT_COLOR};
`;

export const ErrorMessage = styled.p`
    text-transform: capitalize;
    color:  ${(props)=>props.theme.DASH_BOARD_TXT_COLOR};
`;

export const RetryButton = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    height: 2rem;
    width: 5rem;
    border-radius: 3px;
    font-weight: bold;
    background-color: ${(props) => props.theme.RETRY_BACKGROUND_BUTTON};
    color:${(props) => props.theme.RETRY_BUTTON_COLOR};
    
`;