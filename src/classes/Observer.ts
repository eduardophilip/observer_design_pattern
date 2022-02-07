import IObserver from "../interfaces/Iobserver";

export default class Observer implements IObserver {
    
    constructor(private readonly id: number) {}

    update(): void {
        console.log(`Observer ${this.id} updated`)
    }
}