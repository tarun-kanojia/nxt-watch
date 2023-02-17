import { Channel } from "./Channel";
import { VideoResponse } from "./types";
import { VideoBase } from "./VideoBase";

export class Video extends VideoBase{
    channel: Channel;
    
    constructor(videoItem: VideoResponse) {
        super(videoItem)
        this.channel = new Channel(videoItem.channel);
        
    }
}