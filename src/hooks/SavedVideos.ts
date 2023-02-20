import { createContext} from 'react'
import { Video } from '../model/Video';





export type  SavedVideosType = {
    savedVideos:Video[];
    updateSaveVideoList:(list:Video) => void;

};

export const SavedVideosContext = createContext<SavedVideosType | null>(null);