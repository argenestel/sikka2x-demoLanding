"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { IoLogoAndroid } from "react-icons/io5";
import { debounce } from 'lodash';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import useWindowDimensions from "../Common/useWindowDimension";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState([16, 9]);

  const OpenModel = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const CloseModel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const placeHolder = [
    { src: "/images/hero/1.svg", width: 1080 , height: 1700 },
    { src: "/images/hero/10.svg", width: 1080, height: 1700 },
  ];

  const aspectRatios = [
    { height: 16, width: 9 },
    { height: 18, width: 9 },
    { height: 19, width: 9 },
    { height: 19.5, width: 9 },
    { height: 20, width: 9 },
    { height: 4, width: 3 },
    { height: 1, width: 1 },
    { height: 9, width: 16 },
    { height: 2, width: 1 },
    { height: 21, width: 9 },
  ];
  const { width, height } = useWindowDimensions();



  // const updateAspectRatio = useCallback(debounce(() => {
  //   const windowWidth = width;
  //   if(windowWidth != undefined){
  //   const chosenAspectRatio = aspectRatios.find(
  //     ratio => windowWidth >= ratio.width * 100
  //   );
  //   if (chosenAspectRatio) {
  //     setAspectRatio([chosenAspectRatio.height, chosenAspectRatio.width]);
  //   }}

   
  // }, 300), []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth >= 768);
  //     updateAspectRatio();
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [updateAspectRatio]);
  if (width && width >= 768) {
  return (
    <section className="pt-0 md:pt-36 xl:pt-36 pb-10 xl:pb-25 overflow-hidden dark:shadow-none dark:bg-gradient-to-b dark:from-sikkaMaroon dark:via-sikkaMaroonGrad dark:to-transparent">

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5"></h4>
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                100% Skill Based Cricket Quiz
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">Career</span>
              </h1>
              <p>
                <strong>5 ka 10 in 10 seconds</strong>
              </p>
              <div className="mt-10">
                <form>
                  <div className="flex flex-wrap gap-5">
                    <div
                      aria-label="signup to newsletter"
                      className="zooming-element shining-button flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-15 py-2.5"
                      onClick={() => console.log('clicked')}
                    >
                      <IoLogoAndroid className="w-7 h-7 mr-2.5" />Download Now
                    </div>
                  </div>
                </form>
                <p className="text-black dark:text-white mt-5">Try Today 100% Safe and Secure</p>
              </div>
            </div>
            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <div className="swiper testimonial-01 pb-22.5 mb-20">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
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
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {placeHolder.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-gradient-to-b dark:from-sikkaMaroon dark:to-sikkaMaroonGrad">
                            <div style={{ position: 'relative', paddingTop: '133.33%' }} className="w-full">
                              <Image
                                src={image.src}
                                alt="testimonial"
                                fill
                                className="rounded-lg object-cover"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>


);}else {
  return(
    <section className="pt-0 md:pt-36 xl:pt-36 pb-10 xl:pb-25 overflow-hidden dark:shadow-none dark:bg-gradient-to-b dark:from-sikkaMaroon dark:via-sikkaMaroonGrad dark:to-transparent">
    <div className="mx-auto max-w-c-1390 px-02 md:px-4 2xl:px-0">
      <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
        <div className="swiper testimonial-01 w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {placeHolder.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-transparent shadow-solid-9 dark:shadow-none">
                  <div style={{ position: 'relative', height: '0', paddingTop: '150%', width: '100%' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                      <Image
                        src={image.src}
                        alt="testimonial"
                        decoding="async"
                        loading="eager"
   
                        className="rounded-lg"
                        placeholder="empty"
                        fill
                        
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
      );}
};

export default Hero;
