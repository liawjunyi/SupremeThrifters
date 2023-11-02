"use client";
import "@reach/combobox/styles.css";

import React, { useState, useEffect } from "react";

import Button from "@/components/Button";

import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

import Image from "next/image";

import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";

import Navbar_new from "@/components/Navbar_New";


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
        <Navbar_new></Navbar_new>

        <div className="mt-20"></div>
        <div className="bg-primary">
          <Carousel></Carousel>
        </div>
      </div>
      <div className="bg-primary text-gray-400">
        <div>
          <h2 class="text-center text-2xl">About Us</h2>
          <br></br>
          <p class="text-center text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            velit ullam inventore id accusantium consequatur, molestias
            molestiae voluptatibus minima dignissimos doloremque suscipit est
            ipsam sunt ratione eius nulla perspiciatis.
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="text-center text-2xl">Our Mission</h2>
          <br></br>
          <p class="text-center text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            velit ullam inventore id accusantium consequatur, molestias
            molestiae voluptatibus minima dignissimos doloremque suscipit est
            ipsam sunt ratione eius nulla perspiciatis.
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="text-center text-2xl">UN Goals</h2>
          <br></br>
          <p class="text-center text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            velit ullam inventore id accusantium consequatur, molestias
            molestiae voluptatibus minima dignissimos doloremque suscipit est
            ipsam sunt ratione eius nulla perspiciatis.
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="text-center text-2xl">Sustainability</h2>
          <br></br>
          <p class="text-center text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            velit ullam inventore id accusantium consequatur, molestias
            molestiae voluptatibus minima dignissimos doloremque suscipit est
            ipsam sunt ratione eius nulla perspiciatis.a
          </p>
        </div>
        <br></br>
        {/* <div
  class="flex rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:w-full md:flex-row text-gray-400 h-auto">
    <div class="w-1/2">
      <a href="https://example.com" class="h-96 rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg">
  <img
    class="h-1/2 w-full rounded-t-lg object-cover md:h-1/8 md:!rounded-none md:!rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="" />
    </a>
    </div>

  <div class="flex flex-col justify-start p-6 w-1/2">
    <h5
      class="mb-2 text-xl font-medium">
      Card title
    </h5>
    <p class="mb-4 text-base">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs">
      Last updated 3 mins ago
    </p>
  </div>
</div> */}
        <div className="m-4">
     
          <Card image={shirt} title="Card Title">
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, hic rerum enim accusantium nesciunt quidem provident
              autem reprehenderit ex quisquam quasi minima nostrum perferendis
              facilis, aspernatur vitae dicta necessitatibus dolorum.
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </Card>
        </div>
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
