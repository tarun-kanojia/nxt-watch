import { apiOwnKeys } from "mobx/dist/internal";
import { ALL_VIDEOS_URL, GAMING_VIDEO_URL, TRENDING_VIDEO_URL } from "../constants/endPoints";
import { VideoListResponse } from "../model/types";

interface TransportLayerType {
    endPoint: string;
    method: String;
    bearerToken: string;
    body: Object;
}

export class TransportLayer {
    bearerToken: string;
    constructor(apiCallerRequest: TransportLayerType) {
        this.bearerToken = apiCallerRequest.bearerToken;
    }

    fetchHomeVideos = async () => {
        const requestOption = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.bearerToken}`,
                "Content-Type": "application/json"
            },
        }

        try {
            const response = await fetch(ALL_VIDEOS_URL, requestOption);
            const responseJSON: VideoListResponse = await response.json();
            return responseJSON.videos;


        } catch (error) {
            console.log(error)
            throw error;
        }

    }


    fetchGamingVideos = async () => {
        const requestOption = {
            headers: {
                Authorization: `Bearer ${this.bearerToken}`,
                "Content-Type": "application/json"
            },

            method: 'GET'

        }

        try {
            const response = await fetch(GAMING_VIDEO_URL, requestOption);
            const responseJSON = await response.json();

            return responseJSON.videos;


        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    fetchTrendingVideos = async () => {
        const requestOption = {
            headers: {
                Authorization: `Bearer ${this.bearerToken}`,
                "Content-Type": "application/json"
            },

            method: 'GET'

        }

        try {
            const response = await fetch(TRENDING_VIDEO_URL, requestOption);
            const responseJSON: VideoListResponse = await response.json();

            return responseJSON.videos;


        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}


