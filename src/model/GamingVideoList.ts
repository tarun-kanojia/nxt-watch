import { GamingVideoListResponse, GamingVideoType, RefStoreType } from "./types";
import { VideoBase } from "./VideoBase";

export class GamingVideoList{
    total:string;
    videos:VideoBase[];
    constructor(videoData:GamingVideoListResponse){
        this.total = videoData.total;
        this.videos = videoData.videos.map((video) => new VideoBase(video));
    }
}

export class GamingVideo{
    id:string;
    thumbnailUrl:string;
    title:string;
    viewCount:string;
    refStore?:RefStoreType;
    constructor(video:GamingVideoType, refStore?:RefStoreType){
        this.id = video.id;
        this.thumbnailUrl = video.thumbnail_url;
        this.title = video.title;
        this.viewCount = video.view_count;
        this.refStore = refStore
    }
}