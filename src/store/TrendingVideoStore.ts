import { action, computed, observable } from "mobx";
import { observer } from "mobx-react";
import { RefStoreType, VideoListResponse, VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";
import { TransportLayer } from "../service/TransportLayer";
import { RootStore } from "./RootStore";
export class TrendingVideoStore {
    @observable videos: Video[];
    rootStoreRef: RootStore;
    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer, rootStoreRef:RootStore) {
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.rootStoreRef = rootStoreRef;

    }

    @action loadVideos = async (bearerToken:string) => {
        try {

            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchTrendingVideos(bearerToken);
            this.videos = videosResponseJson.map((video) => new Video(video, this));

        }

        catch (error) {
            throw error;
        }


    }

    


}
