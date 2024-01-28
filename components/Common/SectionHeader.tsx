// Import required libraries
import React from "react";
import { motion } from "framer-motion";

// Define type for header information
type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

// SectionHeader component
const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  // Destructure props
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <div className="text-center mx-auto">
        <div className="bg-zumthor dark:bg-gradient-to-r dark:from-sikkaGold2 dark:via-sikkaGold3 dark:to-sikkaGold dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
          <h4 className="text-sectiontitle text-black dark:text-sikkaMaroon font-bold">
            {title}
          </h4>
        </div>
        <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 text-white lg:w-3/5 xl:w-[46%]">{description}</p>
      </div> */}
    </>
  );
};

export default SectionHeader;
