import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { VideoListResponse, VideoResponse } from "../../model/types";
import { Video } from "../../model/Video";
import { VideoList } from "../../model/VideoList";
import { TransportLayer } from "../../service/TarnsportLayer/index.api";
import { TransportLayer as TransportLayerFixtureType } from "../../service/TarnsportLayer/index.fixture";

import { RootStore } from "../RootStore";
export class HomeVideoStore {
    videos: Video[];
    rootStoreRef: RootStore;
    transportLayer: TransportLayer;
    query: string;
    constructor(transportLayerRef: TransportLayer, rootStoreRef: RootStore) {
        makeObservable(this, {
            videos: observable,
            query: observable,
            loadVideos: action,
            setQuery: action,
            filterVideos: computed,
        });
        this.transportLayer = transportLayerRef;
        this.videos = [];
        this.rootStoreRef = rootStoreRef;
        this.query = "";
    }

    loadVideos = async (bearerToken: string) => {
        try {
            // console.log('inside HomeVideoStore loading videos')
            const videosResponseJson: VideoResponse[] =
                await this.transportLayer.fetchHomeVideos(bearerToken);
            this.videos = videosResponseJson.map(
                (video) => new Video(video, this)
            );
        } catch (error) {
            throw error;
        }
    };

    setQuery(q: string) {
        this.query = q;
    }

    get filterVideos(): Video[] {
        if (this.query === "") return this.videos;
        return this.videos.filter((video) =>
            video.title.toLowerCase().includes(this.query.toLocaleLowerCase())
        );
    }
}
