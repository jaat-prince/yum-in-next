"use client";
import React, { useState } from "react";
import { EarthIcon } from "../Helper/Icon";
import Image from "next/image";
import { languageOptions } from "../Helper/Helper";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  const getLanguageIcon = (languageCode) => {
    if (languageCode === "en") return <EarthIcon />;
    const language = languageOptions.find((lang) => lang.code === languageCode);
    return language ? (
      <Image
        src={language.flagSrc}
        width={24}
        height={16}
        alt={`${language.label} flag`}
        className="w-full max-w-[24px]"
      />
    ) : (
      <EarthIcon />
    );
  };

  return (
    <div className="min-w-[40px] min-h-[40px] bg-[#e5e7eb] rounded-full inline-flex max-md:hidden">
      <div className="relative flex z-50">
        <button
          onClick={toggleDropdown}
          className="focus-within:text-[#f58220] text-[#475569] p-2"
        >
          {getLanguageIcon(selectedLanguage)}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-[50px] w-48 bg-white shadow-lg rounded-md border p-2">
            <ul>
              {languageOptions.map(
                (item, index) =>
                  item.code !== selectedLanguage && (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
                      onClick={() => handleLanguageChange(item.code)}
                    >
                      {item.code === "en" ? (
                        <EarthIcon />
                      ) : (
                        <>
                          <span className="w-full max-w-[24px]">
                            <Image
                              src={item.flagSrc}
                              width={24}
                              height={16}
                              alt={`${item.label} flag`}
                              className="w-full"
                            />
                          </span>
                          <span className="text-[14px] font-normal text-[#1E293B]">
                            {item.label}
                          </span>
                        </>
                      )}
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
