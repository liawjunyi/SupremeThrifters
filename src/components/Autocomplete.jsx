//TESTING//

import records from "../../fakedb.json";
import {
  createElement,
  Fragment,
  useEffect,
  useRef,
  useMemo,
  useState,
} from "react";
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import algoliasearch from "algoliasearch";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import Input from "./Input";
import Highlight from "./Highlight";

const searchClient = algoliasearch(
  "28OPVE2DNS",
  "552f6c2e86d06b9d5eaa9ed7f3445326"
);

const Autocomplete = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        insights: true,
        getSources() {
          return [
            {
              sourceId: "name",

              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "supremeThrifters",
                      query,
                      params: {
                        hitsPerPage: 5,
                      },
                    },
                  ],
                });
              },
              ...props,
            },
          ];
        },
      }),
    [props]
  );

  const inputRef = useRef(null);
  const formRef = useRef(null);
  const panelRef = useRef(null);
  const { getEnvironmentProps } = autocomplete;

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined;
    }

    const { onTouchStart, onTouchMove, onMouseDown } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [getEnvironmentProps, autocompleteState.isOpen]);

  return (
    <div {...autocomplete.getRootProps({})}>
      <form
        ref={formRef}
        {...autocomplete.getFormProps({ inputElement: inputRef.current })}
      >
        <div className="aa-InputWrapperPrefix">
          <label className="aa-Label" {...autocomplete.getLabelProps({})}>
            <button className="aa-SubmitButton" type="submit" title="Submit">
              <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
          </label>
        </div>
        <div>
          <Input
            ref={inputRef}
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
          />
        </div>
        <div>
          <button type="reset">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              {...props}
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>

      {autocompleteState.isOpen && (
        <div
          ref={panelRef}
          className={[
            "aa-Panel",
            "aa-Panel--desktop",
            autocompleteState.status === "stalled" && "aa-Panel--stalled",
          ]
            .filter(Boolean)
            .join(" ")}
          {...autocomplete.getPanelProps({})}
        >
          <div className="aa-PanelLayout aa-Panel--scrollable">
            {autocompleteState.collections.map((collection, index) => {
              const { source, items } = collection;

              return (
                <section key={`source-${index}`} className="aa-Source">
                  {items.length > 0 && (
                    <ul className="aa-List" {...autocomplete.getListProps()}>
                      {items.map((item) => {
                        return (
                          <li
                            key={item.objectID}
                            className="aa-Item"
                            {...autocomplete.getItemProps({ item, source })}
                          >
                            <div className="aa-ItemWrapper">
                              <div className="aa-ItemContent">
                                <div className="aa-ItemIcon aa-ItemIcon--picture aa-ItemIcon--alignTop">
                                  <img
                                    src={item.product_img_url}
                                    alt={item.product_name}
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="aa-ItemContentBody">
                                  <div className="aa-ItemContentTitle">
                                    <Highlight
                                      hit={item}
                                      attribute="product_name"
                                    />
                                  </div>
                                  <div className="aa-ItemContentDescription"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

//   useEffect(() => {
//     if (!containerRef.current) {
//       return undefined;
//     }

//     const search = autocomplete({
//       container: containerRef.current,
//       renderer: { createElement, Fragment, render: () => {} },
//       render({ children }, root) {
//         if (!panelRootRef.current || rootRef.current !== root) {
//           rootRef.current = root;

//           panelRootRef.current?.unmount();
//           panelRootRef.current = createRoot(root);
//         }

//         panelRootRef.current.render(children);
//       },
//       ...props,
//     });

//     return () => {
//       search.destroy();
//     };
//   }, [props]);

//   const handleSelect = async (e) => {
//     console.log(e);

//     setSelected({ lat, lng });
//   };
//   useEffect(() => {
//     if (!selected) return;
//     setCenter(selected);
//   }, [selected]);
//   return (
//     // <Combobox onSelect={handleSelect}>

//     //   <ComboboxPopover className="rounded-md z-20">
//     //     <ComboboxList>
//     //       {/* {data &&
//     //         data.map(({ place_id, description }) => (
//     //           <ComboboxOption key={place_id} value={description} />
//     //         ))} */}
//     //     </ComboboxList>
//     //   </ComboboxPopover>
//     // </Combobox>
//     // <InstantSearch searchClient={searchClient} indexName="supremeThrifters">
//     //   <SearchBox></SearchBox>
//     //   <RefinementList attribute="name"></RefinementList>
//     //   <Configure analytics={false} hitsPerPage={5} />
//     //   <Hits hitComponent={Hit}></Hits>
//     // </InstantSearch>
//     <div id="container" ref={containerRef} />
//   );
// };

export default Autocomplete;
