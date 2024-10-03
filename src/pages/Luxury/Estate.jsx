import React from "react";
import { dataOne } from "../../data/data";
const Estate = () => {
  return (
    <div style={{ margin: "40px 0 120px 0" }}>
      <div className="git_flex_git">
        {dataOne.map((el) => (
          <div className="git_img">
            <img className="git_img_one" src={el.img} alt="" />
            <div className="cntnt_hldr">
              <p className="one_text">{el.text}</p>
              <h5 className="popular_title one_title">{el.title}</h5>
              <p className="popular_project one_project">{el.project}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estate;
