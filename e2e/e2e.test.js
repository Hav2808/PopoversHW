import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("tooltip", () => {
  let browser;
  let page;
  const baseUrl = "http://127.0.0.1:5500/dist/index.html";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // чтобы показывать реальный браузер
      slowMo: 250,
      // devtools: true, // чтобы видеть инструменты разработчика
    });
    page = await browser.newPage(); //браузер открывает страницу
  });
  //закрывает браузер
  afterAll(async () => {
    await browser.close();
  });

  test("tooltip show on page", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container");
    const button = await page.$(".btn");
    await button.click();
    await page.waitForSelector(".tooltip");
  });
});
