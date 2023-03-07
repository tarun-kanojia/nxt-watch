import {
    ALL_VIDEOS_URL,
    GAMING_VIDEO_URL,
    TRENDING_VIDEO_URL,
} from "../../constants/endPoints";
import { RefStoreType, VideoResponse } from "../../model/types";
import videoListFixture from "../../fixtures/getVideoList.json";
interface TransportLayerType {
    endPoint: string;
    method: String;
    bearerToken: string;
    body: Object;
}

export class TransportLayer {
    bearerToken: string | null;
    constructor(apiCallerRequest: TransportLayerType | null) {
        this.bearerToken = apiCallerRequest
            ? apiCallerRequest.bearerToken
            : null;
    }

    fetchHomeVideos = async (bearerToken: string): Promise<VideoResponse[]> => {
        return new Promise((resolve) => videoListFixture as VideoResponse[]);
    };

    fetchGamingVideos = async (bearerToken: string) => {};

    fetchTrendingVideos = async (
        bearerToken: string
    ): Promise<VideoResponse[]> => {
        return new Promise((resolve) => videoListFixture as VideoResponse[]);
    };
}
