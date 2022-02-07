import Observer from "./classes/Observer";
import Subject from "./classes/Subject";

const observerOne = new Observer(1);
const observerTwo = new Observer(2);
const observerThree = new Observer(3);

console.log(observerOne)
console.log(observerTwo)
console.log(observerThree)

const subject = new Subject();

console.log("Subscribe 1, 2, 3")
subject.subscribe(observerOne);
subject.subscribe(observerTwo);
subject.subscribe(observerThree);

console.log("Notify All \n");
subject.notifyAll();

console.log("Unsubscribe 2");
subject.unsubscribe(observerTwo)

console.log("Notify All again \n");
subject.notifyAll();
