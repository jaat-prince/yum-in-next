"use client";
import { useState } from "react";
import { DotIcon, DownIcon } from "../Helper/Icon";
import { arrowData } from "../Helper/Helper";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      {arrowData.map((item, index) => (
        <div>
          <button
            className="flex w-full items-center gap-x-3.5 rounded-md px-4 py-3 text-[#334155] text-sm  focus-within:bg-[#f58220]/10 focus-within:text-[#f58220] hover:bg-gray-100 cursor-pointer"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleAccordion}
            key={index}
          >
            <span>{item.icon}</span>
            {item.title}
            <span
              className={`ms-auto transition-all ${
                isOpen ? "rotate-180" : ""
              } `}
            >
              <DownIcon />
            </span>
          </button>
          <div
            className={`hs-accordion-content w-full overflow-hidden transition-[height] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="mt-2 gap-y-2">
              {item.phara.map((items, idx) => (
                <li key={idx}>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-[#334155] rounded-md focus-within:bg-gray-100 hover:bg-gray-100"
                    href="/"
                  >
                    <DotIcon />
                    {items.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
