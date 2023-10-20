import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Sidebar = ({ children }) => {
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
        className={`absolute flex inset-y-0 h-full bg-white z-5`}
        style={{ width: sidebarWidth, minWidth: 350 }}
      >
        <div className="relative mt-[75px] overflow-scroll w-full">
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
