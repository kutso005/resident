import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../api/api";

const HeaderDerail = ({ searchInput }) => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    api.get(`/${lang}/sub-cat/${slug}`).then((response) => {
      setData(response.data);
    });
  }, []);
  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return;
    }

    data?.map((el) => {
      if (el) {
        document.title = "Resident - " + el.cat_title;
        const content = "Resident - " + el.cat_title;
        document.querySelector('meta[name="og:title"]').content = el.cat_title;
        document.querySelector('meta[name="og:image"]').content = el.img;
        document.querySelector('meta[name="title"]').content = el.cat_title;
        document.querySelector(`meta[name="og:description"]`).content = content;
        document.querySelector(`meta[name="description"]`).content = content;
        document.querySelector('meta[name="keywords"]').content =
          content && content.replaceAll(" ", ", ");
      }
    });
  }, [data]);
  return (
    <div className="container interview_one_higth mt-5">
      {data?.slice(0, 1).map((el) => (
        <h1 className="title mb-2">
          {el.cat_title}
        </h1>
      ))}
      <div className="popular_links mb-3" />
      <div className="row">
        {data
          ?.filter((el) => {
            return el.title.toLowerCase().includes(searchInput.toLowerCase());
          })
          .map((el) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={el.slug}>
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
  );
};

export default HeaderDerail;
