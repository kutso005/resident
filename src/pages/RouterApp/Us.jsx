import React from "react";
import banner from "../../img/banner.png";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";
import four from "../../img/4.png";
const Us = () => {
  return (
    <div className="container  interview_one_higth">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <button className="popular_text mt-5">о нас</button>
        <h1 className="us">
          Resident - первый журнал <br /> о строительстве в кыргызстане
        </h1>
        <img className="img_banner" src={banner} alt="" />
      </div>
      <h1 className="title" style={{ margin: "120px 0 10px 0" }}>
        о компании
      </h1>
      <div className="popular_links" />
      <div className="d-flex align-items-center justify-content-between mt-4">
        <div>
          <img src={one} alt="" />
          <div className="d-flex align-items-center justify-content-between mt-4">
            <img src={two} alt="" />
            <img src={three} alt="" />
          </div>
        </div>
        <div className="p_mir">
          <p>
            Мы видим свое предназначение в том, чтобы объединить мир через
            истинное кыргызское гостеприимство и национальную культуру. Через
            улучшение качества сервиса, обеспечивать процветание компании и
            сотрудников.
          </p>
          <p>
            Главная цель - превзойти ожидания наших гостей. Орион - больше, чем
            отель! Мы видим свое предназначение в том, чтобы объединить мир
            через истинное кыргызское гостеприимство и национальную культуру.
            Через улучшение качества сервиса, обеспечивать процветание компании
            и сотрудников.
          </p>
          <div className="mt-4">
            <img className="mt-5 ms-4" src={four} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
