import React from "react";
import { IconType } from "react-icons";
import { BannerContainer, BannerIconContainer, BannerTitle } from "./style";

interface PageHeaderProps {
    Icon: IconType;
    title: string;
}

const PageHeader = ({ Icon, title }: PageHeaderProps) => {
    return (
        <>
            <BannerContainer data-testid="page-header">
                <BannerIconContainer>
                    <Icon size="3rem" color="red" />
                </BannerIconContainer>
                <BannerTitle>{title}</BannerTitle>
            </BannerContainer>
        </>
    );
};

export default PageHeader;
