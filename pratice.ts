import fs from "fs";
import fspromises from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

const helloEvent = async function (message: string) {
  const dateTime = `${format(new Date(), "dd,MM,yyyy\thh:mm:ss")}`;
  const uniqueID = `${uuid()}`;
  const welcomeMessage = `This are the following messages: \nThe date and time it was created:${dateTime}\n Your UniqueID is:${uniqueID}\n${message}\n\n`;
  console.log(welcomeMessage);

  try {
    if (!fs.existsSync(path.join(__dirname, "Judithfolder"))) {
      await fspromises.mkdir(path.join(__dirname, "Judithfolder"));
    }

    await fspromises.appendFile(
      path.join(__dirname, "Judithfolder", "judith.txt"),
      welcomeMessage
    );
  } catch (error) {
    console.log("An error occured" + error);
  }
};

export default helloEvent;
