import axios from "axios";

export const api = axios.create({
  baseURL: "https://resident.kg/api",
});
let lang = localStorage.getItem("lang");

if (!lang) {
  localStorage.setItem("lang", "ru");
  lang = "ru";
}

export const get = {
  getSlider: () => {
    return api
      .get(`/${lang}/list/slider/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching slider items:", error);
        throw error;
      });
  },
  getHeader: () => {
    return api
      .get(`/${lang}/header`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
