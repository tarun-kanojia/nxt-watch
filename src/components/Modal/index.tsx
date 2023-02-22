import React from 'react'
import { ModalButtonWrapper, ModalCancelButton, ModalConfirmButton, ModalContentWrapper, ModalMessage } from './style';

interface LogoutModalProps {
    isOpen: boolean;
    onRequestClose: Function;


}

const LogoutModal = ({ isOpen, onRequestClose }: LogoutModalProps) => {
    console.log('Logout modal ', isOpen)
    return (<>
        <ModalContentWrapper isOpen={isOpen}>

            <ModalMessage>ARE YOU SURE YOU WANT TO LOGOUT</ModalMessage>
            <ModalButtonWrapper>
                <ModalCancelButton
                    onClick={() => onRequestClose()}
                >CANCEL</ModalCancelButton>
                <ModalConfirmButton
                    onClick={() => {
                        onRequestClose();
                    }}
                >CONFIRM</ModalConfirmButton>
            </ModalButtonWrapper>
        </ModalContentWrapper>

    </>);
}

export default LogoutModal;