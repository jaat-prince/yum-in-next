"use client";
import React, { useState } from "react";
import { ExistIcon, HomeIcon, LandingIcon, ProfileIcon } from "../Helper/Icon";
import Image from "next/image";
import Link from "next/link";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative w-full max-w-[140px]">
      <button
        type="button"
        className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full text-xs font-medium text-default-700 transition-all"
        onClick={toggleDropdown}
      >
        <Image
          src="/assets/png/people-1.png"
          alt="avatar"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="hidden lg:block text-start">
          <p className="text-sm font-medium text-[#334155]">Kaiya Botosh</p>
          <p className="mt-1 text-xs text-[#64748B] font-normal">Admin</p>
        </div>
      </button>

      {isOpen && (
        <div className="min-w-[192px] absolute right-3 w-40 bg-white shadow-lg rounded-md border p-2">
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-[#1E293B] font-normal hover:bg-gray-100"
            href="/"
          >
            <ProfileIcon />
            My Profile
          </Link>
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-[#1E293B] font-normal hover:bg-gray-100"
            href="/"
          >
            <LandingIcon />
            Landing
          </Link>
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-[#1E293B] font-normal hover:bg-gray-100"
            href="/"
          >
            <HomeIcon />
            Home
          </Link>
          <hr className="-mx-2 my-2 border-default-200" />
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-[#EF4444] hover:bg-[#EF4444]/10"
            href="/"
          >
            <ExistIcon />
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
}

export default Admin;
