"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "../Testimonial/testimonialData";
import SectionHeader from "../Common/SectionHeader";
import "../DownloadNow/DownloadNow.css";
import { PiAndroidLogo } from "react-icons/pi";
import { IoLogoAndroid } from "react-icons/io5";
// import { motion } from "framer-motion";

const Hero = () => {
  // const [email, setEmail] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   // Initial check on mount
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const [aspectRatio, setAspectRatio] = useState([16, 9]); // Default aspect ratio
  const OpenModel = () => {
    setIsModalOpen(true);
  };
  const CloseModel = () => {
    setIsModalOpen(false);
  };
  const placeHolder = [
    "/images/hero/1.svg",
    "/images/hero/8.svg",
  ]
       // Define your aspect ratios here
const aspectRatios = [
  // Common Mobile Aspect Ratios
  { height: 16, width: 9 },   // Standard widescreen
  { height: 18, width: 9 },   // Common for modern smartphones
  { height: 19, width: 9 },   // Used in some newer smartphones
  { height: 19.5, width: 9 }, // Found in certain devices
  { height: 20, width: 9 },   // Uncommon, but used in some devices

  // Additional Mobile Aspect Ratios
  { height: 4, width: 3 },    // 4:3 aspect ratio
  { height: 1, width: 1 },    // Square aspect ratio
  { height: 9, width: 16 },   // 9:16 for vertical videos

  // More Aspect Ratios for Mobile
  { height: 2, width: 1 },    // 2:1 aspect ratio
  { height: 21, width: 9 },   // Unusual, but seen in some devices
  // Add more aspect ratios as needed
];
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    const updateAspectRatio = () => {
      // Choose an aspect ratio based on window size
      const windowWidth = window.innerWidth;
      const chosenAspectRatio = aspectRatios.find(
        ratio => windowWidth >= ratio.width * 100
      );
      
      // Set the aspect ratio state
      if (chosenAspectRatio) {
        setAspectRatio([chosenAspectRatio.height, chosenAspectRatio.width]);
      } 
    };
    // Initial check on mount
    // handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // window.addEventListener("resize2", updateAspectRatio);
    // Remove event listener on component unmount
    handleResize()
    updateAspectRatio()

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("resize2", updateAspectRatio);
    };
  }, []);

  return (
    <>
      <section className="pt-0 md:pt-36 xl:pt-36 pb-10 xl:pb-25 overflow-hidden dark:shadow-none dark:bg-gradient-to-b dark:from-sikkaMaroon dark:via-sikkaMaroonGrad dark:to-transparent">

        { !isDesktop ? (
        <div className="mx-auto max-w-c-1390 px-02 md:px-4 2xl:px-0">
        {/* <SectionHeader
              headerInfo={{
                title: `100% `,
                subtitle: `Skill Based Cricket Quiz`,
                description: ``,
              }}
            /> */}
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">

            <div className="swiper testimonial-01 ">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
             
            >
              {placeHolder.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-transparent shadow-solid-9 dark:shadow-none"
                    >
                    <div style={{ position: 'relative', paddingTop: `${100/aspectRatio[1] * aspectRatio[0]}%`}} className=" w-full">
                        <div className="-z-10">.</div>
                        {/* for some reason this is not rendering */}
                        
                        <Image
                          src={image}
                          alt="testimonial"
                          fill
                          className="absolute top-0 left-0 object-cover -z-10 "
                          />

      {/* Fire Image */}
      {/* <div className="absolute top-0 right-80 z-20 transform translate-y-1/2  -rotate-45">
        <Image
          src="/Fire.gif"
          width={120}
          height={120}
          alt="fire"
        />
      </div> */}
                      </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="py-8 justify-center bg-gradient-to-b via-sikkaMaroon from-sikkaMaroonGrad to-transparent h-36">
  <div className="flex justify-center items-center z-10">

  </div>
</div> */}
         
          </div>
            <div className=" md:w-1/2">

              
              

            </div>

          </div>
        </div> ):(
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
               
              </h4>
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
              100% Skill Based Cricket Quiz
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">Career
                </span>
              </h1>
              <p>
              <strong>5 ka 10 in 10 seconds</strong>
                            </p>

              <div className="mt-10">
                <form>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                    /> */}
                    <div
                      aria-label="signup to newsletter"
                      className="zooming-element shining-button flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-15 py-2.5"
                      onClick={()=>console.log('clicked')}
>
                     <IoLogoAndroid className="w-7 h-7 mr-2.5"/>Download Now
                    </div>
                  </div>
                </form>

                <p className="text-black dark:text-white mt-5">
                  Try Today 100% Safe and Secure
                </p>
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
                  {/* <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/herolight.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/herodark.png"
                    alt="Hero"
                    fill
                  /> */}
                  <div className="swiper testimonial-01 pb-22.5 mb-20">
            {/* <!-- Additional required wrapper --> */}
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
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
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
                          src={image}
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
        )
}
      </section>
    </>
  );
};


export default Hero;
