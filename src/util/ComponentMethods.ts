import { Video } from "../model/Video";
import { VideoList } from "../model/VideoList";

export const filterList = (query:string, videoList:Video[]) => {
    return (videoList.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())));
   
    // return list.videos ? list.videos.filter((video) => (
    //     video.title.toLowerCase().includes(querry.toLowerCase())
    // ))
    // :[];
}