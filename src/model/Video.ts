import { Channel } from "./Channel";
import { VideoResponse } from "./types";

export class Video {
    channel: Channel;
    id: string;
    publishedAt: string;
    thumbnailUrl: string;
    title: string;
    viewCount: string;
    videoUrl?: string;
    description?:string;
    constructor(videoItem: VideoResponse) {
        this.channel = new Channel(videoItem.channel);
        this.id = videoItem.id;
        this.publishedAt = videoItem.published_at;
        this.thumbnailUrl = videoItem.thumbnail_url;
        this.title = videoItem.title;
        this.viewCount = videoItem.view_count;
        this.videoUrl = videoItem.video_url;
    }
}