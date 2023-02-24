import { action, computed, observable } from "mobx";
import { GamingVideo } from "../model/GamingVideoList";
import { RefStoreType, VideoResponse,VideoBaseResponse, GamingVideoType } from "../model/types";
import { Video } from "../model/Video";

import {VideoBase} from "../model/VideoBase"
import { TransportLayer } from "../service/TransportLayer";
import { RootStore } from "./RootStore";
export class GamingVideoStore {
    @observable videos: GamingVideo[];
    rootStoreRef:RootStore;
    transportLayer: TransportLayer;
    constructor(transportLayerRef: TransportLayer, rootStoreRef:RootStore) {
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.rootStoreRef = rootStoreRef;
    }

    @action loadVideos = async (bearerToken:string) => {
        try {

            const videosResponseJson: GamingVideoType[] = await this.transportLayer.fetchGamingVideos(bearerToken);
            this.videos = videosResponseJson.map((video) => new GamingVideo(video, this));

        }

        catch (error) {
            throw error;
        }


    }

}