"use client";
import React, { useState } from "react";
import { NotiIcon } from "../Helper/Icon";
import Image from "next/image";

function Notifi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative w-full max-w-[40px] max-md:hidden">
      <button
        className="w-[40px] h-[40px] bg-[#e5e7eb] rounded-full flex justify-center items-center text-[#475569] focus-within:text-[#f58220] relative"
        onClick={toggleDropdown}
      >
        <span class="absolute top-[-1px] right-[4px] badge rounded-full bg-[#F97316] text-[#fff] text-xs font-normal w-[16px] h-[16px]">
          2
        </span>
        <NotiIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-96 bg-white shadow-lg rounded-md border p-2">
          <div className="flex items-center justify-between px-4 py-2">
            <h6 className="text-sm font-medium text-[#1E293B]">Notification</h6>
            <a className="text-xs font-normal text-[#6478B]" href="/">
              Clear All
            </a>
          </div>
          <div className="border-y border-dashed border-default-200 p-4">
            <div className="overflow-y-auto h-[270px] no-scrollbar">
              <div>
                <div>
                  <div className="p-3">
                    <div>
                      <h5 className="mb-2 text-xs text-[#334355] font-normal">
                        Today
                      </h5>
                      <a href="" className="mb-4 flex items-center">
                        <Image
                          src="/assets/png/people-1.png"
                          alt="avatar"
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="ms-2 w-full">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium text-[#1E293B]">
                              Datacorp
                            </h5>
                            <small className="inline-flex text-xs text-[#64748B]">
                              1 minute ago
                            </small>
                          </div>
                          <small className="text-xs text-[#94A3B8]">
                            Caleb Flakelar commented on Adm....
                          </small>
                        </div>
                      </a>
                      <a className="mb-4 flex items-center" href="">
                        <div className="">
                          <Image
                            src="/assets/png/people-2.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="ms-2 w-full">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium text-[#1E293B]">
                              Admin
                            </h5>
                            <small className="inline-flex text-xs text-[#64748B]">
                              1 hour ago
                            </small>
                          </div>
                          <small className="text-xs text-[#94A3B8]">
                            New user registered
                          </small>
                        </div>
                      </a>
                      <a className="mb-4 flex items-center" href="">
                        <div className="">
                          <Image
                            src="/assets/png/people-3.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="ms-2 w-full">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium text-[#1E293B]">
                              Cristina Pride
                            </h5>
                            <small className="inline-flex text-xs text-[#64748B]">
                              2 hours ago
                            </small>
                          </div>
                          <small className="text-xs text-[#94A3B8]">
                            Hi, How are you? What about our ne....
                          </small>
                        </div>
                      </a>
                      <h5 className="mb-2 text-xs text-[#334355] font-normal">
                        Yesterday
                      </h5>
                      <a className="mb-4 flex items-center" href="">
                        <Image
                          src="/assets/png/people-4.png"
                          alt="avatar"
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="ms-2 flex-grow">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium text-[#1E293B]">
                              Datacorp
                            </h5>
                            <small className="inline-flex text-xs text-[#64748B]">
                              1 day ago
                            </small>
                          </div>
                          <small className="text-xs text-[#94A3B8]">
                            Caleb Flakelar commented on Adm...
                          </small>
                        </div>
                      </a>
                      <a className="flex items-center" href="">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/png/people-5.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="ms-2 flex-grow">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-medium text-[#1E293B]">
                              Karen Robinson
                            </h5>
                            <small className="inline-flex text-xs text-[#64748B]">
                              1 day ago
                            </small>
                          </div>
                          <small className="text-xs text-[#94A3B8]">
                            Wow ! this admin looks good and a.....
                          </small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 text-center text-[#f58220] font-medium text-[14px] w-full">
            View All
          </button>
        </div>
      )}
    </div>
  );
}

export default Notifi;
