import { action, computed, observable } from "mobx";
import { VideoResponse } from "../model/types";
import { Video } from "../model/Video";
import { TransportLayer } from "../service/TransportLayer";
export class GamingVideoStore {
    @observable videos: Video[];

    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer) {
        this.transportLayer = transportLayerRef;
        this.videos = [];

    }

    @action loadVideos = async () => {
        try {

            const videosResponseJson: VideoResponse[] = await this.transportLayer.fetchGamingVideos();
            this.videos = videosResponseJson.map((video) => new Video(video));

        }

        catch (error) {
            throw error;
        }


    }

}
