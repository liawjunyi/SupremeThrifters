"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import Navbar from "@/components/Navbar";
import likeFilled from "../../../public/like_filled.svg";
import Image from "next/image";
import Sidemenu from "@/components/Sidemenu";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Reserved() {
  const [products_reserved, setProductsReserved] = useState(null);
  const [products_liked, setProductsLiked] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState("reserved");
  const { push } = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;

  // Getting all the listings that is RESERVED by a user
  const getData_reserved = async (uid) => {
    // Geting the reserved collection from firebase of the user that is logged in
    const q_user = query(collection(db, "users", uid, "reserved"));

    const reservedList = [];

    // Pushing the listings from the firebase reserved collection into the reserved list
    const querySnapshot = await getDocs(q_user);
    querySnapshot.forEach((doc) => {
      reservedList.push(doc.data());
    });

    setProductsReserved(reservedList);
  };

  // Getting all the listing that is LIKED by user
  const getData_liked = async (uid) => {
    // Geting the liked collection from firebase of the user that is logged in
    const q_liked = query(collection(db, "users", uid, "liked"));

    let likedList = [];

    // Pushing the listings from the firebase reserved collection into the reserved list
    const querySnapshot = await getDocs(q_liked);
    querySnapshot.forEach((doc) => {
      likedList.push(doc.data());
      console.log(doc.data());
    });

    setProductsLiked(likedList);
  };

  const unlikeListing = async (product) => {
    await deleteDoc(doc(db, "users", user.uid, "liked", product.product_name))
      .then(() => {
        alert("Listing has been unliked!");
      })
      .then(() => push("/reserved_likes"));
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      getData_reserved(user.uid);
      getData_liked(user.uid);
    }
  }, [user]);

  // To check if the tab have been toggled (between reserved and liked)
  const toggleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`${menuActive ? "h-screen overflow-hidden" : ""}`}>
        {/* Use of Sidemenu Component */}
        <Sidemenu
          className={`transition-opacity duration-500 ${
            menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out -z-1"
          }`}
          onClick={() => setMenuActive((prev) => !prev)}
        />
        {/* Use of Navbar Component */}
        <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />

        {/* Main Div for Reserved and Liked Tabs */}
        <div className="mx-auto max-w-2xl px-4 py-16 mt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* The tab button to toggle between Reserved and Liked */}
          <div className="flex space-x-4">
            {/* The Reserved Tab Button */}
            <Button
              onClick={() => toggleTab("reserved")}
              fontColor="text-black"
              className={`${
                selectedTab === "reserved"
                  ? "bg-primary text-white"
                  : "bg-white"
              } px-4 py-2 rounded-md  hover:text-white focus:outline-none`}
            >
              Reserved
            </Button>

            {/* The Liked Tab Button */}
            <Button
              onClick={() => toggleTab("liked")}
              fontColor="text-black"
              className={`${
                selectedTab === "liked" ? "bg-primary text-white" : "bg-white"
              } px-4 py-2 rounded-md  hover:text-white focus:outline-none`}
            >
              Liked
            </Button>
          </div>

          <div className="tab-content">
            {/* If the Reserved Tab is selected */}
            {selectedTab === "reserved" && (
              // Listings that the user has Reserved
              <div>
                {/* If there are no listing Reserved */}
                {products_reserved && products_reserved.length === 0 ? (
                  <h2 className="mt-20 font-bold">
                    You have NO reserved listings!
                  </h2>
                ) : (
                  // Div of all the Reserved listing Cards
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {/* If there are listings in Reserved */}
                    {products_reserved &&
                      products_reserved.length > 0 &&
                      products_reserved.map((product) => {
                        product = product.product;
                        return (
                          <div key={product?.id} className="group relative">
                            {/* Showing image of listing */}
                            <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product?.product_img_url}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </Card>
                            {/* Details of Listing */}
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href={product?.href}>
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    />
                                    {product?.product_name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product?.username}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                {product?.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div> // End of the Reserved Listings
                )}
              </div> // End of the Main Div for Reserved Listings
            )}

            {/* If the Liked Tab is selected */}
            {selectedTab === "liked" && (
              // Listings that the user has Reserved
              <div>
                {products_liked?.length === 0 ? (
                  <h2 className="mt-20 font-bold">
                    You have NO liked listings!
                  </h2>
                ) : (
                  // Div of all the Liked listing Cards
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {/* If there are listings in Liked */}
                    {products_liked &&
                      products_liked.map((product) => {
                        product = product.product;
                        return (
                          <div key={product?.id} className="group relative">
                            {/* Showing Image of Listing */}

                            <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product.product_img_url}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </Card>
                            {/* Details of Listing */}
                            <div className="mt-4 flex justify-between">
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
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.username}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                {product.price}
                              </p>
                            </div>
                            <div className="flex justify-between pt-lg">
                              <Button
                                className="z-0"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log("reserved");
                                }}
                                animation="animate-bounce"
                                confetti={true}
                              >
                                Reserve
                              </Button>
                              <Button
                                className="z-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log("liked");
                                  unlikeListing(product);
                                }}
                                size="sm"
                                bold={true}
                                animation="animate-bounce"
                              >
                                <Image src={likeFilled} />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                  </div> // End of the Liked Listings
                )}
              </div> // End of the Main Div for Liked Listings
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
