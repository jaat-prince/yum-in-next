"use client";
import React, { useState } from "react";
import { languageOptions, selectData, selecterData } from "../Helper/Helper";
import { DownIcon } from "../Helper/Icon";

function Customslec() {
  const [isOpen, setIsOpen] = useState(false);
  const [filtertype, setFiltertype] = useState("All");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language) => {
    setFiltertype(language);
    setIsOpen(false);
  };

  return (
    <>
      {selectData.map((item, index) => (
        <div
          key={index}
          className="flex items-center py-3 px-5 bg-[#f1f5f9] cursor-pointer relative min-w-[129px]  gap-1 rounded-md"
          onClick={toggleDropdown}
        >
          <p className="text-[#334155]">{item.title}</p>

          <button className=" text-[#475569]">{filtertype}</button>
          <span>
            <DownIcon />
          </span>

          {isOpen && (
            <div className="absolute -right-5 mt-[50px] w-48 bg-white shadow-lg rounded-md border p-2 top-2 z-[100]">
              <ul>
                {item.phara.map((items, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
                    onClick={() => handleLanguageChange(items.text)}
                  >
                    {items.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Customslec;
