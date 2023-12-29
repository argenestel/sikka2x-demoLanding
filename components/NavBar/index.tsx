"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary p-4 flex items-center justify-between">
      <Link href="/" passHref>
        <p className="text-white text-2xl font-semibold">Dashboard</p>
      </Link>
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl focus:outline-none"
        >
          &#9776;
        </button>
        <div
          className={`absolute right-0 mt-2 bg-white shadow-lg ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-2 p-2">
            <li>
              <Link href="/dashboard" passHref>
                <div className="text-black hover:underline">Dashboard</div>
              </Link>
            </li>
            <li>
              <Link href="/profile" passHref>
                <div className="text-black hover:underline">Profile</div>
              </Link>
            </li>
            <li>
              <Link href="/settings" passHref>
                <p className="text-black hover:underline">Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
