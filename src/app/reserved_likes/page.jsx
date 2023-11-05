"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import Navbar from "@/components/Navbar";
import like from "../../../public/like.svg";
import Image from "next/image";
import Sidemenu from "@/components/SideMenu";
import { getAuth } from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";

export default function Reserved() {
  const [products_reserved, setProductsReserved] = useState([]);
  const [products_liked, setProductsLiked] = useState([]);
  const [menuActive, setMenuActive] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const getData_reserved = async (uid) => {
    const q_user = query(
      collection(db, "users", uid, "reserved")
      // where("user_id", "==", 1)
    );

    const reservedList = [];

    const querySnapshot = await getDocs(q_user);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      reservedList.push(doc.data());
    });

    setProductsReserved(reservedList);
  };

  const getData_liked = async (uid) => {
    const q_liked = query(
      collection(db, "users", uid, "liked")
      // where("product_name", "==", "Nike T-Shirt")
    );

    let likedList = [];

    const querySnapshot = await getDocs(q_liked);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      likedList.push(doc.data());
      console.log(doc.data());
    });

    setProductsLiked(likedList);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      getData_reserved(user.uid);
      getData_liked(user.uid);
    }
  }, [user]);

  const [selectedTab, setSelectedTab] = useState("reserved");

  const toggleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`${menuActive ? "h-screen overflow-hidden" : ""}`}>
        <Sidemenu
          className={`transition-opacity duration-500 ${
            menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out -z-1"
          }`}
          onClick={() => setMenuActive((prev) => !prev)}
        />

        <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
        <div className="mx-auto max-w-2xl px-4 py-16 mt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex space-x-4">
            <Button
              onClick={() => toggleTab("reserved")}
              fontColor="text-black"
              className={`${
                selectedTab === "reserved" ? "bg-primary text-white" : "bg-white"
              } px-4 py-2 rounded-md  hover:text-white focus:outline-none`}
            >
              Reserved
            </Button>
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
            {selectedTab === "reserved" && (
              <div>
                {products_reserved.length === 0 ? (
                  <h2 className="mt-20 font-bold">You have NO reserved listings!</h2>
                ) : (
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                  {products_reserved.length > 0 &&
                    products_reserved.map((product) => {
                      product = product.product;
                      return (
                        <div key={product?.id} className="group relative">
                          <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={product?.product_img_url}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </Card>
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
                          <div className="flex justify-between pt-lg">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("reserved");
                              }}
                            >
                              Reserve
                            </Button>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("liked");
                              }}
                              size="sm"
                              bold={true}
                            >
                              <Image src={like} />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
              </div>
            )}

            {selectedTab === "liked" && (
              <div>
                {products_liked.length === 0 ? (
                  <h2 className="mt-20 font-bold">You have NO liked listings!</h2>
                ) : (
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                  {products_liked &&
                    products_liked.map((product) => {
                      product = product.product;
                      return (
                        <div key={product.id} className="group relative">
                          <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={product.product_img_url}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </Card>
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
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("reserved");
                              }}
                            >
                              Reserve
                            </Button>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("liked");
                              }}
                              size="sm"
                              bold={true}
                            >
                              <Image src={like} />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <footer
        className="bg-primary text-center dark:bg-secondary w-full p-4 fixed bottom-0 left-0">
        <div className="text-center text-neutral-300 dark:text-neutral-200">
          © 2023 Copyright: Supreme Thrifters
        </div>
      </footer>
    </div>
  );
}
