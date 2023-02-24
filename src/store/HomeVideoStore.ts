import { action, computed, observable } from "mobx";
import { observer } from "mobx-react";
import { VideoListResponse, VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";
import { TransportLayer } from "../service/TransportLayer";
import { RootStore } from "./RootStore";
export class HomeVideoStore {
    @observable videos: Video[];
    rootStoreRef:RootStore;
    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer, rootStoreRef:RootStore) {
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.rootStoreRef = rootStoreRef;

    }

    @action loadVideos = async (bearerToken:string) => {
        try {
            // console.log('inside HomeVideoStore loading videos')
            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchHomeVideos(bearerToken);
            this.videos = videosResponseJson.map((video) => new Video(video, this));

        }

        catch (error) {
            throw error;
        }


    }

    @computed filterVideos = (query: string): Video[] => {
        return this.videos.filter((video) => video.title.toLowerCase() === query.toLocaleLowerCase());
    }

}
