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
      className="animate_top relative mx-h-full flex flex-col items-center"
    >
      <div className="  flex items-center justify-center">
        <Image
          className="opacity-100 transition-all duration-300 hover:opacity-90 dark:hidden"
          src={image}
          alt={name}
          width={60}
          height={60}
        />
        <Image
          className="hidden opacity-100 transition-all  duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          width={60}
          height={60}
        />
      </div>
      <div className="text-xs pt-2 text-white text-center w-full">
        {desc}
      </div>
    </motion.a>
  );
};

export default SingleFeature;
