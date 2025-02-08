import React from "react";

function Dashbr({ title, subtitle, text, tclass }) {
  return (
    <div className="border border-[#e2e8f0] p-4 rounded-lg hover:border-[#f58220] w-full sm:max-w-[400px] transition-all ease-in-out duration-500">
      <h1 className="text-2xl mb-2 text-[#F58220] font-semibold text-center">
        {title}
      </h1>
      <p className="text-lg mb-4 text-[#020617] font-medium text-center">
        {subtitle}
      </p>
      <p className={`text-sm text-[#22C55E] font-medium text-center ${tclass}`}>
        {text}
      </p>
    </div>
  );
}

export default Dashbr;
