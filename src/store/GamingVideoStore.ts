import { action, computed, observable } from "mobx";
import { RefStoreType, VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { TransportLayer } from "../service/TransportLayer";
export class GamingVideoStore {
    @observable videos: Video[];
    
    refStore:RefStoreType;
    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer, storeRef:RefStoreType) {
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.refStore = storeRef;
    }

    @action loadVideos = async () => {
        try {

            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchGamingVideos();
            this.videos = videosResponseJson.map((video) => new Video(video, this.refStore));

        }

        catch (error) {
            throw error;
        }


    }

}
