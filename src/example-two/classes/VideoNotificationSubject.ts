import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { Video } from './Video';

export class VideoNotificationSubject implements ISubject {

    private observers: IObserver[] = [];
    public readonly video: Video;

    // constructor (public readonly video: Video) {}
    constructor (video: Video) {
        this.video = video;
    }

    subscriber(observer: IObserver): void {
        this.observers.push(observer);
    }
    unsubscriber(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    unsubscriberAll(): void {
        this.observers = [];
    }
    notify(observer: IObserver): void {
        observer.update(this.video)
    }
    notifyAll(): void {
        this.observers.forEach(obs => this.notify(obs))
    }


}