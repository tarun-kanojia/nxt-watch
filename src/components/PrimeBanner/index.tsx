import React, { useState } from "react";
import { LOGO_URL } from "../../constants/icon";
import { HomeVideoStore } from "../../store/HomeVideoStore";
import {
    BannerHeaderWrapper,
    BannerTitle,
    BannerWrapper,
    Logo,
    RemoveBanner,
    TryOutPrimeButton,
} from "./style";

const PrimeBanner = ({ hidePrimeBanner }: { hidePrimeBanner: Function }) => {
    return (
        <BannerWrapper data-testid="banner">
            <BannerHeaderWrapper>
                <Logo src={LOGO_URL} />
                <RemoveBanner
                    data-testid="banner-remove"
                    size="2rem"
                    onClick={() => {
                        hidePrimeBanner();
                    }}
                />
            </BannerHeaderWrapper>
            <BannerTitle>
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
            </BannerTitle>
            <TryOutPrimeButton>Get It Now</TryOutPrimeButton>
        </BannerWrapper>
    );
};

export default PrimeBanner;
