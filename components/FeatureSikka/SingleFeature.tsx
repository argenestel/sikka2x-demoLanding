import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { Feature } from "./brandData";

const SingleFeature = ({ brand }: { brand: Feature }) => {
  const { image, href, name, imageLight, id, desc } = brand;

  return (
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
      className="animate_top relative mx-h-full h-[60px] mx-w-full w-[60px] flex flex-col items-center"
      style={{ marginBottom: "50px" }} // Adjust the margin-bottom as needed
    >
      <div className="m-4">
        <Image
          className="opacity-100 transition-all duration-300 hover:opacity-90 dark:hidden"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="hidden opacity-100 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        />
      </div>
      <div className="m-2 text-xs  pt-4 text-white text-center">{desc}</div>
    </motion.a>
  );
};

export default SingleFeature;
