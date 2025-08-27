import Image from "next/image";
import React from "react";
import hero from "../../../../public/hero.png";
import frame from "../../../../public/Frame.png";
import group from "../../../../public/Group.png";

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-12  w-11/12 mx-auto px-8 py-5 ">
        <div className="bg-[#EBE3CC]  space-y-4 col-span-7">
          <div className="flex justify-start items-center ">
            <Image
              src={frame}
              className="w-[40px] h-[20px] alt='frame' "
            ></Image>
            <h2 className="text-[#0192ED]">Available in select states</h2>
          </div>
          <div className="flex relative">
            <h1 className="text-8xl font-bold max-w-6xl ">
              EVERYTHING <span className="text-[#ED5C01]">YOU NEED,</span>ALL IN
              ONE PLACE
            </h1>
            <Image
              src={group}
              alt="frame"
              className="w-[180px] h-[150px] absolute right-3 top-16"
            ></Image>
          </div>

          <button className="btn btn-primary bg-[#ED5C01] rounded-3xl border-none">
            Shop Now
          </button>
        </div>
        <div className="bg-[#062D3E]  col-span-5 rounded-lg ">
          <Image
            src={hero}
            className="max-w-sm rounded-lg shadow-2xl w-[500px] h-[450px] relative right-5 "
          />
        </div>
      </div>
    </div>
  );
}
