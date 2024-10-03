import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
const Products = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div className="container">
      <div className="popular-block-back class-top mb-5">
        {Array.isArray(residentList?.Products) &&
          residentList?.Products?.slice(0, 1).map((el) => (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h1 className="title">продукты</h1>
                <GoArrowUpRight size={26} />
              </div>
              <div className="popular_links" />
            </div>
          ))}
        <div className="row">
          <div className="col-md-6 col-12 banner-mobile">
            <div className="row" style={{ margin: "0 0 0 0" }}>
              {residentList?.Products?.filter((el) => {
                return el.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              }).map(
                (el) =>
                  el.is_main == 2 && (
                    <div className="col-md-6 col-12">
                      <NavLink
                        className="a"
                        key={el.slug}
                        to={`/${lang}/news/${el.slug}`}
                      >
                        <div
                          className="popular-col popular_col left_one"
                          style={{ margin: "0 0 0 0" }}
                        >
                          <div className="cntnt_hldr">
                            <p className="one_text">{el.cat_title}</p>
                            <h5 className="popular_title one_title mt-2">
                              {el.title}d
                            </h5>
                            <p className="popular_project one_project mt-2">
                              {el.created_at}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-md-6 col-12">
            {residentList?.Products?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            }).map(
              (el) =>
                el.is_main == 1 && (
                  <div>
                    <NavLink
                      className="a"
                      key={el.slug}
                      to={`/${lang}/news/${el.slug}`}
                    >
                      <div className="center_one" style={{ cursor: "pointer" }}>
                        <img
                          className="popular_img_big big_img"
                          src={el.img}
                          alt={el.alt}
                        />
                        <div className="popular_text_block">
                          <button className="popular_text">
                            {el.cat_title}
                          </button>
                          <h5 className="popular_title size_text black-text mt-2">
                            {el.title}
                          </h5>
                          <p className="popular_project mt-2">
                            {el.created_at}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                )
            )}
          </div>
          <div className="col-md-6 col-12 banner-nodbuk">
            <div className="row" style={{ margin: "0 0 0 0" }}>
              {residentList?.Products?.filter((el) => {
                return el.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              }).map(
                (el) =>
                  el.is_main == 2 && (
                    <div className="col-md-6 col-12 mb-5">
                      <NavLink
                        className="a"
                        key={el.slug}
                        to={`/${lang}/news/${el.slug}`}
                      >
                        <div
                          className="popular-col popular_col left_one"
                          style={{ margin: "0 0 0 0" }}
                        >
                          <div className="cntnt_hldr">
                            <p className="one_text">{el.cat_title}</p>
                            <h5 className="popular_title one_title mt-2">
                              {el.title}d
                            </h5>
                            <p className="popular_project one_project mt-2">
                              {el.created_at}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {residentList?.Products?.filter((el) => {
            return el.title.toLowerCase().includes(searchInput.toLowerCase());
          }).map(
            (el) =>
              el.is_main == 3 && (
                <div className="col-lg-3 col-md-4" key={el.slug}>
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
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
