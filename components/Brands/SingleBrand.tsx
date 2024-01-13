import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top block relative h-10 mx-w-full w-[98px]"
      >
        <Image
          className="opacity-100 transition-all duration-300 hover:opacity-90 dark:hidden"
          src={image}
          alt={name}
          fill
          
        />

      </motion.a>
    </>
  );
};

export default SingleBrand;
