import { ChannelResponse } from "./types";

export class Channel {
    name: string;
    profileImageUrl: string;
    subscriberCount?: string;
    constructor(channelItem: ChannelResponse) {
        this.name = channelItem.name;
        this.profileImageUrl = channelItem.profile_image_url;
        this.subscriberCount = channelItem.subscriber_count
    }

    
}