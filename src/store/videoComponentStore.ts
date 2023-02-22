import { Video } from "../model/Video";

export let videoComponentListStore: Video[] = [];
export const getVideoDataFromStore = (id: string) => {
    const videoData = videoComponentListStore.filter((video) => video.id == id)
    return videoData.length === 0 ? null : videoData[0];
}

export const addVideoDataToStore = (video: Video) => {
    if (!videoComponentListStore.some((videoItem) => videoItem === video)) {
        videoComponentListStore.push(video);
    }
}

export const getVideoComponentList = () => {
    return videoComponentListStore;
}

export const updateVideoComponentListToStore = (newList: Video[]) => {
    videoComponentListStore = newList;
}

export const patchUpdateVideoListToStore = (video:Video) => {
  videoComponentListStore = videoComponentListStore.map((videoItem) => (
    videoItem.id === video.id ? video : videoItem))
}