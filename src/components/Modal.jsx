import React from "react";

import Card2 from "@/components/Card2";
import kid from "../../public/kid.avif";

export default function Modal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="modal"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center"
    >
      <Card2
        image={kid}
        title="UN Goals"
        img_width="md:w-1/4"
        div_width="w-1/2"
      >
        <p class="mb-1 text-neutral-300 dark:text-neutral-200 text-xl font-bold">
          Climate Action
        </p>
        <p class="mb-3 text-neutral-300 dark:text-neutral-200 pl-8">
          Reduce environmental impact by curbing the demand for fast fashion!
          Cut gas emissions and thrift today!
        </p>

        <p class="mb-1 text-neutral-300 dark:text-neutral-200 text-xl font-bold">
          Responsible Consumption & Production
        </p>
        <p class="mb-3 text-neutral-300 dark:text-neutral-200 pl-8">
          Do your part and extend the lifespan on clothing to reduce textile
          waste!
        </p>

        <p class="mb-1 text-neutral-300 dark:text-neutral-200 text-xl font-bold">
          Sustainable Cities & Communities
        </p>
        <p class="mb-3 text-neutral-300 dark:text-neutral-200 pl-8">
          Join the thrifting community and let us raise awareness about
          sustainable fashion together!
        </p>

        {/* <p className="text-neutral-300 dark:text-neutral-200">
                    The fashion industry contributes:
                </p>
                <ul className="text-neutral-300 dark:text-neutral-200 list-disc pl-8">
                    <li>
                        <span className="font-bold text-white text-lg">8-10%</span> of
                        global greenhouse gas emissions.
                    </li>
                    <li>
                        an estimated{" "}
                        <span className="font-bold text-white text-lg">
                            92 million tons
                        </span>{" "}
                        of textile waste created annually.
                    </li>
                </ul> */}
      </Card2>
    </div>
  );
}
