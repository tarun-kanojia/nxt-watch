import { IconType } from "react-icons";
import { StringMappingType } from "typescript";
import { GamingVideoStore } from "../store/GamingVideoStore";
import { HomeVideoStore } from "../store/HomeVideoStore";
import { SavedVideosStore } from "../store/SavedVideosStore";
import { SavedVideoStore } from "../store/SavedVideoStore";
import { TrendingVideoStore } from "../store/TrendingVideoStore";
import { Channel } from "./Channel";

export type RefStoreType = SavedVideoStore|HomeVideoStore|GamingVideoStore|TrendingVideoStore;
export interface StoreReferencesType{
    homeVideoRef:HomeVideoStore;
    gamingVideoRef:GamingVideoStore;
    trendingVideoRef:TrendingVideoStore;
    savedVideoRef:SavedVideosStore;
}
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
    is_liked ?:boolean|null;
}
export interface GamingVideoType{
    id:string;
    thumbnail_url:string;
    title:string;
    view_count:string;
}

export interface GamingVideoListResponse{
    total:string;
    videos:VideoBaseResponse[];
}

export interface VideoResponse  extends VideoBaseResponse{
    channel: ChannelResponse;
    
}



export interface VideoStateRefType{
    channel:Channel;
    id: string;
    publishedAt: string;
    thumbnailUrl: string;
    title: string;
    viewCount: string;
    videoUrl?: string;
    description?: string;

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