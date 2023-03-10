import { action, observable } from "mobx";
import { Channel } from "./Channel";
import { RefStoreType, VideoResponse } from "./types";
import { VideoBase } from "./VideoBase";

export class Video extends VideoBase {
    channel: Channel;
    @observable isSaved: boolean;
    @observable isLiked: boolean | null;
    refStore?: RefStoreType;
    constructor(videoItem: VideoResponse, storeRef?: RefStoreType) {
        super(videoItem);
        this.channel = new Channel(videoItem.channel);
        this.isSaved = false;
        this.isLiked = videoItem.is_liked ?? null;
        this.refStore = storeRef;
    }

    @action toggleSavedStatus = () => {
        // console.log(this)
        this.isSaved = !this.isSaved;
    };

    @action toggleLike = () => {
        this.isLiked = !this.isLiked;
    };
}
