import { IObserver } from "../interfaces/IObserver";
import { Video } from "./Video";

export class Feed implements IObserver {

    public url :string = '';

    constructor (
        public readonly channelId: string
    ) {
        this.url = `https://www.youtube.com/feeds/videos.xml?channel_id=${this.channelId}`
    }

    update(video: Video): void {
        console.log(`New video added in Feed RSS: "${video.title}"`);
        console.log(`Check this out : "${this.url}"`);
    }

}