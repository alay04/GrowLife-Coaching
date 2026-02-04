"use client";

import { meetingLinks } from "@/data/meetingLinks";

const Page = () => {
	return (
		<div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
			<div className="mt-20"></div>
			<h1 className="text-3xl lg:text-5xl text-[#08b434] mb-4 uppercase font-bold text-center">
				6 SESSION COACHING PLAN
			</h1>
			<div className="text-center flex flex-col justify-center items-center gap-2 text-2xl lg:text-3xl mb-4 ">
				<p>Have you experienced trauma?</p>
				<p>low self-esteem?</p>
				<p>Have you lost someone you love?</p>
			</div>
			<div className="grid grid-cols-4 mt-12 gap-8">
				<div className="flex-col justify-around items-center gap-8 col-span-5 lg:col-span-2 order-2 lg:order-1 hidden lg:flex">
					<img src="/6-session/001.jpeg" className="mx-auto" alt="" />
					<img src="/6-session/003.jpeg" className="mx-auto" alt="" />
					<img src="/6-session/002.jpeg" className="mx-auto" alt="" />
				</div>
				<div className="col-span-5 lg:col-span-2 order-1 lg:order-2">
					<img src="/6-session/001.jpeg" className="mx-auto block lg:hidden" alt="" />
					<p className="lg:text-justify text-xl lg:text-2xl mb-4">
						The 6 Session Coaching Plan is designed for those who are ready to
						move beyond subtle change and commit to a meaningful, lasting
						transformation. This is not about quick fixes. It's about creating
						real shifts in how you think, feel, and show up in your life.
					</p>
					<div className="my-4 flex flex-col gap-4">
						<h2 className="text-3xl lg:text-4xl font-bold text-center">
							Aims & Objectives
						</h2>
						<img src="/6-session/003.jpeg" className="mx-auto lg:hidden" alt="" />
						<ul className="list-disc text-xl lg:text-2xl px-2">
							<li>Build self awareness and establish clear direction</li>
							<li>
								Develop skills, strategies and build momentum and confidence
							</li>
							<li>
								Consolidate learning and establish and support sustainable
								change
							</li>
						</ul>
						<p className="text-xl lg:text-2xl">
							Your journey begins with a Suitability Session, a dedicated space
							for clarity and connection. During this session, we explore your
							goals, challenges, and aspirations, ensuring the coaching
							relationship feels aligned, supportive, and right for you. This
							foundation allows us to work together with intention, trust, and
							focus from the very start.
						</p>
						<p className="text-xl lg:text-2xl">
							Following this, you'll move through six deeply personalised
							coaching sessions, tailored specifically to you. Each session
							builds upon the last, helping you develop greater self-awareness,
							uncover limiting patterns, and replace them with empowering
							beliefs and habits. With consistent guidance and structured
							support, you'll gain the confidence to take aligned action and
							create momentum that carries forward beyond our time together.
						</p>
						<p className="text-xl lg:text-2xl">
							This plan is ideal if you're seeking deeper breakthroughs,
							consistent accountability, and the space to explore and evolve at
							a sustainable pace. If you're ready to invest in yourself, commit
							to your growth, and step into the next chapter of your life with
							clarity and confidence, the 6 Session Coaching Plan offers the
							support and structure to help you get there.
						</p>
						<p className="text-xl lg:text-2xl">
							By the end of the six sessions, you can expect to have greater
							certainty around your goals, practical tools to navigate
							challenges, and a stronger sense of direction and confidence in
							your decision-making.
						</p>
						<p className="text-xl lg:text-2xl">
							You'll leave with actionable strategies, sustainable habits, and
							renewed momentum, not just insight, but real change you can see
							and feel in your everyday life.
						</p>
						<p className="text-xl lg:text-2xl">
							If you're ready to take focused action, stay committed to your
							growth, and achieve tangible results, the 6 Session Coaching Plan
							is for you.
						</p>
					</div>
					<div className="my-4 flex flex-col gap-4">
						<h3 className="text-3xl lg:text-4xl font-bold text-center">
							Learning Outcomes
						</h3>
						<img src="/6-session/002.jpeg" className="mx-auto block lg:hidden" alt="" />
						<ul className="list-disc text-xl lg:text-2xl px-2">
							<li>
								You will be able to demonstrate increased self-awareness by
								identifying your values, strengths, challenges, and a clearly
								defined personal goal
							</li>
							<li>
								You can expect to apply effective strategies and tools to
								overcome obstacles, make informed decisions, and take consistent
								action toward your goals.
							</li>
							<li>
								You will be able to evaluate progress and independently maintain
								change, creating a sustainable plan for continued personal
								development beyond the coaching process.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p className="text-center text-xl lg:text-2xl mt-6">
				Coaching doesn’t need to end after your six-session plan. If ongoing
				guidance would support your progress, we can continue our work together,
				developing a lasting partnership that supports you at every step of your
				journey.
			</p>
			<div className="flex flex-col justify-center items-center mt-12 mb-8 gap-4 w-full text-center">
				<p className="text-3xl font-bold uppercase">£450</p>
				<a
					href={meetingLinks["6-session-coaching-plan"]}
					target="_blank"
					className="bg-green-600 text-lg lg:text-xl cursor-pointer hover:bg-green-700 active:bg-green-800 text-white py-4 px-12 rounded-full hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-px w-fit uppercase font-bold"
				>
					Book Now
				</a>
			</div>
		</div>
	);
};

export default Page;
