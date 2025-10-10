import puppeteer from "puppeteer";
import fs from "fs";

let articles;
let imagesJSON = [];

fs.readFile("./public/russia_today_0.json", function (error, data) {
    if (error) {
        return console.log(error);
    }
    try {
        const dataString = data.toString();
        articles = JSON.parse(dataString);
    } catch (e) {
        console.error(e);
    }
});

(async function () {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--window-size=1920,1080"],
    });
    const page = await browser.newPage();

    for (const article of articles) {
        if (article.url.startsWith("https://russian.rt.comhttps://")) {
            article.url = article.url.replace(
                "https://russian.rt.comhttps://",
                "https://"
            );
        }

        console.log("Захожу на:", article.url);

        await page.goto(article.url, {
            waitUntil: "domcontentloaded",
            timeout: 0,
        });

        try {
            await page.waitForSelector(".article__cover-image ", {
                timeout: 5000,
            });
        } catch (e) {
            console.log("Skip");
            continue;
        }

        const data = await page.evaluate(() => {
            const img = document.querySelector(".article__cover-image ");
            return img ? img.src : "не сработало";
        });

        console.log("Изображение:", data, "...");

        imagesJSON.push({ articleUrl: article.url, imageUrl: data });
    }

    fs.writeFile(
        "./public/urlImages.json",
        JSON.stringify(imagesJSON),
        function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Файл успешно записан");
        }
    );

    await browser.close();
})();
