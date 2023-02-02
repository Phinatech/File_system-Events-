import events from "events";

console.log(events);

//The emit always stay at the bottom part of  our documentation
const EventEmitter = new events();

EventEmitter.on("help", () => {
  console.log("I have Heard you");
});

EventEmitter.emit("help");

//sending a file that will generating a unique id and will be updating itself every 5 seconds

import { format } from "date-fns";

import { v4 as uuid } from "uuid";
import fspromise from "fs/promises";
import path from "path";
import { deflate } from "zlib";

const welcomeEvent = async (message: string) => {
  const dateTime = `${format(new Date(), "dd/MM/yyy\thh:mm:ss")}`;
  const uniqueID = `${uuid()}`;
  const welcomeMessage = `${dateTime}\t${uniqueID}\t${message}`;
  console.log(welcomeMessage);

  //   fspromise.appendFile(
  //     path.join(__dirname, "welcomeFolder", "welcome.txt"),
  //     welcomeMessage
  //   );
};

export default welcomeEvent;




