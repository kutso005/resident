import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Also = ({ data, searchInput }) => {
  const lang = localStorage.getItem("lang");

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);
  return (
    <div>
      {data?.similar_posts?.length > 0 && (
        <h6 className="title deteil_title deteils_title_el mb-3">
          {t("key11")}
        </h6>
      )}
      {data?.similar_posts
        ?.filter((el) => {
          return el.title.toLowerCase().includes(searchInput.toLowerCase());
        })
        .map((el) => (
          <a className="a" key={el.slug} href={`/${lang}/news/${el.slug}`}>
            <div style={{ marginBottom: "20px" }} className="cntnt_flex">
              <img
                style={{ width: "100%", height: "170px" }}
                className="cntnt_img"
                src={el.img}
                alt=""
              />
              <div className="cntnt_hldr margin_child">
                <p className="one_text mt-2">{el.cat_title}</p>
                <h5
                  className="popular_title one_title line-high mt-2"
                  style={{ width: "100%" }}
                >
                  {el.title}
                </h5>
                <p className="popular_project one_project mt-2">
                  {el.created_at}
                </p>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
};

export default Also;
