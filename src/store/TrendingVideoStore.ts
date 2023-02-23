import { action, computed, observable } from "mobx";
import { observer } from "mobx-react";
import { RefStoreType, VideoListResponse, VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";
import { TransportLayer } from "../service/TransportLayer";
export class TrendingVideoStore {
    @observable videos: Video[];
    refStore: RefStoreType;
    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer, storeRef:RefStoreType) {
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.refStore = storeRef;

    }

    @action loadVideos = async () => {
        try {

            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchTrendingVideos();
            this.videos = videosResponseJson.map((video) => new Video(video, this.refStore));

        }

        catch (error) {
            throw error;
        }


    }

    


}
