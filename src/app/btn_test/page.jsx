"use client";


import React, { useEffect, useState } from "react";
import Reserved_Button from "@/components/Reserved Button";
import Liked_Button from "@/components/Like Button";
export default function test_button() {

  
  return (

    <div>

<Reserved_Button
    product_img={"https://firebasestorage.googleapis.com/v0/b/supremethrifters-e5b09.appspot.com/o/nike_tshirt_4.jpg?alt=media&token=4cf6e75d-6716-4abd-919f-76dde6135614"}
    product_price= {"$10.10"}
    product_name={"Nike Pants"}
    product_id={1}
   >
        Reserve
    </Reserved_Button>

<Liked_Button
product_img={"https://firebasestorage.googleapis.com/v0/b/supremethrifters-e5b09.appspot.com/o/nike_tshirt_4.jpg?alt=media&token=4cf6e75d-6716-4abd-919f-76dde6135614"}
product_price= {"$10.10"}
product_name={"Nike Pants"}
product_id={1}

>
    Like
</Liked_Button>


    </div>
   




  )}