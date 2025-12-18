"use client";

const Page = () => {
	return (
		<div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
			<div className="mt-20"></div>
			<h1 className="text-3xl lg:text-5xl text-[#08b434] mb-4 uppercase font-bold text-center">
				PERSONALITY TEST
			</h1>
			<div className="text-center flex flex-col justify-center items-center gap-2 text-2xl lg:text-3xl mb-4 ">
				<p>Want to understand yourself on a deeper, more meaningful level?</p>
				<p>Find out the patterns that shape how you think and feel?</p>
			</div>
			<div className="flex flex-col my-8 lg:flex-row justify-center items-center gap-8">
				<img
					src="/personality-assessment/001.jpeg"
					className="mx-auto lg:w-[50%]"
					alt=""
				/>
				<img
					src="/personality-assessment/002.jpeg"
					className="mx-auto lg:w-[50%]"
					alt=""
				/>
			</div>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				The Personality Assessment is a powerful self-discovery tool designed to
				help you better understand who you are, how you operate, and why you
				respond to life the way you do. If you’ve ever found yourself repeating
				the same patterns, feeling misunderstood, or unsure why certain
				situations feel more challenging than others, this assessment offers
				clarity and insight where awareness begins.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				Through a thoughtfully designed series of questions, the test explores
				your natural tendencies, communication style, decision-making patterns,
				strengths, and potential blind spots. Rather than placing you in a box,
				it provides a deeper understanding of your unique personality framework.
				Highlighting both what comes naturally to you and where growth is
				possible. This awareness can be incredibly empowering, helping you make
				more intentional choices in your personal life, relationships, and work.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				Once you receive your results, you’ll gain clear, practical insight into
				how your personality influences your habits, behaviours, and emotional
				responses. You’ll begin to understand what motivates you, what drains
				you, and how you can work with your natural traits rather than against
				them. Many people experience lightbulb moments that bring immediate
				clarity, self-compassion, and relief.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				The Personality Assessment is ideal if you’re seeking greater
				self-awareness, improved communication, or a clearer sense of direction.
				It can be a valuable standalone tool or a powerful complement to
				coaching, offering a shared language and deeper insight that supports
				meaningful progress. By understanding yourself more fully, you create
				the foundation for intentional growth, healthier relationships, and more
				aligned decision-making.
			</p>
			<p className="lg:text-justify text-xl lg:text-2xl mb-4">
				This is more than just a test, it’s an invitation to reconnect with
				yourself, gain clarity, and take the first step toward lasting, informed
				change.
			</p>
			<div className="flex flex-col justify-center mt-8 items-center gap-4">
				<p className="text-3xl font-bold flex flex-col lg:flex-row gap-2 items-center">
					<span className="uppercase">PRICE: £40</span>
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
