import styled from "styled-components";

interface ModalContentWrapperProps{
    isOpen:boolean
}

export const ModalContentWrapper = styled.div<ModalContentWrapperProps>`
    position: relative;
   
    z-index: 10;
    width: 70rem;
    height: 30rem;
    background-color: pink;
    display: ${(props) => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ModalMessage = styled.h4`
    z-index: 10;
    position: absolute;
    color: black;
`;

export const ModalButtonWrapper = styled.div`
    z-index: 10;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
export const ModalConfirmButton = styled.button`
z-index: 10;
    position: absolute;
`;

export const ModalCancelButton = styled.button`
z-index: 10;
    position: absolute;
`;