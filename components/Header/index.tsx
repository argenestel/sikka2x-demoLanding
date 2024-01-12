"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  return (
    <header className={`w-full z-99999 py-4 bg-white dark:bg-sikkaMaroon dark:to-sikkaMaroonGrad dark:from-sikkaMaroon transition duration-100`}>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="/">
            <Image src="/images/hero/logosikka.svg" alt="logo" width={119.03} height={30} />
          </a>
          <div className="flex md:hidden xl:hidden">
            <div className="relative mr-8 mt-2.5">
              <div
                className="flex border border-strokedark bg-gradient-to-r from-sikkaGold2 to-sikkaGold text-sikkaMaroon font-bold rounded-xl py-1 px-4 absolute top-0 right-0 -mt-4 -mr-4"
              >
                <FaStar className="m-1" />
                4.9/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
