import React from "react";
import Caterogy from "./../common/Caterogy";
import { cateData } from "./../Helper/Helper";
import { RightIcon } from "../Helper/Icon";
function Cate() {
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
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {cateData.map((item, index) => (
          <>
            <Caterogy key={index} img={item.img} text={item.text} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Cate;
