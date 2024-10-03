import React from "react";
import { NavLink } from "react-router-dom";

const PopularAdap = ({ residentList }) => {
  const lang = localStorage.getItem("lang");
  return (
    <div>
      <div>
        {Array.isArray(residentList?.Popular) &&
          residentList?.Popular?.slice(0, 1).map((el) => (
            <div>
              <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
                Популярные
              </h1>
              <div className="popular_links" />
            </div>
          ))}
        <div className="git_flex_git">
          {residentList?.Popular?.map((el, id) => (
            <NavLink key={id} to={`/${lang}/news/${el.slug}`}>
              <div className="popular-col left_one">
                <img className="popular-image" src={el.img} alt={el.alt} />
                <div
                  className="popular_text_block"
                  style={{ padding: "0 0 15px 0" }}
                >
                  <button className="popular_text">{el.cat_title}</button>
                  <h5 className="popular_title wihte_pop">{el.title}</h5>

                  <p className="popular_project">{el.data}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularAdap;
