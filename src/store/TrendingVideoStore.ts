import { action, computed, observable } from "mobx";
import { observer } from "mobx-react";
import { VideoListResponse, VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";
import { TransportLayer } from "../service/TransportLayer";
export class TrendingVideoStore {
    @observable videos: Video[];

    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer) {
        this.transportLayer = transportLayerRef;
        this.videos = [];

    }

    @action loadVideos = async () => {
        try {

            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchTrendingVideos();
            this.videos = videosResponseJson.map((video) => new Video(video));

        }

        catch (error) {
            throw error;
        }


    }

    


}
