import events from "events";
import helloEvent from "./pratice";

const EventsEmitter = new events();

EventsEmitter.on("listen to this", (msg) => helloEvent(msg));

let num: number = 0;
setInterval(() => {
  EventsEmitter.emit(
    "listen to this",
    `hello,everyone this is my facebook live.\n This is message:${(num += 1)}`
  );
}, 5000);
