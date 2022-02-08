import IObserver from "../interfaces/IObserver"

export default class Observer implements IObserver {
    
    constructor(private readonly id: number) {}

    update(): void {
        console.log(`Observer ${this.id} updated`)
    }
}