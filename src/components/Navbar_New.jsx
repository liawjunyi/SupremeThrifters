"use client";
import "@reach/combobox/styles.css";

import React, { useState, useEffect } from "react";

import Button from "@/components/Button";

import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";

const Navbar_new = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <div>
        <Sidemenu
          className={`transition-opacity duration-500 ${
            menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out z-0"
          }`}
        />

        <div className="lg:hidden absolute top-lg left-sm z-30">
          <Button
            className=""
            size="xs"
            onClick={() => setMenuActive((prev) => !prev)}
          >
            <Image src={menuActive ? close : menu} />
          </Button>
        </div>

        {showSideMenu ? <Sidemenu /> : <Navbar />}
      </div>
    </>
  );
};

export default Navbar_new;
