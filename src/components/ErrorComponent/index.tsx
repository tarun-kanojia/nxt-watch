import React from 'react'
import { HOME_PAGE_ERROR_LIGHT } from '../../constants/icon';
import { ErrorMessage, ErrorMessageHeading, ErrorWrapper, RetryButton } from './style';

interface ErrorComponentProps {
    getVideoList:Function
}

const ErrorComponent = ({getVideoList}:ErrorComponentProps) => {
    return ( <ErrorWrapper bgUrl={HOME_PAGE_ERROR_LIGHT} >
        
        <ErrorMessageHeading>Oops! Something Went Wrong </ErrorMessageHeading>
        <ErrorMessage>We are having a trouble to complete your request <br /> please retry</ErrorMessage>
        <RetryButton
            onClick={() => {getVideoList()}}
        >RETRY</RetryButton>

    </ErrorWrapper> );
}

export default ErrorComponent;