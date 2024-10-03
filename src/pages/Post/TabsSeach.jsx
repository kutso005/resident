import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";

const TabsSeach = ({ searchInput }) => {
  const lang = localStorage.getItem("lang");
  const [residentList, setResidentList] = useState([]);
  useEffect(() => {
    if (lang) {
      api
        .get(`/${lang}/list?search=${localStorage.getItem("tags")}`)
        .then((response) => {
          setResidentList(response.data);
        });
    }
  }, [lang]);
  return (
    <div className="container interview_one_higth mt-5">
      <div className="git_flex_git">
        {residentList?.Nedvizhimost?.filter((el) => {
          return el.title
            .toLowerCase()
            .includes(localStorage.getItem("tags").toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div className="git_img">
              <img className="git_img_two" src={el.img} alt="" />
              <div className="cntnt_hldr">
                <p className="one_text">{el.cat_title}</p>
                <h5 className="popular_title one_title">{el.title}</h5>
                <p className="popular_project one_project">{el.updated_at}</p>
              </div>
            </div>
          </NavLink>
        ))}
        {residentList?.Products?.filter((el) => {
          return el.title
            .toLowerCase()
            .includes(localStorage.getItem("tags").toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div className="git_img">
              <img className="git_img_two" src={el.img} alt="" />
              <div className="cntnt_hldr">
                <p className="one_text">{el.cat_title}</p>
                <h5 className="popular_title one_title">{el.title}</h5>
                <p className="popular_project one_project">{el.updated_at}</p>
              </div>
            </div>
          </NavLink>
        ))}
        {residentList?.CompanyOffer?.filter((el) => {
          return el.title
            .toLowerCase()
            .includes(localStorage.getItem("tags").toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div className="git_img">
              <img className="git_img_two" src={el.img} alt="" />
              <div className="cntnt_hldr">
                <p className="one_text">{el.cat_title}</p>
                <h5 className="popular_title one_title">{el.title}</h5>
                <p className="popular_project one_project">{el.updated_at}</p>
              </div>
            </div>
          </NavLink>
        ))}
        {residentList?.Interviews?.filter((el) => {
          return el.title
            .toLowerCase()
            .includes(localStorage.getItem("tags").toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div className="git_img">
              <img className="git_img_two" src={el.img} alt="" />
              <div className="cntnt_hldr">
                <p className="one_text">{el.cat_title}</p>
                <h5 className="popular_title one_title">{el.title}</h5>
                <p className="popular_project one_project">{el.updated_at}</p>
              </div>
            </div>
          </NavLink>
        ))}
        {residentList?.Popularnye?.filter((el) => {
          return el.title
            .toLowerCase()
            .includes(localStorage.getItem("tags").toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div className="git_img">
              <img className="git_img_two" src={el.img} alt="" />
              <div className="cntnt_hldr">
                <p className="one_text">{el.cat_title}</p>
                <h5 className="popular_title one_title">{el.title}</h5>
                <p className="popular_project one_project">{el.updated_at}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabsSeach;
