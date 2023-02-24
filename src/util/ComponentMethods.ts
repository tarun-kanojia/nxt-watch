import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";

export const filterList = (querry:string, videoList:Video[]) => {
    return (videoList.filter((video) => video.title.toLowerCase().includes(querry.toLowerCase())));
   
    // return list.videos ? list.videos.filter((video) => (
    //     video.title.toLowerCase().includes(querry.toLowerCase())
    // ))
    // :[];
}