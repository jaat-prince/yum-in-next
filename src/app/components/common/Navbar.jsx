import React from "react";
import { EarthIcon, SerachIcon, ZoomIcon } from "../Helper/Icon";
import Drop from "../common/Drop";
import Notifi from "./Notifi";
import Admin from "./Admin";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center border-b border-b-[#e2e8f0] py-3 px-6 h-[72px]">
        <label className="flex gap-3 items-center text-[#475569] py-[10px] px-[16px] border-[#e2e8f0] border rounded-[50px] w-full max-w-[256px] bg-[#f8fafc] focus-within:border-[#f58220]">
          <SerachIcon />
          <input
            type="search"
            placeholder="Search for items..."
            className="border-0 outline-none w-full max-w-[160px] bg-[#f8fafc] placeholder:text-[#475569] text-[#475569] text-[14px] placeholder:text-[14px]"
          />
        </label>
        <div className="flex gap-4 items-center">
          <Drop />
          <button className="min-w-[40px] h-[40px] bg-[#e5e7eb] rounded-full flex justify-center items-center text-[#475569] focus-within:text-[#f58220]">
            <ZoomIcon />
          </button>
          <Notifi />
          <Admin />
        </div>
      </div>
    </>
  );
}

export default Navbar;
