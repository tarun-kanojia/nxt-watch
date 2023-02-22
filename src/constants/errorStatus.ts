export enum APIStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    PRESENT = 'PRESENT',
    FAILED = 'FAILED'
}



export type LikedStatusType = null|boolean;

export const LikedStatus = {
    INITIAL:null,
    IS_LIKED : true,
    IS_DISLIKES: false,

}



const videosList = []