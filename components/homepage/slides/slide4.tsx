import React from "react";

const Slide4 = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <p className="text-white text-2xl lg:text-4xl font-bold w-[70%] text-center">
        Struggling in your 9-5? Do you want to start that business idea but
        don't know how?
      </p>
      <h1 className="text-[#08f345] text-center text-3xl lg:text-6xl font-bold">
        CAREER DIRECTION
      </h1>
      <p className="text-white w-[70%] text-center text-2xl lg:text-4xl font-bold">
        “ I have a wealth of experience in helping people find their
        professional purpose ”
      </p>
      <button
        onClick={() => alert()}
        className="bg-[#f37608] shadow-lg mt-10 hover:scale-[103%] transition-all hover:bg-[#d86908] cursor-pointer text-white px-12 text-2xl py-4 rounded-full"
      >
        Find Out More
      </button>
    </div>
  );
};

export default Slide4;
