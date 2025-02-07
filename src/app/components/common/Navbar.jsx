import React from "react";
import { EarthIcon, SerachIcon } from "../Helper/Icon";

function Navbar() {
  return (
    <>
      <div>
        <label className="flex gap-3 items-center text-[#475569] py-[10px] px-[16px] border-[#e2e8f0] border rounded-[50px] w-full max-w-[256px] bg-[#f8fafc] focus-within:border-[#f58220]">
          <SerachIcon />
          <input
            type="search"
            placeholder="Search for items..."
            className="border-0 outline-none w-full max-w-[160px] bg-[#f8fafc] placeholder:text-[#475569] text-[#475569] text-[14px] placeholder:text-[14px]"
          />
        </label>
        <button className="focus-within:text-[#f58220] text-[#475569]">
          <EarthIcon />
        </button>
      </div>
    </>
  );
}

export default Navbar;
