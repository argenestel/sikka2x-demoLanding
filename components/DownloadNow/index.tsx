"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './DownloadNow.css'
import { CheckmarkIcon } from 'react-hot-toast';
import {IoDownloadSharp, IoReloadCircle, IoShieldCheckmarkSharp} from 'react-icons/io5'
import { PiNumberCircleZeroFill } from "react-icons/pi";
import Modal from '../Modal/Modal';

function DownloadNow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModelDownload = () => {
    
    // Set loading state to true
    setIsLoading(true);

    // Simulate a download delay (you can replace this with your actual download logic)
    setTimeout(() => {
      // After download, set loading state back to false
      setIsLoading(false);

      // TODO: Add logic to open your modal
    }, 10000); // Simulated 2 seconds download time
    setIsModalOpen(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = "/apk/sikka.apk";
    downloadLink.download = "sikka.apk";
    downloadLink.click();
  };
  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };


  useEffect(() => {
    const toggleVisibility = () => {
      // Display the button after scrolling for 150 pixels
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    { isMobile &&
    <div className="fixed bottom-4 right-8 z-[99]">
      {isModalOpen && <Modal onClose={closeModal} />}
        <div
         
          aria-label="scroll to top"
          className="fixed bottom-0 right-0 p-2 z-[99] w-full  items-center justify-center 
            text-white shadow-md transition duration-300 ease-in-out
            bg-gradient-to-t from-sikkaMaroonGrad  via-sikkaMaroon to-transparent ...
            "
        >
          {/* <div className='text-white text-lg mx-auto text-center font-bold blinking-text ' style={{ userSelect: "none" }}>
Zero Commission app</div> */}
<div
  onClick={showModelDownload}
  className={` shining-button flex items-center justify-center rounded-full m-2 mr-4 ml-4   p-2 text-lg font-bold text-white bg-primary hover:bg-btndark border border-primary hover:border-primaryho
  
  ${
    isLoading ? "" : ""
  }`}

  style={{ userSelect: "none" }}
>
  {isLoading ? (<IoReloadCircle size={25} color={'#fff'} className='text-center spin' />) : (<IoDownloadSharp size={25} color={'#fff'} className='text-center' />)}
  
      <span className="ml-2">{isLoading ? "Downloading..." : "Download Now"}</span>
      </div>
      <div className='text-white text-lg mx-auto text-center font-bold blinking-text ' style={{ userSelect: "none" }}>
Zero Commission app</div>
            <div className="flex justify-around">
          {/* 100% Secure */}
          <div className="flex flex-row items-center text-white text-sm">
            {/* Add your secure icon here */}
            <div className="bg-green-500 rounded-full p-1 mb-1">
            <IoShieldCheckmarkSharp color='#00FF00' size='1.5rem'/>

            </div>
            
            <div style={{ userSelect: "none" }}>100% Skill Based</div>
          </div>

          {/* Easy Withdrawals */}
          <div className="flex flex-row items-center text-white text-sm">
            {/* Add your checkmark icon here */}
            <div className="bg-blue-500 rounded-full p-1 mb-1">
              {/* Add your checkmark icon */}
              <CheckmarkIcon/>
            </div>
            <div style={{ userSelect: "none" }}>Instant UPI Withdrawals</div>
          </div>

          {/* <div className="flex flex-row items-center text-white text-sm">
            <div className="bg-red-500 rounded-full p-1 mb-1">

              <PiNumberCircleZeroFill color='#00FF00' size='1.5rem'/>

            </div>
            <div style={{ userSelect: "none" }}>Zero Commission</div>
          </div> */}
        </div>
        </div>
    
    </div>
}
    </>
  );
}


export default DownloadNow;
