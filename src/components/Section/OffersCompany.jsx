import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
const OffersCompany = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang") || "ru";
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8,
          initialSlide: 1.8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {Array.isArray(residentList?.Offer_from_the_company) &&
        residentList?.Offer_from_the_company?.length > 0 && (
          <div className="row slider_row">
            <div
              className="col-lg-2 col-md-3 col-sm-4"
              style={{ marginBottom: "20px" }}
            >
              {Array.isArray(residentList?.Offer_from_the_company) &&
                residentList?.Offer_from_the_company?.slice(0, 1).map((el) => (
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h1
                        className="title"
                        style={{ margin: "120px 0 10px 0" }}
                      >
                        Предложения от компании
                      </h1>
                    </div>
                    <div className="popular_links" />
                  </div>
                ))}
            </div>
            <div
              className="col-lg-10 col-md-9 col-sm-8 slider_media"
              style={{
                position: "absolute",
                right: "0",
                width: "75%",
                margin: "120px 0 0 0",
              }}
            >
              <Slider {...settings}>
                {residentList?.Offer_from_the_company?.filter((el) => {
                  return el.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                }).length >= 4
                  ? residentList?.Offer_from_the_company?.filter((el) => {
                      return el.title
                        .toLowerCase()
                        .includes(searchInput.toLowerCase());
                    }).map((el) => (
                      <NavLink
                        className="a"
                        key={el.slug}
                        to={`/${lang}/news/${el.slug}`}
                      >
                        <img className="img-slider" src={el.img} alt="" />
                      </NavLink>
                    ))
                  : null}
              </Slider>
            </div>
          </div>
        )}
    </>
  );
};

export default OffersCompany;
