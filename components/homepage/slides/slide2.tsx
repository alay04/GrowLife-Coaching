import React from "react";

const Slide2 = () => {
	return (
		<div className="flex items-center justify-center flex-col gap-8">
			<p className="text-white text-center text-2xl lg:text-4xl font-bold">
				Fear of failure? Afraid to begin?
			</p>
			<h1 className="text-[#08f345] text-3xl lg:text-6xl font-bold">
				SELF CONFIDENCE
			</h1>
			<p className="text-white w-[70%] text-center text-2xl lg:text-4xl font-bold">
				‘ I help you recognise your strength's, overcome limiting beliefs, and
				take postitive steps ’
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

export default Slide2;
