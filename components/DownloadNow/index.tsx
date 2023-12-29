"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './DownloadNow.css'
import { CheckmarkIcon } from 'react-hot-toast';
import {IoShieldCheckmarkSharp} from 'react-icons/io5'
import { PiNumberCircleZeroFill } from "react-icons/pi";

function DownloadNow() {
  const [isVisible, setIsVisible] = useState(false);

  const showModelDownload = () => {
    // Open modal and download a file
    // Add your logic here

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

        <div
         
          aria-label="scroll to top"
          className="fixed bottom-0 right-0 p-2 z-[99] w-full  items-center justify-center 
            text-white shadow-md transition duration-300 ease-in-out
            bg-gradient-to-t from-sikkaMaroonGrad  via-sikkaMaroon to-transparent ...
            "
        >
          <div className='text-white text-lg mx-auto text-center font-bold blinking-text' style={{ userSelect: "none" }}>
Zero Commision app</div>
            <div
             onClick={showModelDownload}
             className='rotate-button shining-button rounded-full m-3 p-2 mx-auto text-center text-lg font-bold text-white bg-primary hover:bg-btndark border border-primary hover:border-primaryho'
             style={{ userSelect: "none" }}
             >
                          Download Now
            </div>
            <div className="flex justify-around">
          {/* 100% Secure */}
          <div className="flex flex-row items-center text-white text-sm">
            {/* Add your secure icon here */}
            <div className="bg-green-500 rounded-full p-1 mb-1">
            <IoShieldCheckmarkSharp color='#00FF00' size='1.5rem'/>

            </div>
            
            <div style={{ userSelect: "none" }}>100% Secure</div>
          </div>

          {/* Easy Withdrawals */}
          <div className="flex flex-row items-center text-white text-sm">
            {/* Add your checkmark icon here */}
            <div className="bg-blue-500 rounded-full p-1 mb-1">
              {/* Add your checkmark icon */}
              <CheckmarkIcon/>
            </div>
            <div style={{ userSelect: "none" }}>Easy Withdrawals</div>
          </div>

          {/* Zero Commission */}
          <div className="flex flex-row items-center text-white text-sm">
            {/* Add your zero commission icon here */}
            <div className="bg-red-500 rounded-full p-1 mb-1">
              {/* Add your zero commission icon */}
              <PiNumberCircleZeroFill color='#00FF00' size='1.5rem'/>

            </div>
            <div style={{ userSelect: "none" }}>Zero Commission</div>
          </div>
        </div>
        </div>
    
    </div>
}
    </>
  );
}


export default DownloadNow;
