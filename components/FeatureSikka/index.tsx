"use client";
import React from "react";
import SingleBrand from "./SingleFeature";
import brandData from "./brandData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const FeatureSikka = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">

        <div className="mx-auto max-w-c-1390 px-0 md:px-8 2xl:px-0 text-center pb-4 font-bold text-white">
          Why Sikka2x?
        </div>

        <div className="flex mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <Swiper
              spaceBetween={10}
              slidesPerView={6}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              modules={[Autoplay]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 6,
                },
              }}
            >
            {brandData.map((brand, key) => (
              <SwiperSlide key={key}>
              <SingleBrand brand={brand} key={key} />
              </SwiperSlide>
            ))}
              
            </Swiper>

        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default FeatureSikka;
