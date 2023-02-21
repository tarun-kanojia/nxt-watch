import React from 'react'
import { NOT_FOUND_IMAGE_URL } from '../../constants/icon';
import { ComponentWrapper, ErrorMessage, ErrorMessageHeading, MessageImg } from './style';

const NotFound = () => {
   return (<>
      <ComponentWrapper>
         <MessageImg source={NOT_FOUND_IMAGE_URL} />
         <ErrorMessageHeading>Oops! Something Went Wrong </ErrorMessageHeading>
         <ErrorMessage>We are having a trouble to complete your request <br /> please retry</ErrorMessage>
      </ComponentWrapper>

   </>);
}

export default NotFound;