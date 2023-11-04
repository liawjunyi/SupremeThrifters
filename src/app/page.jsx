"use client";
import "@reach/combobox/styles.css";

import React, { useState, useEffect } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";

import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import shirt from "../../public/shirt1.jpg";

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
        {/* <div className="bg-primary text-gray-400">
          <div>
            <div className="text-center items-center">
              <h1 className="text-[40px] font-semibold">About Us</h1>
              <hr className="w-52 h-1.5 bg-primary mx-auto"/>
            </div>
            <br></br>
            <div className="flex">
              <img src="../../public/tshirt.svg" alt="about us" />
              <p className="text-center text-l">
                Supreme Thrifter is created to promote thirfting among youths by making it accessible and convenient for all. Here you can explore and purchase beloved second-hand clothings that is nearest to you rather than having to locate a thrift store which can be very out of the way.
              </p>
            </div>
          </div>
          <br></br>
        </div> */}

        <div className="m-4">
          <Card2 image={shirt} title="About us">
            <p class="mb-6 text-neutral-300 dark:text-neutral-200 text-lg">
              Supreme Thrifter is created to promote thirfting among youths by
              making it accessible and convenient for all. Here you can explore
              and purchase beloved second-hand clothings that is nearest to you
              rather than having to locate a thrift store which can be very out
              of the way.
            </p>
            <p class="mb-4 text-neutral-300 dark:text-neutral-200 text-xl font-bold">
              Did you Know?
            </p>
            <p className="text-neutral-300 dark:text-neutral-200">
              The fashion industry contributes:
            </p>
            <ul className="text-neutral-300 dark:text-neutral-200">
              <li>8-10% of global greenhouse gas emissions.</li>
              <li>
                An estimated 92 million tons of textile waste created annually
              </li>
            </ul>

            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </Card2>
        </div>

        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="block rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex flex-wrap items-center">
                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/088.jpg"
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      About Us
                    </h2>
                    <p className="mb-6 text-neutral-300 dark:text-neutral-200">
                      Supreme Thrifter is created to promote thirfting among
                      youths by making it accessible and convenient for all.
                      Here you can explore and purchase beloved second-hand
                      clothings that is nearest to you rather than having to
                      locate a thrift store which can be very out of the way.
                    </p>
                    <p className="mb-3 flex items-center font-bold uppercase text-white">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg> */}
                      Did You Know?
                    </p>
                    <p className="text-neutral-300 dark:text-neutral-200">
                      The fashion industry contributes:
                    </p>
                    <ul className="text-neutral-300 dark:text-neutral-200">
                      <li>8-10% of global greenhouse gas emissions.</li>
                      <li>
                        an estimated 92 million tons of textile waste created
                        annually
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
