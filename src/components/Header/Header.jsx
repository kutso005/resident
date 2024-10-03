import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ header, banner }) => {
  return (
    <div className="header_section">
      <div>
        {banner?.Main ? (
          <NavLink
            to={banner?.Main ? banner?.Main?.url : ""}
            target="_blank"
            className="banner-nodbuk"
          >
            <img
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={banner?.Main ? banner?.Main?.pc_image : ""}
              alt=""
            />
          </NavLink>
        ) : (
          ""
        )}

        <NavLink
          to={banner?.Main ? banner?.Main?.url : ""}
          target="_blank"
          className="banner-mobile"
        >
          <img
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={banner?.Main ? banner?.Main?.mb_img : ""}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
