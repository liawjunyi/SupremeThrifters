import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Button from "./Button";

const Sidebar = ({ children, onClose }) => {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(350);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  });

  const resize = useCallback((mouseMoveEvent) => {
    if (isResizing) {
      setSidebarWidth(
        mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left
      );
    }
  });

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`absolute top-20 bottom-10 right-4 rounded-md left-4 flex bg-white z-5 `}
      >
        <div className="relative w-full overflow-scroll ">
          <div className="p-sm w-fit cursor-pointer " onClick={onClose}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7304 7.78726L18.1607 6.21753L12.9809 11.3973L7.80117 6.21753L6.23145 7.78726L11.4112 12.967L6.23145 18.1468L7.80117 19.7165L12.9809 14.5367L18.1607 19.7165L19.7304 18.1468L14.5507 12.967L19.7304 7.78726Z"
                fill="black"
              />
            </svg>
          </div>
          {children}
        </div>
        <div
          className="relative grow-0 shrink-0 basis-2 resize-x cursor-col-resize justify-self-end  hover:w-[3px] hover:bg-black"
          onMouseDown={startResizing}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
