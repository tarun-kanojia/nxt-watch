import { GamingVideoList } from "../model/GamingVideoList";
import { Video } from "../model/Video";

class GamingVideoListStore{
    list:GamingVideoList[]|null;
    constructor(videoList:GamingVideoList[]|null){
        this.list = videoList;
    }

    getVideoList = () => {
      return this.list;
    }

    updateVideoList(videoList:GamingVideoList[]){
        this.list = videoList;
    }
}

export let gamingVideoListStore = new GamingVideoListStore(null);