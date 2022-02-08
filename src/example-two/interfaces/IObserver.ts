import { Video } from "../classes/Video"; 

export interface IObserver {
    update(video: Video): void;
}