import { defineStore } from "pinia";
import { ref } from "vue";
import fakeAPI from "@/assets/FakeApi";

export const useArticleStore = defineStore("articles", () => {
    const articleList = ref(fakeAPI);

    const getByKey = (key) => {
        let filteredByImg = articleList.value.filter((article) => {
            return article.img != null;
        });

        if (key != "NEW") {
            let filteredByKey = filteredByImg.filter((article) => {
                return article.keywords.includes(key);
            });

            return filteredByKey.slice(3, 7);
        } else {
            return filteredByImg.slice(0, 6);
        }
    };

    return { articleList, getByKey };
});
