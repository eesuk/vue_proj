import articlesAPI from "../../public/russia_today_0";
import imgsAPI from "../../public/urlImages";

const fakeAPI = articlesAPI.map((articleAPI) => {
    const img = imgsAPI.find((imgAPI) => imgAPI.articleUrl === articleAPI.url);

    if (img) {
        return { ...articleAPI, img: img.imageUrl };
    }

    return articleAPI;
});

export default fakeAPI;
