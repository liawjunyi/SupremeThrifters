"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import bg from "../../public/desert.svg";
import { usePathname } from "next/navigation";
import Button from "./Button";
import close from "../../public/close.svg";
import { signOut, getAuth } from "firebase/auth";




const Sidemenu = ({ className, onClick }) => {



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
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`absolute h-screen w-full ${className}`}>
      <Button size="xs" className={"absolute mt-5 ml-2"} onClick={onClick}>
        <Image src={close}></Image>
      </Button>
      <aside className="flex h-screen justify-center items-center bg-primary">
        <div className="absolute inset-x-0  mx-auto w-screen h-screen pointer-events-none opacity-10">
          <Image src={bg} fill={true}></Image>
        </div>

        <nav className="flex flex-col">
          <Link href="/">
            <div
              className={`${
                pathname == "/" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Home
            </div>
          </Link>
          <Link href="/browse">
            <div
              className={`${
                pathname == "/browse" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Browse
            </div>
          </Link>
          <Link href="/reserved_likes">
            <div
              className={`${
                pathname == "/reserved_likes" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Reserved
            </div>
          </Link>
          <Link href="/profile">
            <div
              className={`${
                pathname == "/profile" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Profile
            </div>
          </Link>

          {loggedin ? (
              <Link
              className={`${
                pathname == "/profile" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
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
              className={`${
                pathname == "/profile" && "text-shadow-neon text-neon"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}                href="/login"
              >
                Login
              </Link>
            )}





        </nav>
      </aside>
    </div>
  );
};

export default Sidemenu;
