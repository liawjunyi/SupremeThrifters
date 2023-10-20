import Image from "next/image";
import { useState } from "react";

function Accordion({ title, image, children, onClick }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className={`transition hover:bg-indigo-50 ${
        expanded ? "bg-indigo-50" : "bg-white"
      }`}
      onClick={() => {
        toggleExpanded();
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

        <h3>{title}</h3>
      </div>
      <div
        className={`px-5 pt-0 overflow-hidden transition-all transition-[max-height] duration-300 ease-in-out ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="leading-6 font-light pl-9 pb-4 text-justify">
          {children}
        </p>
      </div>
    </div>
  );
}

function AccordionWrapper() {
  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-6/12 mx-auto rounded border">
        <div className="bg-white p-10 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800">
            Several Windows stacked on each other
          </h3>
          <p className="text-sm font-light text-gray-600 my-3">
            The accordion is a graphical control element comprising a vertically
            stacked list of items such as labels or thumbnails
          </p>
          <div className="h-1 w-full mx-auto border-b my-5"></div>
          <Accordion
            title="What is term?"
            content="Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
