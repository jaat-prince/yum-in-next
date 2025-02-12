import React from "react";
import Dashbr from "../common/Dashbr";
import { RightIcon } from "../Helper/Icon";
import { boardData } from "../Helper/Helper";

function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#1E293B]">Dashboard</h1>
        <p className="text-sm font-normal text-[#1E293B] hover:text-[#F58220] transition-all ease-in-out duration-500 gap-2 flex items-center cursor-pointer">
          Admin
          <span>
            <RightIcon />
          </span>
          <span className="text-[#F58220]">Dashboard</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-6 mt-6">
        {boardData.map((item, index) => {
          return (
            <Dashbr
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
              tclass={item.class}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
