import React, { useState } from 'react'
import { LOGO_URL } from '../../constants/icon';
import { BannerHeaderWrapper, BannerTitle, BannerWrapper, Logo, RemoveBanner, TryOutPrimeButton } from './style';

const PrimeBanner = ({hidePrimeBanner}:{hidePrimeBanner:Function}) => {
   
    return (

        <BannerWrapper>
            <BannerHeaderWrapper>

                <Logo src={LOGO_URL} />
                <RemoveBanner 
                    size='2rem'
                    onClick={() =>{
                        hidePrimeBanner();
                    }}
                />
            </BannerHeaderWrapper>
            <BannerTitle> Buy Nxt Watch Premium prepaid plans with <br /> UPI </BannerTitle>
            <TryOutPrimeButton>Get It Now</TryOutPrimeButton>
        </BannerWrapper>


    );
}

export default PrimeBanner;