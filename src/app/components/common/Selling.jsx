import Image from "next/image";
import React from "react";

function Selling({ img, title, text }) {
  return (
    <>
      <div className="border border-[#e2e8f0] p-4 rounded-lg hover:border-[#f58220] w-full sm:max-w-[356px] transition-all ease-in-out duration-500">
        <Image
          src={img}
          alt="avatar"
          width={322}
          height={251}
          className="w-full max-w-[322px] rounded-full mx-auto mb-2"
        />
        <h1 className="py-2 text-xl font-semibold text-[#1E293B] border-t border-t-[#e2e8f0]">
          {title}
        </h1>
        <p className={`text-lg text-[#64748B] font-medium`}>{text}</p>
      </div>
    </>
  );
}

export default Selling;
