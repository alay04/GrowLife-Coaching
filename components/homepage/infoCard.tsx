"use client";

import BookNowButton from "../bookNowButton";
import { ScrollFade } from "../scrollReveal";

const coachingMethods = [
	"Using online platforms such as - Zoom, Microsoft Teams or Google Meet.",
	"Telephone and/or Video Call",
	"In person. (Subject to location).",
];

const bulletPoints = [
	"Break free from old patterns.",
	"Gain clarity about what you truly want in your personal or professional life.",
	"Build confidence you can feel.",
	"Create meaningful goals.",
	"Develop healthier values.",
	"Reconnect with yourself.",
	"Turn thoughts into transitions.",
	"Live with purpose and happiness.",
];

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
			<div className="m-8 text-gray-700 text-justify col-span-5 lg:col-span-3 flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h3 className="text-2xl font-bold">
						Is My Coaching Strategy for You?
					</h3>
					<p className="text-lg">Yes, it is for you if you want to:</p>
					<ul className="list-disc pl-8">
						{bulletPoints.map((point, index) => (
							<ScrollFade start="top 92%" key={index}>
								<li className="text-lg">{point}</li>
							</ScrollFade>
						))}
					</ul>
					<h3 className="text-2xl font-bold">What You Can Expect</h3>
					<p>
						My coaching is practical, compassionate, and tailored to you.
						Together we will uncover what’s holding you back, explore what’s
						possible, and design a plan that supports long-term change, in a
						space that’s safe and non-judgmental.
					</p>
					<h3 className="text-2xl font-bold">How Do I Coach?</h3>
					<ul className="list-disc pl-8">
						{/* make a list of const */}

						{coachingMethods.map((method, index) => (
							<ScrollFade start="top 92%" key={index}>
								<li className="text-lg">{method}</li>
							</ScrollFade>
						))}
					</ul>
					<h3 className="text-2xl font-bold">Ready to Begin?</h3>
					<p>Your transformation starts with a single conversation.</p>
					<p>
						Book your FREE clarity session and let’s explore what’s possible for
						you!
					</p>
					<BookNowButton />
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
