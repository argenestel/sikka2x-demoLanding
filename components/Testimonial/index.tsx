"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

import { testimonials } from "./testimonialData";
import StarRating from "./Starrating";

const Testimonial = () => {
  return (

      <section className="py-8 dark:bg-gradient-to-b from-sikkaMaroonGrad via-sikkaMaroon to-transparent">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 ">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `Reviews`,
                subtitle: `Hear from Our`,
                description: ``,
              }}
            />
          </div>

          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
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
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          {/* <!-- Slider main container --> */}

          <div className="swiper testimonial-01 pb-22.5 mb-20">
          <div className="flex md:flex-row flex-col justify-center items-center">
            {/* Existing rating image */}
            <div className="md:w-1/2">
              <div className="justify-center pb-4 rounded-sm">
                <Image 
                  src="/images/about/starRating.png"
                  alt="starRating"
                  width={200}
                  height={200}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            </div>
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                    <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                      <div>
                        
                        <h4 className="flex text-black dark:text-white text-metatitle3 mb-1.5">
                        <Image
                        width={40}
                        height={40}
                        className=" flex-auto"
                        src={`./images/user/user-01.svg`}
                        alt="User"
                      />
                          <div className="ml-2 mt-2">{testimonial.user}</div> 
                        </h4>
                        {/* <p>{testimonial.role}</p> */}
                        
                      </div>
                      <div className="mt-2">
                      <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
          
                    <p>{testimonial.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
 
  );
};

export default Testimonial;
