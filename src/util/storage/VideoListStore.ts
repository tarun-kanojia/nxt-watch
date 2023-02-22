import { GamingVideoListResponse, VideoListResponse } from "../../model/types";
import { Video } from "../../model/Video";
import { VideoList } from "../../model/VideoList";

export const getVideoListFromStore = (key:string) => {
  const list = localStorage.getItem(key)
  return null
  // return list ? JSON.parse(list) : null;
}

export const updateVideoListToStore = (key:string, value:VideoListResponse|GamingVideoListResponse) => {
    localStorage.setItem(key, JSON.stringify(value));
}