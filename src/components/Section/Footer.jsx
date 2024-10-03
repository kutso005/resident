import React, { useEffect, useState } from "react";
import "../../style.css/main.css";
import logo from "../../img/Logo_resident_text.svg";
import fec from "../../img/Black.svg";
import twit from "../../img/Shape.png";
import insta from "../../img/Black.png";
import tiktiok from "../../img/Union.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { get } from "../../api/api";

const Footer = ({ residentList }) => {
  const { t, i18n } = useTranslation();
  const [header, setHeader] = useState([]);
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    const fetchData = async () => {
      const residents = await get.getHeader();
      setHeader(residents);
    };
    fetchData();
  }, []);
  return (
    <div
      className={
        residentList?.Offer_from_the_company?.length > 0 ? "footer-s" : "footer"
      }
    >
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ padding: "40px 0 20px 0 " }}
        >
        <div>
            <p class="sectionSubTitle_footer ">
              ALIKA
              <span class=" shadowText_footer  "
                > ALIKA</span>
            </p>
          </div> 
          <div className="d-flex align-items-center gap-2">
            <a
              href="https://www.facebook.com/vikram.paul.mon.007"
              target="_blank"
              className="clas-footer"
            >
              <img src={fec} alt="" />
            </a>
            <a
              href="https://twitter.com/worldofvicky007"
              target="_blank"
              className="clas-footer"
            >
              <img src={twit} alt="" />
            </a>
            <a
              href="https://www.instagram.com/worldofvicky007/"
              target="_blank"
              className="clas-footer"
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="https://vt.tiktok.com/ZSNtUqMk9/"
              target="_blank"
              className="clas-footer"
            >
              <img src={tiktiok} alt="" />
            </a>
          </div>
        </div>
        <div className="popular_links" />
        <div className="all_footet row" style={{ padding: "20px 0 20px 0 " }}>
          <div className="with_prosent col-lg-3 col-md-6 col-sm-6 col-12">
            <p className="project">{t("key0")}</p>
          </div>
          <div className="with_prosent end_one  columns col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="d-flex flex-column ">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                {t("key1")}
              </h6>
              {header.map((data) => {
                return (
                  <NavLink
                    to={`/${lang}/categories/${data.slug}`}
                    className="footer_a"
                    key={data.id}
                  >
                    {data.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="with_prosent end columns col-lg-3 col-md-6 col-sm-6 col-12">
            <div className=" d-flex flex-column">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                {t("key7")}
              </h6>
              <NavLink to={`/${lang}/about-us`} className="footer_a">
                {t("key8")}
              </NavLink>
              <NavLink to={`/${lang}/contacts`} className="footer_a">
                {t("key9")}
              </NavLink>
            </div>
          </div>
          <div className="with_prosent end column col-lg-3 col-md-6 col-sm-6 col-12  ">
            <div className="d-flex flex-column ">
              <h6 className="popular_title " style={{ margin: "0 0 10px 0" }}>
                г. Бишкек, Проспект. <br /> Чынгыза Айтматова  27
              </h6>
              <NavLink to="#" className="footer_a">
                {t("key10")}
              </NavLink>
              <a
                href="mailto:journal.resident.kg@gmail.com"
                className="footer_a as_bas"
              >
                Alika.Amankulova.@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <p
            className="project"
            style={{ color: " rgba(151, 151, 151, 1)", fontSize: "12px" }}
          >
            Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
