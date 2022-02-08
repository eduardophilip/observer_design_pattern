import { IObserver } from "../interfaces/IObserver";
import { Video } from "./Video";

export class Subscriber implements IObserver {

    constructor (
        public readonly id: number,
        public readonly name: string
    ) {}

    update(video: Video): void {
        console.log(`${this.name} has been notified about ${video.title}`)
    }

}