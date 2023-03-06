import { action, observable, reaction } from "mobx";
import { Video } from "../model/Video";
import { TransportLayer } from "../service/TarnsportLayer/index.api";
import { RootStore } from "./RootStore";

export class SavedVideosStore {
  @observable videos: Video[];
  rootStore: RootStore;
  transportLayer: TransportLayer;
  constructor(transportLayerRef: TransportLayer, rootStoreRef: RootStore) {
    this.rootStore = rootStoreRef;
    this.transportLayer = transportLayerRef;
    this.videos = [];
  }

  @action 
  toggleVideoData = (videoData: Video) => {
    if (this.videos.some((video) => video.id === videoData.id)) {
      this.videos = this.videos.filter((video) => video.id !== videoData.id);

    } else this.videos.push(videoData);
  }

  @action 
  loadVideos = () => {
    console.log('loading gaming videos');
  }


}

