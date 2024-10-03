import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import Acomment from "../Post/Acomment";
import NewsSlider from "./Slider/NewsSlider";
import Tags from "../Post/Tags";
import Description from "../Post/Description";
import MainBlock from "../Post/MainBlock";
import Also from "../Post/Also";
import i18next from "i18next";

const AllDetail = ({ searchInput, setSearchInput }) => {
  const [data, setData] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    api.get(`/post/${slug}/`).then((response) => {
      setData(response.data);
    });
  }, [slug]);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18next.changeLanguage(savedLang);
    }
  }, []);
  useEffect(() => {
    if (data) {
      document.title = data.title;
      document.querySelector('meta[name="og:title"]').content = data.title;
      document.querySelector('meta[name="og:image"]').content = data.img;
      document.querySelector('meta[name="title"]').content = data.title;
      data.full_desc && data.full_desc.replace(/<[^>]*>?/gm, "").substr(0, 350);
      document.querySelector('meta[name="keywords"]').content =
        data.title && data.title.replaceAll(" ", ", ");
    }
  }, [data]);
  return (
    <div>
      <div className="details-popular">
        <div className="container">
          {data && (
            <div className="row">
              <div className="col-md-9 description_class">
                <MainBlock data={data} />
                <Description data={data} />
                <NewsSlider data={data} />
                <Tags data={data} setSearchInput={setSearchInput} />
                <Acomment data={data} />
              </div>
              <div className="col-md-3">
                <Also data={data} searchInput={searchInput} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDetail;
