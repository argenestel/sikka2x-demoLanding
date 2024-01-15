"use client"
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { testimonials } from "./testimonialData";
import StarRating from "./Starrating";

// Testimonial component
const Testimonial = () => {
  return (
    <section className="py-8 dark:bg-gradient-to-b from-transparent via-sikkaMaroon to-transparent">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: "Reviews",
              subtitle: "Our Trusted Users",
              description: "What our users say about us",
            }}
          />
        </div>
        {/* Slider Container */}
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-5 xl:mt-10">
          <div className="swiper testimonial-01 pb-4 mb-8">
            <div className="flex md:flex-row flex-col justify-center items-center">
              {/* Star Rating Image */}
              <div className="md:w-1/2">
                <div className="justify-center pb-4 rounded-sm">
                  <Image
                    src="/images/about/starRating.png"
                    alt="starRating"
                    width={200}
                    height={200}
                    className="rounded-lg w-full md:hidden xl:hidden"
                  />
                </div>
              </div>
            </div>
            {/* Testimonial Swiper */}
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
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {/* Testimonial Slides */}
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                    <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                      <div>
                        <h4 className="flex text-black dark:text-white text-metatitle3 mb-1.5">
                          <Image
                            width={40}
                            height={40}
                            className="flex-auto"
                            src={`./images/user/user-01.svg`}
                            alt="User"
                          />
                          <div className="ml-2 mt-2">{testimonial.user}</div>
                        </h4>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
