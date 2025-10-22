import launchChromeAndGetWsUrl from "./launch-chrome-fetch-WSUrl.js";
import { launchPuppeteer } from "./launch-puppeteer.js";

export const retrieveSwiggyCookie = async () => {
  const result = await launchChromeAndGetWsUrl()
    .then(wsUrl => {
      console.log("✅ Chrome is ready!");
      return wsUrl;
    })
    .catch(e => console.error("Failed to launch Chrome:", e));

  console.log("WS URL: ", result);

  // Got the WS URL, now to pass it to Puppeteer
  // Once Puppeteer is connected, navigate to Swiggy and grab Cookie
  const cookie = await launchPuppeteer(result);

  // Once cookie obtained, pass to server.js and it should scrape the data
  return cookie;
}

