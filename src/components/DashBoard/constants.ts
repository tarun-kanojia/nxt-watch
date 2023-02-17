import { FaFire, FaGamepad, FaHome, FaSave } from "react-icons/fa";

export const DASH_BOARD_CONTENT = {
    list: [

        {
            id: 1,
            icon: FaHome,
            title: 'Home',
            active: true,
            path:'/'
        },
        {
            id: 2,
            icon: FaFire,
            title: 'Trending',
            active: false,
            path:'/trending'
        },
        {
            id: 3,
            icon: FaGamepad,
            title: 'Gaming',
            active: false,
            path:'/gaming'

        },
        {
            id: 4,
            icon: FaSave,
            title: 'Saved video',
            active: false,
            path:'/save-videos'
        }
    ]

}