import React, { createElement } from "react";

export function ProductItem({ onClick, hit, components }) {
  return (
    <div onClick={onClick} className="aa-ItemContent">
      <div className="aa-ItemTitle">
        <div>{hit.product_name}</div>
      </div>
    </div>
  );
}
