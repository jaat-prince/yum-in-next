"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { arrowData } from "../Helper/Helper";
import Accordion from "./Accordion";
import { DotIcon, ExistIcon, LighIcon, ProIcon } from "../Helper/Icon";

function Sidebr({ isOpen, toggleSidebar }) {
  return (
    <div className="flex">
      <div
        className={`fixed inset-0 bg-[black] bg-opacity-50 z-50 transition-transform transform w-[100% - 259px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`w-[259px] border-r border-r-[#e2e8f0] h-screen overflow-y-auto no-scrollbar bg-[white] z-[100] fixed top-0 left-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div class="sticky top-0 flex h-18 items-center justify-center border-b border-dashed border-default-200 px-6 py-3 h-[72px]">
          <Link href="/" className="" onClick={toggleSidebar}>
            <Image
              src="/assets/png/yum-logo.png"
              height={40}
              width={130}
              alt="logo"
              className="w-full max-w-[130px]"
            />
          </Link>
        </div>
        <div className="justify-between flex flex-col h-[88%]">
          <div className="p-4 h-[60%] overflow-scroll no-scrollbar">
            <ul className="gap-1.5 flex flex-col">
              {arrowData.map((item, index) => (
                <>
                  <Accordion
                    key={index}
                    classicon={item.class}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <div className="px-4 gap-1.5 flex flex-col">
              <div className="bg-img">
                <div class="flex justify-center items-center bg-[#f582200d]">
                  <div class="flex flex-col items-center rounded-md bg-primary/5 bg-cover bg-no-repeat p-4 text-center text-sm text-default-700">
                    <div class="relative -mt-16 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-default-100 bg-white shadow-lg dark:bg-default-50 text-[#F58220]">
                      <LighIcon />
                    </div>
                    <p class="mb-4 text-sm text-[#334155]">
                      🔥 Upgrade Your Plan. Find Out here
                    </p>
                    <button class="rounded bg-[#F58220]/10 px-4 py-2 text-sm font-medium text-[#F58220] transition-all hover:text-white">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>

              <Link
                className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-[#1E293B] font-normal hover:bg-gray-100"
                href="/"
              >
                <ProIcon />
                Profile
              </Link>
              <Link
                className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-[#EF4444] hover:bg-[#EF4444]/10"
                href="/"
              >
                <ExistIcon />
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebr;
