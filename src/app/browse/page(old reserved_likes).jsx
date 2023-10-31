"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Navbar from "@/components/NavBar";

export default function Reserved() {
  const [products_reserved, setProductsReserved] = useState([]);
  const [products_liked, setProductsLiked] = useState([]);

  const getData_reserved = async () => {
    const q_reserved = query(
      collection(db, "listings"),
      where("product_name", "==", "Jacket")
    );

    const reservedList = [];

    const querySnapshot = await getDocs(q_reserved);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      reservedList.push(doc.data());
    });

    setProductsReserved(reservedList);
  };

  useEffect(() => {
    getData_reserved();
  }, []);

  const getData_liked = async () => {
    const q_liked = query(
      collection(db, "listings"),
      where("product_name", "==", "Nike T-Shirt")
    );

    let likedList = [];

    const querySnapshot = await getDocs(q_liked);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      likedList.push(doc.data());
    });

    setProductsLiked(likedList);
  };

  useEffect(() => {
    getData_liked();
  }, []);

  const [selectedTab, setSelectedTab] = useState("reserved");

  const toggleTab = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="bg-white">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products_reserved.map((product) => (
                  <div key={product.id} className="group relative">
                    <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "liked" && (
            <div>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products_liked.map((product) => (
                  <div key={product.id} className="group relative">
                    <Card className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
