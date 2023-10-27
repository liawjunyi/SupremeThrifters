import { h, Fragment } from "preact";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import algoliasearch from "algoliasearch";
import Input from "./Input";

const Autocomplete2 = () => {
  const appId = "latency";
  const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
  const searchClient = algoliasearch(appId, apiKey);

  const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: "supremeThrifters",
    getSearchParams: () => ({ clickAnalytics: true }),
  });

  autocomplete({
    container: "#autocomplete",
    openOnFocus: true,
    plugins: [querySuggestionsPlugin],
    getSources({ query }) {
      return [
        {
          sourceId: "products",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: "instant_search",
                  query,
                  params: {
                    clickAnalytics: true,
                  },
                },
              ],
            });
          },
          templates: {
            item({ item, components }) {
              return <ProductItem hit={item} components={components} />;
            },
          },
        },
      ];
    },
  });

  function ProductItem({ hit, components }) {
    return (
      <div className="aa-ItemWrapper">
        <div className="aa-ItemContent">
          <div className="aa-ItemIcon">
            <img src={hit.image} alt={hit.name} width="40" height="40" />
          </div>
          <div className="aa-ItemContentBody">
            <div className="aa-ItemContentTitle">
              <components.Highlight hit={hit} attribute="name" />
            </div>
            <div className="aa-ItemContentDescription">
              <components.Snippet hit={hit} attribute="description" />
            </div>
          </div>
        </div>
        <button
          className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
          type="button"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
            <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"></path>
          </svg>
        </button>
      </div>
    );
  }

  return <div id="autocomplete"></div>;
};
export default Autocomplete2;
