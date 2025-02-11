import React from "react";
import { DownIcon } from "../Helper/Icon";
import { tableData } from "../Helper/Helper";
import Image from "next/image";

function Table() {
  return (
    <div>
      <div class="rounded-lg border border-default-200 max-2xl:mt-10">
        <div class="overflow-hidden p-6">
          <div class="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap">
            <h2 class="text-xl font-semibold text-[#1e293b]">Recent Orders</h2>
            <div class="flex flex-wrap items-center justify-end gap-2">
              <div class="hs-dropdown relative inline-flex">
                <button
                  type="button"
                  class="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-[#334155] transition-all xl:px-5 bg-[#f1f5f9]"
                >
                  Sort : Ascending
                  <DownIcon />
                </button>
                <div class="z-20 mt-4 min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50 hidden">
                  <ul class="flex flex-col gap-1">
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] bg-default-100 text-[#334155]">
                        Ascending
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] text-default-600">
                        Descending
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="hs-dropdown relative inline-flex">
                <button
                  type="button"
                  class="flex items-center gap-2 rounded-md bg-[#f1f5f9] px-4 py-3 text-sm font-medium text-[#334155] transition-all xl:px-5"
                >
                  Status : All
                  <DownIcon />
                </button>
                <div class="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                  <ul class="flex flex-col gap-1">
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] bg-default-100 text-[#334155]">
                        All
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] text-default-600">
                        Paid
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] text-default-600">
                        Cancelled
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center gap-3 rounded px-3 py-2 font-medium transition-all hover:bg-default-100 hover:text-[#334155] text-default-600">
                        Refunded
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="w-full divide-y divide-default-200">
                <thead class="bg-[#f1f5f9]">
                  <tr class="text-start">
                    <th class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:w-[200px]">
                      Order ID
                    </th>
                    <th class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:w-[300px]">
                      Dish
                    </th>
                    <th class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:w-[200px]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#64748b] max-sm:w-[200px] hover:text-primary-500">
                        <a href="/">{item.title}</a>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-[#64748b] max-sm:w-[300px]">
                        <div class="flex items-center gap-4">
                          <div class="">
                            <div class="w-[72px] h-[72px]">
                              <Image
                                src={item.img}
                                height={72}
                                width={72}
                                alt="logo"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-[#64748b]">
                              {item.name}
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <span>{item.rate}</span>
                                <span>{item.rate}</span>
                                <span>{item.rate}</span>
                                <span>{item.rate}</span>
                                <span>{item.rate}</span>
                              </div>
                              <h6 class="mt-1 text-xs text-[#64748b]">
                                {item.text}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#64748b] max-sm:w-[200px]">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
