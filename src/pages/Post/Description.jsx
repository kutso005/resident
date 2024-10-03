import React, { useEffect } from "react";

const Description = ({ data }) => {
  useEffect(() => {
    if (data) {
      data?.detail?.map((el, index) => {
        if (el && el.description) {
          const content = el.description
            .replace(/<[^>]*>?/gm, "")
            .substr(0, 350);
          document.querySelector(`meta[name="og:description"]`).content =
            content;
          document.querySelector(`meta[name="description"]`).content = content;
        }
      });
    }
  }, [data]);

  return (
    <div>
      {data?.detail?.map((el, index) => (
        <div
          className="description_el"
          key={index}
          dangerouslySetInnerHTML={{ __html: el.description }}
        ></div>
      ))}
    </div>
  );
};

export default Description;
