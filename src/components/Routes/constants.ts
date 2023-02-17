import Gaming from "../Gaming";
import Home from "../Home";
import SavedVideo from "../SavedVideo";
import Trending from "../Trending";
import Video from "../VideoComponent";

export const ROUTES = [
    {
        path: "/",
        element: Home,

    },
    {
        path: "/trending",
        element: Trending,

    },
    {
        path: "/gaming",
        element: Gaming,

    },
    {
        path: "/save-videos",
        element: SavedVideo,

    },

    {
        path: "/videos/:id",
        element: Video,

    },


]