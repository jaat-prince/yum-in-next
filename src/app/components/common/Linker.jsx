import Link from "next/link";
import React from "react";

function Linker({ icon, text, classlink }) {
  return (
    <Link
      href="/"
      className={`text-[#334155] text-sm py-3 px-4 flex items-center gap-3.5 focus-within:bg-[#f58220]/10 rounded-md focus-within:text-[#f58220] hover:bg-gray-100 cursor-pointer ${classlink}`}
    >
      {icon} {text}
    </Link>
  );
}

export default Linker;
