"use client";

import logo from "../../public/st_logo.svg";
import Image from "next/image";
import Link from "next/link";
import "@reach/combobox/styles.css";
import React, { useState, useEffect } from "react";
import { signOut, getAuth } from "firebase/auth";
import Button from "./Button";

const Navbar = ({ setMenuActive, menuActive }) => {
  const [loggedin, setLoggedin] = useState(true);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, [user]);

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-primary z-1">
        <div className="py-5 md:px-12 flex ">
          {/* {logo} */}
          <div className="md:hidden z-30 w-[50px] ml-2 flex items-center">
            <Button
              className=""
              size="xs"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              {menuActive ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7304 7.78726L18.1607 6.21753L12.9809 11.3973L7.80117 6.21753L6.23145 7.78726L11.4112 12.967L6.23145 18.1468L7.80117 19.7165L12.9809 14.5367L18.1607 19.7165L19.7304 18.1468L14.5507 12.967L19.7304 7.78726Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.77832 12.9021H19.2147"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.77832 9.15228H19.2147"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.77832 16.6518H19.2147"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </Button>
          </div>
          <div className="flex max-md:w-full text-xl md:text-3xl cursor-pointer justify-center md:justify-start items-center gap-2">
            <Image className="w-10 h-10" src={logo} />
            <Link
              className="hover:text-neon hover:text-shadow-neon font-bold text-gray-400"
              href="/"
            >
              Supreme Thrifters
            </Link>
          </div>

          {/* {Navlinks here} */}
          <ul className="max-md:hidden justify-end ml-auto w-fit md:flex pl-9 md:pl-0">
            <Link
              className="flex items-center font-semibold my-7 text-lg md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
              href="/"
            >
              Home
            </Link>

            <Link
              className="flex items-center font-semibold my-7 text-lg md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
              href="/browse"
            >
              Browse
            </Link>

            <Link
              className="flex items-center font-semibold my-7 text-lg md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
              href="/reserved_likes"
            >
              Reserved
            </Link>

            <Link
              className="flex items-center font-semibold my-7 text-lg md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
              href="/profile"
            >
              Profile
            </Link>

            {loggedin ? (
              <Link
                className="flex items-center font-semibold text-lg my-7 md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
                onClick={() => {
                  signOut(auth);
                  setLoggedin(false);
                  console.log("signin status" + loggedin);
                }}
                href="/"
              >
                Sign Out
              </Link>
            ) : (
              <Link
                className="flex items-center font-semibold text-lg my-7 md:my-0 md:mx-3 text-gray-400 hover:text-neon hover:text-shadow-neon"
                href="/login"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
