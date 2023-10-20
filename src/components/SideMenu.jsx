import React from "react";
import Link from "next/link";

const SideMenu = ({ className }) => {
  return (
    <div className={`absolute h-screen w-screen  ${className}`}>
      <aside className="flex h-screen justify-center items-center bg-primary">
        <nav className="flex flex-col">
          <Link href="/">
            <div className="text-2xl leading-[4.5rem] uppercase hover:text-white">
              Home
            </div>
          </Link>
          <Link href="/reserved">
            <div className="text-2xl leading-[4.5rem] uppercase hover:text-white">
              Reserved
            </div>
          </Link>
          <Link href="/profile">
            <div className="text-2xl leading-[4.5rem] uppercase hover:text-white">
              Profile
            </div>
          </Link>
          <Link href="#">
            <div className="text-2xl leading-[4.5rem] uppercase hover:text-white">
              Sign out
            </div>{" "}
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideMenu;
