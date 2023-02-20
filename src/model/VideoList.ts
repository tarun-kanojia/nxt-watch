import { GamingVideoListResponse, VideoListResponse } from "./types";
import { Video } from "./Video";
import { VideoBase } from "./VideoBase";


export class VideoList {
    total?: string;
    videos?: Video[];
    constructor(videoList?: VideoListResponse) {
        if (videoList) {
            this.total = videoList.total;
            this.videos = videoList.videos.map((videoItem) => new Video(videoItem));

        } else {
            this.total = '0';
            this.videos = [];
        }
    }
}

