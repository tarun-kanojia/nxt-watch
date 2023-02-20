import { VideoListResponse } from "../../model/types";
import { Video } from "../../model/Video";
import { VideoList } from "../../model/VideoList";

export const getVideoListFromStore = (key:string) => {
  const list = localStorage.getItem(key)
  return list ? JSON.parse(list) : null;
}

export const updateVideoListToStore = (key:string, value:VideoListResponse) => {
    localStorage.setItem(key, JSON.stringify(value));
}