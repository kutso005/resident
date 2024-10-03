import React from "react";
import { NavLink } from "react-router-dom";
const Popular = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang");

  return (
    <div className="container">
      <div className="popular-block-back class-top">
        <div className="adap_none">
          {Array.isArray(residentList?.Popular) &&
            residentList?.Popular?.slice(0, 1).map((el, index) => (
              <div key={index}>
                <div>
                  <h1 className="title mb-2">Популярные</h1>
                  <div className="popular_links" />
                </div>
              </div>
            ))}
          <div className="row">
            {residentList?.Popular?.slice(0, 4)
              .filter((el) => {
                return el.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
              .map((el) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={el.slug}>
                  <NavLink to={`/${lang}/news/${el.slug}`}>
                    <div className="popular-col right_one">
                      <img className="popular_img" src={el.img} alt={el.alt} />
                      <div className="mt-3">
                        <p className="one_text">{el.cat_title}</p>
                        <h5 className="popular_title mt-2">{el.title}</h5>
                        <p className="popular_project mt-2">{el.created_at}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
