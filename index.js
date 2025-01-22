console.log("tá rodando")

const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://wol.jw.org/pt/wol/h/r5/lp-t');
    new Promise (r => setTimeout(r, 1000));
    await page.click('.lnc-button.lnc-button--primary.lnc-acceptCookiesButton');
    const texto = await page.evaluate(() => {
        return document.querySelector('.themeScrp').textContent;
    });
    const comentario = await page.evaluate(() => {
        return document.querySelector('.sb').textContent;
    });
    console.log(`${texto} \n\n ${comentario}`);
    // await browser.close();
})();
