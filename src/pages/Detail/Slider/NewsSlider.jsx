import React, { useState } from "react";
import Slider from "react-slick";
import ModalSlider from "./ModalSlider";

const NewsSlider = ({ data }) => {
  const [modal, setModal] = useState(false);
  const baseUrl = data?.slider?.map((el) => el.image);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="banner_url_img" src={`${baseUrl[i]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.slider &&
          Array.isArray(data?.slider) &&
          data?.slider.map((el) => (
            <div
              key={el.image}
              className="slider_img"
              onClick={() => setModal(!modal)}
            >
              <img
                style={{ cursor: "pointer" }}
                src={el.image}
                alt={el.alt}
                title={el.img_title}
              />
              <div
                className="slider_hover_block"
                onClick={() => setModal(!modal)}
              />
            </div>
          ))}
      </Slider>
      <div>
        {modal && <ModalSlider data={data} setModal={setModal} modal={modal} />}
      </div>
    </div>
  );
};

export default NewsSlider;
