import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <div
        className="animate_top block relative h-10 mx-w-full w-[98px]"
      >
        <Image
          className="opacity-100 transition-all duration-300 hover:opacity-90"
          src={imageLight}
          alt={name}
          fill
          
        />

      </div>
    </>
  );
};

export default SingleBrand;
