import fs from "fs";
import _ from "lodash";

fs.readFile("./public/russia_today_0.json", function (error, data) {
    if (error) {
        return console.log(error);
    }
    try {
        const dataString = data.toString();
        const dataJSON = JSON.parse(dataString);
        let keyWords = [];
        let CountKeyWords = [];

        dataJSON.map((data) => {
            data.keywords.map((keyword) => {
                keyWords.unshift(keyword);
            });
        });

        const uniqKeyWords = _.uniq(keyWords);

        let count = 0;
        uniqKeyWords.map((uniqKeyWord) => {
            count = 0;

            dataJSON.map((data) => {
                data.keywords.map((keyword) => {
                    if (uniqKeyWord == keyword) count++;
                });
            });

            CountKeyWords.push({
                KeyWordName: uniqKeyWord,
                KeyWordCount: count,
            });
        });

        const TopKeyWords = _.orderBy(
            CountKeyWords,
            ["KeyWordCount"],
            ["desc"]
        ).slice(0, 100);
        console.log(TopKeyWords);

        //const sortedByAgeDesc = _.orderBy(users, ['age'], ['desc']);

        fs.writeFile(
            "./public/TopKeyWords.json",
            JSON.stringify(TopKeyWords),
            function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Файл успешно записан");
            }
        );
    } catch (e) {
        console.error(e);
    }
});
