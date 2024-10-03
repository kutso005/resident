import React from "react";
import { GoEye } from "react-icons/go";
const MainBlock = ({ data }) => {
  return (
    <div>
      <h1 className="title mb-2" >
        {data.title}
      </h1>
      <div className="d-flex align-items-center flex-wrap">
        <button className="popular_text" style={{ margin: "0px 15px 0 0" }}>
          {data.cat_title}
        </button>
        <span className="large" style={{ margin: "0px 15px 0 0" }}>
          {data?.user}
        </span>
        <span className="popular_project" style={{ margin: "0px 15px 0 0" }}>
          {data.created_at}
        </span>
        <span
          className="popular_project d-flex align-items-center top_slip "
          style={{ margin: "0" }}
        >
          <GoEye size={18} style={{ margin: "0 5px 0 0" }} /> {data.views}
        </span>
      </div>
      <img
        className="img_deteails"
        style={{ margin: "15px 0 30px 0" }}
        src={data.img}
        alt="baseUrl"
      />
    </div>
  );
};

export default MainBlock;
