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
        className={` cursor-pointer transition-all duration-300 ease-in-out flex ${
          expanded ? "flex-col" : "flex-row"
        } 
         space-x-5 items-center h-min select-none`}
      >
        <div
          className={`${
            expanded
              ? "w-[250px] h-[250px] transition duration-500 ease-in-out scale-200"
              : "min-w-[100px] min-h-[100px] transition duration-500 ease-in-out scale-75"
          } relative `}
        >
          <Image
            src={image}
            fill={true}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            objectFit="contain"
            alt={title}
          ></Image>
        </div>

        <div className="text-lg min-w-[125px]">{title}</div>
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
