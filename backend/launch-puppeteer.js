import puppeteer from "puppeteer";

export const launchPuppeteer = async (wsUrl) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl
  });

  const pages = await browser.pages();

  const page = pages[0];

  await page.goto("https://www.swiggy.com/city/bangalore/hotel-empire-koramangala-rest425?lat=13.0035068&lng=77.5890953");

  const cookies = await browser.cookies();

  const awsWAFToken = (() => {
    const { name, value } = cookies.find(c => c.name === "aws-waf-token");
    return `${name}=${value}`;
  })();

  await browser.close();

  return awsWAFToken;
}