import React from "react";
import { DownIcon } from "../Helper/Icon";
import { tableData } from "../Helper/Helper";
import Image from "next/image";
import Customselect from "../common/Customselect";
import Customslec from "../common/Customslec";

function Table() {
  return (
    <div>
      <div className="rounded-lg border border-default-200 mt-10 2xl:mt-6">
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap">
            <h2 className="text-xl font-semibold text-[#1e293b]">
              Recent Orders
            </h2>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <Customselect />
              <Customslec />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto h-[568px] overflow-y-scroll no-scrollbar">
          <table className="w-full">
            <thead className="bg-[#f1f5f9]">
              <tr className="text-start">
                <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:min-w-[130px]">
                  Order ID
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:min-w-[300px]">
                  Dish
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-[#1e293b] max-sm:w-[200px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#64748b] max-sm:w-[200px] hover:text-primary-500 hover:text-[#f58220] transition-all ease-in-out duration-300">
                    <a href="/">{item.title}</a>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-[#64748b] max-sm:w-[300px]">
                    <div className="flex items-center gap-4">
                      <div className="">
                        <div className="w-[72px] h-[72px]">
                          <Image
                            src={item.img}
                            height={72}
                            width={72}
                            alt="logo"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="grow">
                        <p className="mb-1 text-sm text-[#64748b]">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <span>{item.rate}</span>
                            <span>{item.rate}</span>
                            <span>{item.rate}</span>
                            <span>{item.rate}</span>
                            <span>{item.rate}</span>
                          </div>
                          <h6 className="mt-1 text-xs text-[#64748b]">
                            {item.text}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#64748b] max-sm:w-[200px]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
