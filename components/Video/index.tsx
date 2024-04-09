"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { IoLogoAndroid } from "react-icons/io5";

const Video = React.memo(function Video() {
  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0 bg-gradient-to-b pt-10 from-[#24283E] to-[#252A42] dark:bg-gradient-to-b dark:from-[#24283E] dark:to-[#252A42]">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `How to Play`,
                subtitle: ``,
                description: ``,
              }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 xl:pt-15 relative"
            >
              <div className="relative">
                <div className="relative w-full h-0" style={{ paddingBottom: "177.78%" }}>

                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover p-7"
                    src="/video/gameplay.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                                    <Image
                    src="/video/frame.svg"
                    alt="Mobile Frame"
                    className="absolute top-0 left-0 w-full h-auto"
                    fill
                  />
                </div>
              </div>
            </motion.div>
  <motion.div
  variants={{
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 2, delay: 0.3 }}
  viewport={{ once: true }}
  className="animate_top w-full md:w-1/2 mt-10 md:mt-0 md:pl-10"
>
  <div className="hidden md:block">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Match, Compete, and Earn with Cricket Quiz App
    </h2>
    <p className="text-lg text-gray-300 mb-8">
      Put your cricket knowledge to the test and challenge players from around the world in this exciting quiz app. Answer questions, climb the leaderboard, and earn rewards for your skills. Whether you're a die-hard fan or a casual enthusiast, there's something for everyone in this thrilling cricket quiz experience.
    </p>
  </div>
  <div className="flex items-center">
    {/* <Link
      aria-label="signup to newsletter"
      className="zooming-element shining-button flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-15 py-2.5 text-lg"
      href="/apk/Sikka2x.apk"
    >
      <IoLogoAndroid className="w-7 h-7 mr-2.5" />Download Now
    </Link> */}
  </div>
</motion.div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Video;