import { IconType } from "react-icons";
import { StringMappingType } from "typescript";

export interface ErrorModel {
    valid: boolean;
    value?: string;
}

export interface DashBoard {
    id: number,
    icon: any,
    title: string,
    active: boolean,
    path: string
}



export interface DashBoardList {
    list: DashBoard[]
}

export interface ChannelResponse {
    name: string;
    profile_image_url: string;
    subscriber_count?: string;
}
export interface VideoBaseResponse{
    id: string;
    published_at: string;
    thumbnail_url: string;
    title: string;
    view_count: string;
    video_url?: string;
    description?: string;
}

export interface GamingVideoListResponse{
    total:string;
    videos:VideoBaseResponse[];
}

export interface VideoResponse  extends VideoBaseResponse{
    channel: ChannelResponse;
    
}


export interface VideoListResponse {
    total: string;
    videos: VideoResponse[];
}



export interface ActionButtonItemInterface{
    id:number;
    Element:IconType;
    active:boolean;
    name:string;
}


export interface ActionIconButtonListInterface{
    list: ActionButtonItemInterface[]
}