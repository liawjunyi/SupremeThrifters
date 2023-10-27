"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "../../public/desert.svg";
import { usePathname } from "next/navigation";

const SideMenu = ({ className }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`absolute h-screen w-screen  ${className}`}>
      <aside className="flex h-screen justify-center items-center bg-primary">
        <div className="absolute inset-x-0  mx-auto w-[500px] h-screen pointer-events-none opacity-10">
          <Image src={bg} fill={true}></Image>
        </div>

        <nav className="flex flex-col">
          <Link href="/">
            <div
              className={`${
                pathname == "/" && "text-white"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Home
            </div>
          </Link>
          <Link href="/browse">
            <div
              className={`${
                pathname == "/browse" && "text-white"
              } text-2xl leading-[4.5rem] pointer-events-none uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Browse
            </div>
          </Link>
          <Link href="/reserved">
            <div
              className={`${
                pathname == "/reserved" && "text-white"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Reserved
            </div>
          </Link>
          <Link href="/profile">
            <div
              className={`${
                pathname == "/profile" && "text-white"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Profile
            </div>
          </Link>
          <Link href="#">
            <div
              className={`${
                pathname == "/login" && "text-white"
              } text-2xl leading-[4.5rem] uppercase text-gray-400 hover:text-shadow-neon hover:text-neon`}
            >
              Sign out
            </div>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideMenu;
