import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative w-[768px] h-[480px] bg-white rounded-sm">
      {children}
    </div>
  );
};

export default Container;
