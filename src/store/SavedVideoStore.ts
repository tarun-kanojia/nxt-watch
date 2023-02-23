import { action, apiOwnKeys, observable } from "mobx/dist/internal";
import { ALL_VIDEOS_URL, GAMING_VIDEO_URL, TRENDING_VIDEO_URL } from "../constants/endPoints";
import { VideoListResponse } from "../model/types";
import { Video } from "../model/Video";


export class SavedVideoStore {
    @observable videos:Video[];

    constructor(){
        this.videos = [];
    }

    @action addVideo = (video:Video) => {
        this.videos.push(video);
    }

    @action removeVideo = (id:string) => {
      this.videos = this.videos.filter((video) => video.id !== id);
    }



}