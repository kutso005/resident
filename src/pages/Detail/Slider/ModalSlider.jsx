import React from "react";
import Slider from "react-slick";

const ModalSlider = ({ data, setModal, modal }) => {
  const baseUrl = data?.slider?.map((el) => el.image);
  console.log(baseUrl);
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
    <div className="slider_modal" onClick={() => setModal(!modal)}>
      <div onClick={(e) => e.stopPropagation()}>
        <Slider {...settings}>
          {data?.slider &&
            Array.isArray(data?.slider) &&
            data?.slider.map((el) => (
              <div key={el.image} className="slider_img">
                <img
                  style={{ cursor: "pointer" }}
                  src={el.image}
                  alt={el.alt}
                  title={el.img_title}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModalSlider;
