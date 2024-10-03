import React, {  useState } from "react";
import "../../style.css/App.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../../style.css/animation.css";
import Search from "./Search";
import Burger from "./Burger";
import i18n from "../../i18next/I18next";
import logo from "../../img/Logo_resident_text.svg";

const Head = ({ searchInput, setSearchInput, header }) => {
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lang = localStorage.getItem("lang");

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLanguage = (translation) => {
    i18n.changeLanguage(translation);
  };

  return (
    <div className={scrolled ? "head_scrolled" : "head"}>
      <div className="container">
        <div className="burger_block_menu">
          <Burger header={header} setSearchInput={setSearchInput} />
        </div>
        <div className="block_flex">
          <NavLink to={"/" + lang}>
          <div>
            <p class="sectionSubTitle ">
              ALIKA
              <span class=" shadowText "
                > ALIKA</span>
            </p>
          </div>  
          </NavLink>
          {search === false ? (
            <div className="center">
              {header?.map((el) => (
                <div className="to_hover" key={el.slug}>
                  <div className="link_to">
                    <a
                      href={`/${lang}/categories/${el.slug}`}
                      className="link_text"
                      onClick={() => localStorage.setItem("banner", el.slug)}
                    >
                      <p> {el.title}</p>
                    </a>
                    {el.status === null ? (
                      ""
                    ) : (
                      <IoIosArrowDown
                        size={16}
                        color="#000000"
                        className="left"
                      />
                    )}
                    {el.status === null ? (
                      ""
                    ) : (
                      <div className="hover_head" style={{ padding: "20px" }}>
                        {el?.subcategory?.map((el) => (
                          <a
                            key={el.slug}
                            href={`/${lang}/category/${el.slug}`}
                            className="link_text"
                          >
                            {el.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="to_hover">
                <NavLink to={`/${lang}/contacts`} className="link_text">
                  <p>Контакты</p>
                </NavLink>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex align-items-center gap-2">
            <div>
              <CiSearch
                size={25}
                color="#000000"
                onClick={() => setSearch(!search)}
              />
            </div>
            <div className="i18n d-flex">
              <a href="/kg" onClick={() => handleLanguage("kg")}>
                <button
                  onClick={() =>
                    handleLanguage("kg") || localStorage.setItem("lang", "kg")
                  }
                  className={lang === "kg" ? "activeKG" : ""}
                >
                  kg
                </button>
              </a>
              <a href="/ru" onClick={() => handleLanguage("ru")}>
                <button
                  onClick={() => {
                    handleLanguage("ru");
                    localStorage.setItem("lang", "ru");
                  }}
                  className={lang === "ru" ? "activeKG" : ""}
                >
                  RU
                </button>
              </a>
            </div>
          </div>
          {search && (
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setSearch={setSearch}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
