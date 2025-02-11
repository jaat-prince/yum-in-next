import Image from "next/image";
import React from "react";

function Caterogy({ text, img }) {
  return (
    <>
      <div className="border border-[#e2e8f0] py-4 rounded-lg hover:border-[#f58220] w-full sm:max-w-[400px] transition-all ease-in-out duration-500">
        <Image
          src={img}
          alt="avatar"
          width={100}
          height={100}
          className="w-[56px] rounded-full mx-auto"
        />
        <p className={`text-lg text-[#475569] font-medium mt-4 text-center`}>
          {text}
        </p>
      </div>
    </>
  );
}

export default Caterogy;
