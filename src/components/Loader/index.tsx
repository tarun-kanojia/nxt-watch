import React from 'react'
import {ClimbingBoxLoader, PuffLoader} from 'react-spinners'
import { ErrorContainer } from './style';

const Loader = ({}) => {
    return ( <ErrorContainer>
        <PuffLoader color="red" />
    </ErrorContainer> );
}

export default Loader;