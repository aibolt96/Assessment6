const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button works", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    let text = await driver.findElement(By.id("choose-header")).getText()
    expect(text).toBe("Choose 2!")
  });

  test("Play again button works", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    await driver.findElement(By.className("bot-btn")).click()
    await driver.findElement(By.id("duel")).click()
    await new Promise(resolve => setTimeout(resolve, 2000));
    await driver.findElement(By.id("play-again")).click()
    let text = await driver.findElement(By.id("choose-header")).getText()
    expect(text).toBe("Choose 2!")
    
  })
});