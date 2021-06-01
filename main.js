const puppeteer = require("puppeteer");
const fs = require("fs");

let inputArr = process.argv.slice(2);
console.log(inputArr);

(async function () {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto("https://www.linkedin.com/");
  await tab.type("#session_key", inputArr[0]);
  await tab.type("#session_password", inputArr[1]);
  await tab.click(".sign-in-form__submit-button");
  await tab.waitForSelector("#global-nav-search", { visible: true });
  await tab.click("#global-nav-search");
  await tab.type("#global-nav-search", "Frontend Developer");
  await tab.keyboard.press("Enter");
  await tab.waitForSelector(
    ".search-results__cluster-bottom-banner.artdeco-button.artdeco-button--tertiary.artdeco-button--muted",
    { visible: true }
  );
  let allShowMore = await tab.$$(
    ".search-results__cluster-bottom-banner.artdeco-button.artdeco-button--tertiary.artdeco-button--muted"
  );
  let showMore = allShowMore[0];
  await showMore.click();

  await tab.waitForTimeout(2000);
  await tab.waitForSelector(
    ".artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button",
    { visible: true }
  );
  let allCheckBtn = await tab.$$(
    ".artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button"
  );
  let jobType = allCheckBtn[4];
  // console.log(expLvl);
  await jobType.click();

  await tab.waitForTimeout(2000);
  // await tab.waitForSelector(".search-reusables__value-label" , {visible : true});
  // let ckBtn = await tab.$$eval(".search-reusables__value-label");
  // let internBtn = ckBtn[25];
  // await internBtn.click();
  await tab.click(
    "#artdeco-hoverable-artdeco-gen-53 > div.artdeco-hoverable-content__shell > div > form > fieldset > div.pl4.pr6 > ul > li:nth-child(6) > label"
  );
  await jobType.click();

  //get the data of the internship
  await getInternshipData(browser, tab);
})();

async function getInternshipData(browser, tab) {
  await tab.waitForSelector(".disabled.ember-view.job-card-container__link", {
    visible: true,
  });
  let allATags = await tab.$$(".disabled.ember-view.job-card-container__link");

  let allInternshipLinks = [];

  for (let i = 0; i < allATags.length; i++) {
    let internLink = await tab.evaluate(function (elem) {
      return elem.getAttribute("href");
    }, allATags[i]);
    internLink = "https://www.linkedin.com/" + internLink;
    allInternshipLinks.push(internLink);
  }

  for (let i = 0; i < 10; i++) {
    console.log(i+1);
    console.log(allInternshipLinks[i]);
  }
}

