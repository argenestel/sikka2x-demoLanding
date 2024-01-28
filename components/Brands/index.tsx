"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";

const Brands = () => {
  return (
 
<section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
  <SectionHeader
    headerInfo={{
      title: `Powered By`,
      subtitle: ``,
      description: ``,
    }}
  />
  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-7.5 lg:gap-12.5 xl:gap-29 justify-center items-center">
      {brandData.map((brand, key) => (
        <React.Suspense fallback={<a>Loading...</a>}>
          <SingleBrand brand={brand} key={key}/>
        </React.Suspense>
      ))}
    </div>
  </div>
</section>
  );
};

export default Brands;
