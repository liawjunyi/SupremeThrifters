//TESTING//

import records from "../../fakedb.json";
import { createElement, Fragment, useEffect, useRef } from "react";
import {
  Combobox,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxInput,
} from "@reach/combobox";
import algoliasearch from "algoliasearch";
import { autocomplete } from "@algolia/autocomplete-js";
import { createRoot } from "react-dom/client";
import "@reach/menu-button/styles.css";
import {
  Configure,
  Highlight,
  Hits,
  HitsPerPage,
  InstantSearch,
  RefinementList,
  SearchBox,
} from "react-instantsearch";
import Card from "./Card";
import Hit from "./Hit";

const PlacesAutocomplete = ({ selected, setSelected, setCenter, props }) => {
  const containerRef = useRef(null);
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  const handleSelect = async (e) => {
    console.log(e);

    setSelected({ lat, lng });
  };
  useEffect(() => {
    if (!selected) return;
    setCenter(selected);
  }, [selected]);
  return (
    // <Combobox onSelect={handleSelect}>

    //   <ComboboxPopover className="rounded-md z-20">
    //     <ComboboxList>
    //       {/* {data &&
    //         data.map(({ place_id, description }) => (
    //           <ComboboxOption key={place_id} value={description} />
    //         ))} */}
    //     </ComboboxList>
    //   </ComboboxPopover>
    // </Combobox>
    // <InstantSearch searchClient={searchClient} indexName="supremeThrifters">
    //   <SearchBox></SearchBox>
    //   <RefinementList attribute="name"></RefinementList>
    //   <Configure analytics={false} hitsPerPage={5} />
    //   <Hits hitComponent={Hit}></Hits>
    // </InstantSearch>
    <div id="container" ref={containerRef} />
  );
};

export default PlacesAutocomplete;
