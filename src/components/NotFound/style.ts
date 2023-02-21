import styled from "styled-components";
export const ComponentWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const ErrorMessageHeading = styled.h1`
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: bold;
    color:  ${(props)=>props.theme.DASH_BOARD_TXT_COLOR};
`;

export const ErrorMessage = styled.p`
    text-transform: capitalize;
    text-align: center;
    color:  ${(props)=>props.theme.DASH_BOARD_TXT_COLOR};
`;

interface MessageImgProps{
    source:{dark:string, light:string};
}

export const MessageImg = styled.img<MessageImgProps>`
    content: url(${(props) => props.theme.NAME === 'DARK' ? props.source.dark : props.source.light});
    width: 50%;
    aspect-ratio: 4/3;

`;
