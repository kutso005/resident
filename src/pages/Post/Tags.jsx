import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Tags = ({ data }) => {
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return;
    }
    data?.map((el) => {
      if (el) {
        const content = el.title;
        document.title = el.cat_title;
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
    <div>
      {data?.tags === null ? (
        ""
      ) : (
        <div>
          <h6 className="title deteil_title deteils_title_el mb-3">теги:</h6>
          <div>
            <NavLink
              to={`/${lang}/tags/${data?.tags}`}
              onClick={() => localStorage.setItem("tags", data?.tags)}
              className="tags"
            >
              <span className="tag">{data?.tags}</span>
            </NavLink>
          </div>
        </div>
      )}
      {data?.exception === null ? (
        ""
      ) : (
        <div>
          {data?.exception?.map((el, index) => (
            <div key={index}>
              <h6 className="title deteil_title deteils_title_el">файл</h6>
              <a
                href={`/download/${el.file}`}
                download
                style={{ cursor: "pointer" }}
                className="tags click_daown"
              >
                {el.title === null ? el.file : el.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tags;
