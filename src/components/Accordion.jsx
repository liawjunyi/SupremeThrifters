import Image from "next/image";
import { useState } from "react";

function Accordion({ title, image, children, onClick }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition hover:bg-indigo-50 ${
        expanded ? "bg-indigo-50" : "bg-white"
      }`}
      onClick={() => {
        setExpanded((current) => !current);
        onClick();
      }}
    >
      <div
        className={`accordion-header cursor-pointer transition-all duration-300 ease-in-out flex ${
          expanded ? "flex-col" : "flex-row"
        } 
         space-x-5 px-5 items-center h-min select-none`}
      >
        <div
          className={`${
            expanded
              ? "w-[250px] h-[250px] transition duration-500 ease-in-out scale-200"
              : "w-[100px] h-[100px]  transition duration-500 ease-in-out scale-75"
          } relative`}
        >
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            alt={title}
          ></Image>
        </div>

        <div className="text-lg">{title}</div>
      </div>
      <div
        className={`px-5 pt-0 overflow-hidden transition-all transition-[max-height] duration-300 ease-in-out ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="leading-6 font-light p-md text-justify">{children}</p>
      </div>
    </div>
  );
}

export default Accordion;
