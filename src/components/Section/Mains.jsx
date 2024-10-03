import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { get } from "../../api/api";
import { NavLink } from "react-router-dom";

const Mains = ({ searchInput }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  const [leftResidents, setLeftResidents] = useState([]);
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const residents = await get.getSlider();
        setLeftResidents(residents);
      } catch (error) {
        console.error("Ошибка при получении данных для слайдера:", error);
      }
    };
    fetchData();
  }, []);

  const handleSliderItemClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <div className="big_slider">
        <Slider {...settings}>
          {leftResidents
            .filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((el, indx) => (
              <div
                className="slider_img"
                key={indx}
                onClick={() => handleSliderItemClick(el.url)}
              >
                <img src={el.img} alt={el.title} />
                <div className="slider_box_shadow" />
                <div className="slider-test_text">
                  <h6 className="create" style={{ width: "60%" }}>
                    {el.title}
                  </h6>
                  <p className="project mt-3 ">{el.description}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mains;
