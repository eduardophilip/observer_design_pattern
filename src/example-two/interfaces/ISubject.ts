import { IObserver } from "./IObserver";

export interface ISubject {
    subscriber(observer: IObserver): void;
    unsubscriber(observer: IObserver): void;
    unsubscriberAll(): void;
    notify(observer: IObserver): void;
    notifyAll(): void;
}