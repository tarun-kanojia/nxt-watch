import { action, observable } from "mobx/dist/internal";
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