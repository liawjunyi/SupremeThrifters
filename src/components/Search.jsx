import React, { useState } from "react";
import Input from "./Input";

const Search = ({ data }) => {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <div>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        {data
          .filter((item) => {
            return (
              value && item.product_category.every((cat) => cat.includes(value))
            );
          })
          .map((item) => (
            <div onClick={() => setSelectedCategory("jacket")}>
              {item.product_category}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
