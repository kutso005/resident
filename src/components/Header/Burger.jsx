import React, { useState } from "react";
import logo from "../../img/Logo_resident_text.svg";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import i18n from "../../i18next/I18next";

const Burger = ({ header, setSearchInput }) => {
  const [search, setSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const [click, setClick] = useState("");
  const lang = localStorage.getItem("lang");
  const handleClick = (slug) => {
    if (click === slug) {
      setClick("");
    } else {
      setClick(slug);
    }
  };
  const handleLanguage = (translation) => {
    i18n.changeLanguage(translation);
  };
  return (
    <div className="burger_block">
      {search === false ? (
        <div className="d-flex align-items-center justify-content-between">
          <div
            onClick={() => setBurger(!burger)}
            style={{ cursor: "pointer", background: "#fff", zIndex: "99" }}
          >
            <div className="burder" />
            <div className="burder_one" />
            <div className="burder_two" />
          </div>
          <NavLink to="/">
          <div>
            <p class="sectionSubTitle ">
              ALIKA
              <span class=" shadowText "
                > ALIKA</span>
            </p>
          </div>
          </NavLink>
          <div>
            <div
              style={{
                position: "relative",
                zIndex: "99",
                cursor: "pointer",
              }}
            >
              <CiSearch
                size={35}
                color="#000000"
                onClick={() => setSearch(!search)}
              />
            </div>
            {search && <Search />}
          </div>
        </div>
      ) : (
        <div>
          {search && (
            <Search setSearch={setSearch} setSearchInput={setSearchInput} />
          )}
        </div>
      )}
      <div
        className={
          burger === false ? "burger_block_wight" : "burger_menu_active"
        }
        onClick={() => setBurger(!burger)}
      >
        <div className={burger === true ? "burger_menu_wiate" : "burder_wiate"}>
          <div
            onClick={() => setBurger(!burger)}
            className="d-flex align-items-end justify-content-end"
            style={{ cursor: "pointer", padding: "20px 14px 0 0" }}
          >
            <IoMdClose size={30} />
          </div>
          <div className="mt-3">
            {header?.map((el) => (
              <div
                className="to_hover_one"
                key={el.slug}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="link_to_hover">
                  <div
                    className={
                      click === el.slug
                        ? "d-flex align-items-center justify-content-between between_border"
                        : "d-flex align-items-center justify-content-between between_heaede"
                    }
                  >
                    <a
                      href={`/${lang}/categories/${el.slug}`}
                      className="link_text"
                    >
                      <p> {el.title}</p>
                    </a>
                    {el.status === null ? (
                      ""
                    ) : (
                      <div
                        className="icons_color"
                        onClick={() => handleClick(el.slug)}
                      >
                        <IoIosArrowDown
                          size={22}
                          color="#000000"
                          className={click === el.slug ? "rotate" : "left"}
                        />
                      </div>
                    )}
                  </div>
                  {el.status === null ? (
                    ""
                  ) : (
                    <div
                      className={click === el.slug ? "click" : "hover_head_one"}
                    >
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
          </div>
          <div className="i18n">
            <a
              className="lang-switcher__item"
              href="/kg"
              onClick={() => handleLanguage("kg")}
            >
              <button
                onClick={() =>
                  handleLanguage("kg") || localStorage.setItem("lang", "kg")
                }
                className={lang === "kg" ? "activeKG" : ""}
              >
                kg
              </button>
            </a>
            <a
              className="lang-switcher__item"
              href="/ru"
              onClick={() => handleLanguage("ru")}
            >
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
      </div>
    </div>
  );
};

export default Burger;
