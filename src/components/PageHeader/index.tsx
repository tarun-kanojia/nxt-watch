import React from 'react'
import { IconType } from 'react-icons';
import { BannerContainer, BannerIconContainer, BannerTitle } from './style';

interface PageHeaderProps {
    Icon:IconType
}

const PageHeader = ({ Icon}:PageHeaderProps) => {
    return (<>
        <BannerContainer>
            <BannerIconContainer>
                <Icon size='3rem' color='red'/>
            </BannerIconContainer>
            <BannerTitle>Trending</BannerTitle>
        </BannerContainer>
    </>);
}

export default PageHeader;