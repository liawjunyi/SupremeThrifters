import React, { useState } from "react";

const Input = ({
  handleChange,
  ref,
  value,
  size,
  type,
  placeholder,
  label,
  className,
  ...props
}) => {
  const [focus, setfocus] = useState("border-2 border-primary");

  return (
    <>
      {label}
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`flex ${focus} outline-none w-full cursor-text rounded-md  ${size} ${className}`}
        {...props}
        onFocus={() => setfocus("border-2 border-secondary")}
        onBlur={() => setfocus("border-2 border-primary")}
      />
    </>
  );
};

Input.defaultProps = {
  size: "px-xs py-xxs",
  bold: "false",
};

export default Input;
