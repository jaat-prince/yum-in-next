import React from "react";
import Selling from "../common/Selling";
import { sellData } from "../Helper/Helper";
import { RightIcon } from "../Helper/Icon";

function Best() {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#020617]">Category</h1>
        <p className="text-sm font-medium text-[#F58220] transition-all ease-in-out duration-500 gap-2 flex items-center cursor-pointer">
          View all
          <span>
            <RightIcon />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sellData.map((item, index) => (
          <>
            <Selling
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Best;
