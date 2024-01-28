// SingleBrand.jsx

import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { imageLight, name } = brand;

  return (
    <div className="animate_top block relative h-10 mx-w-full w-[98px]">
      <Image
        className="opacity-100 transition-all duration-300 hover:opacity-90"
        src={imageLight}
        alt={name}
        layout="responsive"
        width={98}
        height={98}
        loading="lazy"
        placeholder="empty"
      />
    </div>
  );
};

export default SingleBrand;
