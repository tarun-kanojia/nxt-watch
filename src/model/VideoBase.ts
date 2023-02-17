import { VideoBaseResponse } from "./types";


export class VideoBase{
    id: string;
    publishedAt: string;
    thumbnailUrl: string;
    title: string;
    viewCount: string;
    videoUrl?: string;
    description?:string;
    constructor(video:VideoBaseResponse){
        this.id = video.id;
        this.publishedAt = video.published_at;
        this.description = video.description;
        this.thumbnailUrl = video.thumbnail_url;
        this.title = video.title;
        this.viewCount = video.view_count;
        
    }
}