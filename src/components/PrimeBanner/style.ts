import styled from "styled-components";
import { BANNER_IMG } from "../../constants/icon";
import { TiDeleteOutline } from "react-icons/ti"
export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${BANNER_IMG});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    padding: 1%;
    width: 98%;
    height: 12rem;

    
`;

export const BannerHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 20%;
    aspect-ratio: 4/1;
`;

export const BannerTitle = styled.h5`

    
`;

export const RemoveBanner = styled(TiDeleteOutline)`
    cursor: pointer;
`;

export const TryOutPrimeButton = styled.button`
    border: 1px solid black;
    text-transform: uppercase;
    background-color: transparent;
    padding: 5px;
    border-radius: 2px;
    width: 6rem;
    
`;