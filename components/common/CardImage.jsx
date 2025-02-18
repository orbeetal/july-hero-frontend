"use client";

import Image from "next/image";
import { useState } from "react";

function CardImage({ src, alt }) {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow && (
        <Image
          src={src}
          alt={alt}
          fill
          className="aspect-square w-full object-cover transition-all group-hover:scale-105"
          priority
          sizes="100vw"
          onError={() => setIsShow(false)} // Set fallback image on error
        />
      )}
    </>
  );
}

export default CardImage;
