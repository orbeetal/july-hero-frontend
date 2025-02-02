import React from "react";

function BannerText({ htmlContent }) {
  return (
    <div
      className="text-white font-bold leading-10 sm:leading-[50px] md:leading-[60px] xl:leading-[70px] text-2xl sm:text-3xl md:text-4xl xl:text-5xl"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default BannerText;
