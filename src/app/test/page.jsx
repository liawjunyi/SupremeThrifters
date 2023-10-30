"use client";

import Autocomplete2 from "@/components/Autocomplete2";
import { ProductItem } from "@/components/Productitem";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import algoliasearch from "algoliasearch";
import React, { Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";
import insightsClient from "search-insights";

const Page = () => {
  const appId = "28OPVE2DNS";
  const apiKey = "19bda594fe34d920e65766859aa94af9";
  const searchClient = algoliasearch(appId, apiKey);

  const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: "supremeThrifters",
    getSearchParams: () => ({ clickAnalytics: true }),
  });

  insightsClient("init", { appId, apiKey, useCookie: true });

  insightsClient("clickedObjectIDsAfterSearch", {
    index: "supremeThrifters",
    eventName: "clicked Product",
    objectIDs: [333277000],
  });

  return (
    <Autocomplete2
      openOnFocus={true}
      classNames={{
        input: "outline-none w-full cursor-text ",
        inputWrapper: "",
        form: "rounded-md focus-within:shadow focus-within:shadow-secondary focus-within:border-secondary",
        detachedSearchButton: "rounded-md",
      }}
      plugins={[querySuggestionsPlugin]}
      insights={true}
      onStateChange={({ state }) => {
        console.log(state);
      }}
      getSources={({ query, setQuery, refresh, setIsOpen }) => [
        {
          sourceId: "product_name",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: "supremeThrifters",
                  query,
                  params: {
                    hitsPerPage: 10,
                    clickAnalytics: true,
                  },
                },
              ],
            });
          },
          templates: {
            item({ item, components }) {
              return (
                <ProductItem
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuery(item.product_name);
                    setIsOpen(false);
                    refresh();
                  }}
                  hit={item}
                  components={components}
                />
              );
            },
            noResults() {
              return "No results.";
            },
          },
        },
      ]}
    />
  );
};

export default Page;
