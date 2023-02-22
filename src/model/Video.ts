import { Channel } from "./Channel";
import { VideoResponse, VideoStateRefType } from "./types";
import { VideoBase } from "./VideoBase";

export class Video extends VideoBase {
    channel: Channel;
    isSaved: boolean;
    isLiked: boolean|null;
    constructor(videoItem : VideoResponse) {
        super(videoItem)
        this.channel = new Channel(videoItem.channel);
        this.isSaved = false;
        this.isLiked = videoItem.is_liked ??  null;
    }

    toggleSavedStatus = () => {
        console.log(this)
        this.isSaved = !this.isSaved;
         
    }

    toggleLike = () => {
        this.isLiked = !this.isLiked;
        
    }


}