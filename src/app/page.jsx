"use client";
import "@reach/combobox/styles.css";

import React, { useState, useEffect } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";

import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [all_listing, setAllListings] = useState([]);

  const allListings = async () => {
    const listing = [];
    const querySnapshot = await getDocs(collection(db, "listings"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      listing.push(doc.data());
    });
    console.log(listing);
    setAllListings(listing);
  };

  useEffect(() => {
    allListings();
  }, []);

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

        <div className="mt-20"></div>
        <Carousel></Carousel>

        {/* New Listings section */}
        <div className="text-center items-center">
          <h1 className="text-[40px] font-semibold">New Listings</h1>
          <hr className="w-52 h-1.5 bg-primary mx-auto" />
        </div>
        <div className="mt-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {all_listing.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="group relative justify-evenly flex"
            >
              <div>
                <Card className="aspect-h-1 aspect-w-1 w-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
                  <img
                    src={product.product_img_url}
                    className="h-[300px] w-full object-cover object-center lg:h-[300px] lg:w-full"
                    // onClick={}
                  />
                  <div className="mt-4 flex">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </a>
                      </h3>
                      <p className=" mt-1 text-sm text-gray-500">
                        {product.username}
                      </p>
                    </div>
                    <p className="absolute pl-[240px] text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* New Listings section */}
        <div className="text-center items-center">
          <h1 className="text-[40px] font-semibold">Trendings</h1>
          <hr className="w-52 h-1.5 bg-primary mx-auto" />
        </div>
        <div className="mt-6 mx-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
          {all_listing.slice(9, 17).map((product) => (
            <div
              key={product.id}
              className="group relative justify-evenly flex"
            >
              <div>
                <Card className="aspect-h-1 aspect-w-1 w-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
                  <img
                    src={product.product_img_url}
                    className="h-[300px] w-full object-cover object-center lg:h-[300px] lg:w-full"
                  />
                  <div className="mt-4 flex">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </a>
                      </h3>
                      <p className=" mt-1 text-sm text-gray-500">
                        {product.username}
                      </p>
                    </div>
                    <p className="absolute pl-[240px] text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="bg-primary text-white text-center h-64 text-xl">
          {" "}
          About Us{" "}
        </div>
      </div>
    </>
  );
}

// export default Home;

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
