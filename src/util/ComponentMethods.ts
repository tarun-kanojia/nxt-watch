import { VideoList } from "../model/VideoList";

export const filterList = (querry:string, list:VideoList) => {
    return list.videos ? list.videos.filter((video) => (
        video.title.toLowerCase().includes(querry.toLowerCase())
    ))
    :[];
}