"use client";

import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { db } from "../../firebase";
import data from "../../fakedb.json";
import { useEffect } from "react";
const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
