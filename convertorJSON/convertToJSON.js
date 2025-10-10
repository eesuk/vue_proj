import fs from "fs";

fs.readFile("../public/russia_today_0.json", function (error, data) {
    if (error) {
        return console.log(error);
    }
    try {
        const dataString = data.toString();

        let parsed;
        try {
            parsed = JSON.parse(dataString);
            console.log("Файл уже является валидным JSON");
            return;
        } catch (e) {}

        const convertedData = dataString.replace(/}\n{/g, `},\n{`);
        const result = `[${convertedData}]`;

        fs.writeFile("../public/russia_today_0.json", result, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Файл успешно записан");
        });
    } catch (e) {
        console.error(e);
    }
});
