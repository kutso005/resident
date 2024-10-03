import React from "react";
import { NavLink } from "react-router-dom";
const Luxury = ({ residentList }) => {
  const lang = localStorage.getItem("lang");
  return (
    <div id="luxury" className="interview_one_higth">
      <div className="container">
        {residentList?.LuxuryVacation?.slice(0, 1).map((el) => (
          <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
            {el.cat_title}
          </h1>
        ))}
        <div className="popular_links" />
        <div className="git_flex_git">
          {residentList?.LuxuryVacation?.map((el, id) => (
            <NavLink key={id} to={`/${lang}/news/${el.slug}`}>
              <div className="popular-col left_one">
                <img className="popular-image" src={el.img} alt={el.alt} />
                <div
                  className="popular_text_block"
                  style={{ padding: "0 0 15px 0" }}
                >
                  <button className="popular_text">{el.cat_title}</button>
                  <h5 className="popular_title wihte_pop">{el.title}</h5>

                  <p className="popular_project">{el.updated_at}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Luxury;
