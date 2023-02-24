import { apiOwnKeys } from "mobx/dist/internal";
import { ALL_VIDEOS_URL, GAMING_VIDEO_URL, TRENDING_VIDEO_URL } from "../constants/endPoints";
import { RefStoreType, VideoListResponse } from "../model/types";

interface TransportLayerType {
    endPoint: string;
    method: String;
    bearerToken: string;
    body: Object;
}

export class TransportLayer {
    bearerToken: string|null;
    constructor(apiCallerRequest: TransportLayerType|null) {
        this.bearerToken = apiCallerRequest ? apiCallerRequest.bearerToken : null;
    }

    fetchHomeVideos = async (bearerToken:string) => {
        // console.log('Bearer Token',this.bearerToken);
        const requestOption = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${bearerToken}`,
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


    fetchGamingVideos = async (bearerToken:string) => {
        const requestOption = {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
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

    fetchTrendingVideos = async (bearerToken:string) => {
        const requestOption = {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
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


