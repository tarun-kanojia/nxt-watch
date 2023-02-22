import React from 'react'
import { NOTHING_TO_SEARCH_IMAGE_URL } from '../../constants/icon';
import { EmptyListContainer, EmptyListImage } from './style';

const EmptyVideoList = () => {
   return ( <>
    <EmptyListContainer>
        <EmptyListImage src={NOTHING_TO_SEARCH_IMAGE_URL} />    

    </EmptyListContainer>
   </> );
}

export default EmptyVideoList;