console.log("tá rodando")

// import fs from 'node:fs';

const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://wol.jw.org/pt/wol/h/r5/lp-t');
    new Promise (r => setTimeout(r, 1000));
    const texto = await page.evaluate(() => {
        return document.querySelector('.themeScrp').textContent;
    });
    const comentario = await page.evaluate(() => {
        return document.querySelector('.sb').textContent;
    });
    const texto2 = texto.slice(0, -1)
    const examine = `_*${texto2}*_\n\n${comentario}`;
    console.log(examine);
    fs.writeFileSync('../texto/mensagem.txt', examine)
    await browser.close();
})();

