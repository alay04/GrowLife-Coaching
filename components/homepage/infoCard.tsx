"use client";

const InfoCard = () => {
	return (
		<div className="min-h-[80vh] flex flex-col gap-8 p-8 bg-[#f7fcf9]">
			<h2 className="lg:text-5xl text-center text-3xl text-gray-800 font-bold">
				Grow Life Coaching{" "}
				{/* <span className="text-orange-400">The London Life Coach</span> */}
			</h2>
			<div className="grid grid-cols-5">
				<a
					href="/about-me"
					className="h-[80vh] relative col-span-5 lg:col-span-2 mx-auto m-8 group duration-300 hover:scale-[105%] hover:-rotate-2 transition-transform w-fit"
				>
					<img src="/Neil.jpg" className="h-full rounded-xl w-fit" alt="" />
					<div className="absolute -right-8 group-hover:-rotate-8 duration-300 transition-transform text-white bg-green-600 p-4 rounded-2xl -translate-y-[10vh]">
						<h3 className="text-xl">"Transform Your Life"</h3>
						<p className="text-lg">- Neil, The Grow Life Coach</p>
					</div>
				</a>
				<div className="m-8 text-gray-700 text-justify col-span-5 lg:col-span-3 flex flex-col gap-8">
					<p className="text-xl">
						Hi, <b>I’m Neil Fernandes</b>
					</p>
					<p>
						I’m a certified life coach with a strong academic foundation in
						personal development and human behavior, but my work is equally
						shaped by the lessons life has taught me first-hand. The challenges
						I’ve faced—and the growth they demanded—have given me a deep
						understanding of what real change looks and feels like. This blend
						of knowledge and lived experience allows me to support others with
						both expertise and genuine empathy.
					</p>
					<p>
						My passion has always been helping people reconnect with their
						strength, clarity, and sense of purpose. I’m dedicated to creating a
						safe, encouraging space where you can explore what is possible and
						take meaningful steps toward the life you want to live. Whether you
						are seeking direction, healing, or personal growth, I’m here to walk
						beside you and help you move forward with confidence.
					</p>
					<p>
						Whether it be one to one, groups, organisations or teams, I will
						work with you to create a plan tailored to your needs and to ensure
						you get the very most out of what you require.
					</p>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
