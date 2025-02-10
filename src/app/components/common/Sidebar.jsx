"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { arrowData, sideData } from "../Helper/Helper";
import Linker from "../common/Linker";
import Accordion from "./Accordion";
import { DotIcon } from "../Helper/Icon";

function Sidebar() {
  return (
    <div className="w-[259px] border-r border-r-[#e2e8f0] h-screen">
      <div class="sticky top-0 flex h-18 items-center justify-center border-b border-dashed border-default-200 px-6 py-3 h-[72px]">
        <Link href="/" className="">
          <Image
            src="/assets/png/yum-logo.png"
            height={40}
            width={130}
            alt="logo"
            className="flex h-10 dark:hidden"
          />
          <Image
            src="/assets/png/yum-logo.png"
            height={40}
            width={130}
            alt="logo"
            className="hidden h-10 dark:flex"
          />
        </Link>
      </div>
      <div className="p-4">
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
    </div>
  );
}

export default Sidebar;
