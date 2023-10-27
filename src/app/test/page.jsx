"use client";

import Autocomplete2 from "@/components/Autocomplete2";
import algoliasearch from "algoliasearch";
import React from "react";

const Page = () => {
  const appId = "latency";
  const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
  const searchClient = algoliasearch(appId, apiKey);
  return (
    <div>
      <div id="autocomplete"></div>
    </div>
  );
};

export default Page;
