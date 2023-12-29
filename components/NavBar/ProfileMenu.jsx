"use client"
import React, { useState } from "react";
import Link from "next/link";

const ProfileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center text-waterloo text-regular font-medium cursor-pointer hover:text-primary"
      >
        {/* Your profile icon */}
        <svg
          className="fill-waterloo group-hover:fill-primary w-6 h-6 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* Your profile icon SVG */}
        </svg>
      </button>

      {menuOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-blacksection shadow-solid-5 rounded-md overflow-hidden">
          <li className="hover:text-primary">
            <Link href="/profile">Your Profile</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/settings">Settings</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/signout">Sign Out</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileMenu;
