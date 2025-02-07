"use client";
import React, { useState } from "react";
import { NotiIcon } from "../Helper/Icon";

function Notifi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative w-full max-w-[40px] ml-[200px]">
      <button
        className="w-[40px] h-[40px] bg-[#e5e7eb] rounded-full flex justify-center items-center text-[#475569] focus-within:text-[#f58220]"
        onClick={toggleDropdown}
      >
        <NotiIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-md border p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eos,
          corrupti mollitia similique magnam distinctio porro ipsam ea, vitae
          alias, quas saepe voluptatibus quae autem quaerat debitis labore
          dolorem adipisci.
        </div>
      )}
    </div>
  );
}

export default Notifi;
