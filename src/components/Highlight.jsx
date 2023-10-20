import { parseAlgoliaHitHighlight } from "@algolia/autocomplete-preset-algolia";
import { createElement, Fragment } from "react";

const Highlight = ({ hit, attribute, tagName = "mark" }) => {
  return createElement(
    Fragment,
    {},
    parseAlgoliaHitHighlight({ hit, attribute }).map(
      ({ value, isHighlighted }, index) => {
        if (isHighlighted) {
          return createElement(tagName, { key: index }, value);
        }
        return value;
      }
    )
  );
};

export default Highlight;
