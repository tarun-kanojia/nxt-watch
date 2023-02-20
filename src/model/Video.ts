import { Channel } from "./Channel";
import { VideoResponse } from "./types";
import { VideoBase } from "./VideoBase";

export class Video extends VideoBase {
    channel: Channel;
    isSaved: boolean;
    isLiked: boolean;
    isDisLiked: boolean;
    constructor(videoItem: VideoResponse) {
        super(videoItem)
        this.channel = new Channel(videoItem.channel);
        this.isSaved = false;
        this.isLiked = false;
        this.isDisLiked = false;
    }

    toggleSavedStatus = () => {
        console.log(this)
        // console.log('saved status before:', this.isSaved);
       
        this.isSaved = !this.isSaved;
        // console.log('saved status after:', this.isSaved);
        
    }

    toggleLike = () => {
        this.isLiked = !this.isLiked;
        this.isDisLiked = !this.isDisLiked;
    }

    toggleDisLike = () => {
        this.isDisLiked = !this.isDisLiked;
        this.isLiked = !this.isDisLiked;
    }
}