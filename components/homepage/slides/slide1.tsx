"use client";
import React from "react";

const Slide1 = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-[#08f345] text-center text-3xl lg:text-6xl font-bold">
        THE EMPOWERING LIFE COACH
      </h1>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-white text-center text-2xl lg:text-4xl font-bold">
          “ The Life That You Want, Want's You Back ”
        </p>
        <p className="text-white text-2xl mt-4 lg:text-4xl font-bold">
          “ Let's Build It ”
        </p>
      </div>
      <button
        onClick={() => alert()}
        className="bg-[#f37608] shadow-lg mt-10 hover:scale-[103%] transition-all hover:bg-[#d86908] cursor-pointer text-white px-12 text-2xl py-4 rounded-full"
      >
        Take the First Step
      </button>
    </div>
  );
};

export default Slide1;
