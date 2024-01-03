"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

// Define types for props if needed
interface VideoProps {}

const Video: React.FC<VideoProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
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
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
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
            className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15 relative"
          >
            <div className="relative">
              {/* Placeholder image for phone frame */}
              {/* <Image
                src="/path/to/phoneframe.png"
                alt="Phone Frame"
                className="md:w-16 sm:h-fit w-full h-full object-cover"
              /> */}
              {/* Video element */}
              <video
                ref={videoRef}
                className="md:w-16 sm:h-fit w-full h-full object-cover"
                src="/video/gameplay.webm"
                autoPlay
                loop
              ></video>
              {/* Play/Pause button */}
              <button
                onClick={handlePlayPause}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full px-4 py-2 z-10"
              >
                Play/Pause
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Video;