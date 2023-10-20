import React, { useState } from "react";
import Input from "./Input";
import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { hits } from "instantsearch.js/es/widgets";
import { connectAutocomplete } from "instantsearch.js/es/connectors";
const Search = ({ data }) => {
  // ...

  const searchClient = algoliasearch(
    "28OPVE2DNS",
    "552f6c2e86d06b9d5eaa9ed7f3445326"
  );

  const search = instantsearch({
    indexName: "instant_search",
    searchClient,
  });

  search.addWidgets([
    connectAutocomplete({
      container: "#autocomplete",
      onSelectChange({ query }) {
        search.helper.setQuery(query).search();
      },
    }),

    hits({
      container: "#hits",
      templates: {
        // ...
      },
    }),
  ]);

  search.start();
  return <div id="autocomplete"></div>;

  //   const [value, setValue] = useState("");
  //   const [selectedCategory, setSelectedCategory] = useState("");
  //   return (
  //     <div>
  //       <div>
  //         <Input
  //           type="text"
  //           value={value}
  //           onChange={(e) => setValue(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         {data
  //           .filter((item) => {
  //             return (
  //               value && item.product_category.every((cat) => cat.includes(value))
  //             );
  //           })
  //           .map((item) => (
  //             <div onClick={() => setSelectedCategory("jacket")}>
  //               {item.product_category}
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   );
};

export default Search;
