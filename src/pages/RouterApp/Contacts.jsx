import React from "react";
import contacts from "../../img/interview.png";
import fec from "../../img/Black.svg";
import twit from "../../img/соцсети.svg";
import insta from "../../img/соцсети (1).svg";
import tiktiok from "../../img/соцсети (2).svg";

const Contacts = () => {
  return (
    <div className="container">
      <div className="contacts_flex">
        <img src={contacts} className="img" alt="" />
        <div className="contacts">
          <button style={{ margin: "0 0 20px 0" }} className="popular_text">
            contacts
          </button>
          <h1 className="title" style={{ color: "#fff", margin: "0 0 10px 0" }}>
          г. Бишкек, Проспект  Чынгыза Айтматова  27
          </h1>
          <p className="contacts_project text-contant">
            График работы: с 08:00 до 20:00
          </p>
          <a href="mailto:Alika.Amankulova9@gmail.com">Alika.Amankulova9@gmail.com</a>
          <a href="mailto:Alika.Amankulova9@gmail.com">Alika.Amankulova9@gmail.com</a>
          <a href="mailto:Alika.Amankulova9@gmail.com">Alika.Amankulova9@gmail.com</a>
          <div className="margin_top">
            <div className="contacts_flex_text">
              <p className="contacts_project">Почтовый индекс:</p>
              <p className="contacts_time">00000</p>
            </div>
            <div className="contacts_flex_text">
              <p className="contacts_project">Владелец и издатель:</p>
              <p className="contacts_time">
                Amankulova Altynai
              </p>
            </div>
            <div className="contacts_flex_text">
              <p className="contacts_project">Регистрационный номер:</p>
              <p className="contacts_time">0000</p>
            </div>
            <div className="contacts_flex_text">
              <p className="contacts_project">Свидетельство:</p>
              <p className="contacts_time">#00000</p>
            </div>
          </div>
          <div className="d-flex  align-items-center justify-content-between flex-wrap margin_top">
            <div className="d-flex align-items-center images_contact ">
              <img className="fec" src={fec} alt="" />
              <img src={twit} alt="" />
              <img src={insta} alt="" />
              <img src={tiktiok} alt="" />
            </div>
            <p className="contacts_project">
              Журнал зарегистрирован в Министерстве юстиции КР
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
