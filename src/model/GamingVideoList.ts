import { GamingVideoListResponse } from "./types";
import { VideoBase } from "./VideoBase";

export class GamingVideoList{
    total:string;
    videos:VideoBase[];
    constructor(videoData:GamingVideoListResponse){
        this.total = videoData.total;
        this.videos = videoData.videos.map((video) => new VideoBase(video));
    }
}