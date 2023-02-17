import { VideoListResponse } from "./types";
import { Video } from "./Video";


export class VideoList{
    total?:string;
    videos?:Video[];
    constructor(videoList:VideoListResponse){
        this.total = videoList.total;
        this.videos = videoList.videos.map((videoItem) => new Video(videoItem));
    }
}