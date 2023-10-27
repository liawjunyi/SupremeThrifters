"use client";
import "@reach/combobox/styles.css";

import React, { useState, useEffect } from "react";

import Button from "@/components/Button";

import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

import Image from "next/image";
import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  //  useEffect(() => {
  //     const updateMediaQuery = (e) => {
  //       if (e.matches) {
  //         setShowSideMenu(true);
  //       } else {
  //         setShowSideMenu(false);
  //       }
  //     };

  //     const mediaQuery = window.matchMedia("(max-width: 992px)"); //smaller than 992px replace with SideMenu
  //     mediaQuery.addEventListener("change", updateMediaQuery);

  //     return () => {
  //       mediaQuery.removeEventListener("change", updateMediaQuery);
  //     };
  //  }, []);

  return (
    <>
      <div>
        <SideMenu
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

        {showSideMenu ? <SideMenu /> : <Navbar />}
      </div>
    </>
  );
};

export default Home;

// "use client"
// import React, { useState, useEffect } from "react";
// import "@reach/combobox/styles.css";
// import SideMenu from "@/components/SideMenu";
// import Navbar from "@/components/Navbar";

// const Home = () => {
//  const [showSideMenu, setShowSideMenu] = useState(false);

//   useEffect(() => {
//     const updateMediaQuery = (e) => {
//       if (e.matches) {
//         setShowSideMenu(true);
//       } else {
//         setShowSideMenu(false);
//       }
//     };

//     const mediaQuery = window.matchMedia("(max-width: 992px)");
//     mediaQuery.addEventListener("change", updateMediaQuery);

//     return () => {
//       mediaQuery.removeEventListener("change", updateMediaQuery);
//     };
//  }, []);

//  return (
// <>
//   {showSideMenu ? <SideMenu /> : <Navbar />}
// </>
//  );
// };

// export default Home;
