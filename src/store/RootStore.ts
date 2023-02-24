import { GamingVideoList } from "../model/GamingVideoList";
import { StoreReferencesType } from "../model/types";
import { GamingVideoStore } from "./GamingVideoStore";
import { HomeVideoStore } from "./HomeVideoStore";
import { SavedVideosStore } from "./SavedVideosStore";
import { TrendingVideoStore } from "./TrendingVideoStore";

export class RootStore {
    homeVideoStore: HomeVideoStore | null;
    gamingVideoStore: GamingVideoStore | null;
    trendingVideoStore: TrendingVideoStore | null;
    savedVideoStore:SavedVideosStore|null;
    constructor(storeReferences: StoreReferencesType | null) {
        this.homeVideoStore = storeReferences ? storeReferences.homeVideoRef : null;
        this.gamingVideoStore = storeReferences ? storeReferences.gamingVideoRef : null;
        this.trendingVideoStore = storeReferences ? storeReferences.trendingVideoRef : null;
        this.savedVideoStore = storeReferences ? storeReferences.savedVideoRef : null;
    }

    updateHomeVideoRef = (homeRef: HomeVideoStore) => {
        this.homeVideoStore = homeRef;
    }


    updateGamingVideoRef = (gamingRef: GamingVideoStore) => {
        this.gamingVideoStore = gamingRef;
    }


    updateTrendingVideoRef = (trendingRef: TrendingVideoStore) => {
        this.trendingVideoStore = trendingRef;
    }

    updateSavedVideoRef = (savedVideoRef:SavedVideosStore) => {
      this.savedVideoStore = savedVideoRef;
    }
}