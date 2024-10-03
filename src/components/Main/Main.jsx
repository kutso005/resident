import React, { useEffect } from "react";
import Popular from "../Section/Popular";
import RealEstate from "../Section/RealEstate";
import LuxuryРoliday from "../Section/LuxuryРoliday";
import Interview from "../Section/Interview";
import Products from "../Section/Products";
import { NavLink } from "react-router-dom";
const Main = ({ residentList, searchInput, banner }) => {

  useEffect(() => {
    document.title = "RESIDENT | Журнал о роскошном образе жизни";
    document.querySelector('meta[name="og:title"]').content =
      "Журнал Resident Magazine | Инсайдерский доступ к роскошному стилю жизни, тенденциям и новостям";
    document.querySelector('meta[name="title"]').content =
      "Журнал Resident Magazine | Инсайдерский доступ к роскошному стилю жизни, тенденциям и новостям";
    document.querySelector('meta[name="keywords"]').content =
      "журнал для резидентов, роскошный стиль жизни, элитная мода, роскошные путешествия, эксклюзивная недвижимость, журнал о стиле жизни, тенденции роскоши, элегантность, изысканность, роскошный дом";
  }, []);

  return (
    <>
      <div className="withe_bg">
        <div>
          <Popular residentList={residentList} searchInput={searchInput} />
          <div className="class_baner">
            <div className="containers">
              {banner?.Popular ? (
                <NavLink
                  to={banner?.Popular ? banner?.Popular?.url : ""}
                  target="_blank"
                  className="banner-nodbuk"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={banner?.Popular ? banner?.Popular?.pc_image : ""}
                    alt=""
                  />
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <NavLink
              to={banner?.Popular ? banner?.Popular?.url : ""}
              target="_blank"
              className="banner-mobile"
            >
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="banner-images" 
                src={banner?.Popular ? banner?.Popular?.mb_img : ""}
                alt=""
              />
            </NavLink>
          </div>
          <RealEstate residentList={residentList} searchInput={searchInput} />
          <div className="class_baner">
            <div className="containers">
              {banner?.RealEstate ? (
                <NavLink
                  to={banner?.RealEstate ? banner?.RealEstate?.url : ""}
                  target="_blank"
                  className="banner-nodbuk"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={banner?.RealEstate ? banner?.RealEstate?.pc_image : ""}
                    alt=""
                  />
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <NavLink
              to={banner?.RealEstate ? banner?.RealEstate?.url : ""}
              target="_blank"
              className="banner-mobile"
            >
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="banner-images"
                src={banner?.RealEstate ? banner?.RealEstate?.mb_img : ""}
                alt=""
              />
            </NavLink>
          </div>
          <LuxuryРoliday
            residentList={residentList}
            searchInput={searchInput}
          />
          <div className="class_baner">
            <div className="containers">
              {banner?.Interviews ? (
                <NavLink
                  to={banner?.Interviews ? banner?.Interviews?.url : ""}
                  target="_blank"
                  className="banner-nodbuk"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={banner?.Interviews ? banner?.Interviews?.pc_image : ""}
                    alt=""
                  />
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <NavLink
              to={banner?.Interviews ? banner?.Interviews?.url : ""}
              target="_blank"
              className="banner-mobile"
            >
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="banner-images"
                src={banner?.Interviews ? banner?.Interviews?.mb_img : ""}
                alt=""
              />
            </NavLink>
          </div>
          <Interview residentList={residentList} searchInput={searchInput} />
          <div className="class_baner">
            <div className="containers">
              {banner?.LuxuryVacation ? (
                <NavLink
                  to={banner?.LuxuryVacation ? banner?.LuxuryVacation?.url : ""}
                  target="_blank"
                  className="banner-nodbuk"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="banner-images"
                    src={
                      banner?.LuxuryVacation
                        ? banner?.LuxuryVacation?.pc_image
                        : ""
                    }
                    alt=""
                  />
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <NavLink
              to={banner?.LuxuryVacation ? banner?.LuxuryVacation?.url : ""}
              target="_blank"
              className="banner-mobile"
            >
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="banner-images"
                src={
                  banner?.LuxuryVacation ? banner?.LuxuryVacation?.mb_img : ""
                }
                alt=""
              />
            </NavLink>
          </div>
          <Products residentList={residentList} searchInput={searchInput} />
        </div>
      </div>
    </>
  );
};

export default Main;
