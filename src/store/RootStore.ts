import { GamingVideoList } from "../model/GamingVideoList";
import { StoreReferencesType } from "../model/types";
import { GamingVideoStore } from "./GamingVideoStore";
import { HomeVideoStore } from "./HomeVideoStore";
import { TrendingVideoStore } from "./TrendingVideoStore";

class RootStore{
    homeVideoStore:HomeVideoStore;
    gamingVideoStore:GamingVideoStore;
    trendingVideoStore:TrendingVideoStore;

    constructor(storeReferences:StoreReferencesType){
        this.homeVideoStore = storeReferences.homeVideoRef;
        this.gamingVideoStore = storeReferences.gamingVideoRef;
        this.trendingVideoStore = storeReferences.trendingVideoRef;
    }

    
}