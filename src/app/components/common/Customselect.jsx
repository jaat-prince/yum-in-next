"use client";
import React, { useState } from "react";
import { languageOptions } from "../Helper/Helper";

function Customselect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Ascending");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center py-3 px-5 bg-[#f1f5f9]">
        <p className="text-[#334155]">Sort : </p>
        <div className="min-w-[40px] min-h-[40px] bg-#f1f5f9] inline-flex max-md:hidden">
          <div className="relative flex z-50">
            <button onClick={toggleDropdown} className=" text-[#475569] p-2">
              {selectedLanguage}
            </button>

            {isOpen && (
              <div className="absolute -right-5 mt-[50px] w-48 bg-white shadow-lg rounded-md border p-2">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
                    onClick={() => handleLanguageChange("Ascending")}
                  >
                    Ascending
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
                    onClick={() => handleLanguageChange(" Descending")}
                  >
                    Descending
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Customselect;
