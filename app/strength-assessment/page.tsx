"use client";

const Page = () => {
	return (
		<div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
			<div className="mt-20"></div>
			<h1 className="text-3xl lg:text-5xl text-[#08b434] mb-4 uppercase font-bold text-center">
				STRENGTH ASSESSMENT
			</h1>
			<div className="text-center flex flex-col justify-center items-center gap-2 text-2xl lg:text-3xl mb-4 ">
				<p>Do you struggle to identify your natural powers?</p>
				<p>Would you like to realise your full potential?</p>
			</div>
			<div className="flex flex-col my-8 lg:flex-row justify-center items-center gap-8">
				<img
					src="/strength-assessment/001.jpeg"
					className="mx-auto lg:w-[50%]"
					alt=""
				/>
				<img
					src="/strength-assessment/002.jpeg"
					className="mx-auto lg:w-[50%]"
					alt=""
				/>
			</div>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				The Strengths-Based Assessment is a powerful, empowering tool designed
				to help you identify, understand, and intentionally use your natural
				strengths. Rather than focusing on what needs fixing, this assessment
				shifts the lens to what already works. Highlighting the qualities,
				skills, and inner resources that allow you to thrive.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				Through a series of reflective, insight-driven questions, the assessment
				uncovers your core strengths, how they show up in your daily life, and
				how they influence your decision-making, communication, and approach to
				challenges. Many people underestimate or overlook their strengths
				because they come so naturally. This assessment brings them into clear
				focus, helping you recognise the value of what you already possess.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				Once you receive your results, you’ll gain practical insight into how to
				leverage your strengths more intentionally. Whether that’s in your
				personal growth, relationships, career, or leadership. You’ll also gain
				awareness of how overusing or underutilising certain strengths can
				create imbalance, allowing you to make more conscious, aligned choices
				moving forward.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				This assessment is ideal if you’re seeking greater confidence and
				self-trust. It provides a grounded foundation for growth by helping you
				understand what energises you, what supports resilience, and where your
				greatest potential lies. Used on its own or alongside coaching, the
				Strength Based Assessment supports sustainable progress by building from
				a place of capability rather than limitation.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				This is more than just a test, it’s an invitation to reconnect with
				yourself, gain clarity, and take the first step toward lasting, informed
				change.
			</p>
			<div className="flex flex-col justify-center mt-8 items-center gap-4">
				<p className="text-3xl font-bold flex flex-col lg:flex-row gap-2 items-center">
					<span className="uppercase">PRICE: £30</span>
					<span className="text-xl">(Including Evaluation Report)</span>
				</p>
				<button className="bg-green-600 text-lg lg:text-xl cursor-pointer hover:bg-green-700 active:bg-green-800 text-white py-4 px-12 rounded-full hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-[1px] w-fit uppercase font-bold">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default Page;
