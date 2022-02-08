import { Subscriber } from "./classes/Subscriber";
import { Feed } from "./classes/Feed";
import { VideoNotificationSubject } from './classes/VideoNotificationSubject';
import { Video } from "./classes/Video";

const newVideo = new Video(
    "ioYkXh8NhKc",
    "Learn about Design Pattern Observer",
    "https://miro.medium.com/max/900/1*FIwiE9wN5KHtnutjd0DNTQ.jpeg",
    "https://www.youtube.com/watch?v=ioYkXh8NhKc",
);

const videoNotification = new VideoNotificationSubject(newVideo);

// **** Need make a refactoring ****///

// Observers
const obsJoao = new Subscriber(1, "João");
const obsMaria = new Subscriber(2, "Maria");
const obsJuliana = new Subscriber(3, "Juliana");
const feed = new Feed("UCFuIUoyHB12qpYa8Jpxoxow");


// Subscriber observers
videoNotification.subscriber(obsJoao);
videoNotification.subscriber(obsMaria);
videoNotification.subscriber(obsJuliana);
videoNotification.subscriber(feed);


console.log("Notifying observers...");
videoNotification.notifyAll();

// Unsubscribe juliana
console.log("Unsubscribe Juliana");
videoNotification.unsubscriber(obsJuliana);
// Notify again
console.log("Notifying observers...");
videoNotification.notifyAll();