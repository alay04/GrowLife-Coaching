"use client";

const growSupportPoints = [
	{
		title: "Career Direction",
		description:
			"Confidently pursue and accelerate your career advancement with direction and poise.",
	},
	{
		title: "Personal Growth",
		description:
			"Build empowering habits, and unlock your full potential for meaningful personal growth.",
	},
	{
		title: "Navigating Change",
		description:
			"Develop practical strategies to help you navigate change with confidence and resilience.",
	},
	{
		title: "Trauma Healing",
		description:
			"Gently process past experiences, restore emotional safety, and reclaim a sense of wholeness.",
	},
	{
		title: "Grief",
		description:
			"Navigate loss with compassion, honor your emotions, and find meaning as you heal.",
	},
	{
		title: "Finding Your Purpose",
		description:
			"Discover meaning, align with your values, and create a life that truly fulfills you.",
	},
	{
		title: "Feeling Stuck",
		description:
			"Identify what’s holding you back and create momentum toward meaningful change.",
	},
	{
		title: "Restoring Confidence",
		description:
			"Reclaim your self-worth, trust yourself again, and show up with confidence.",
	},
	{
		title: "Diversity & Inclusion",
		description:
			"Create a workplace culture that values and celebrates diversity, equity, and inclusion.",
	},
];

const GrowSupport = () => {
	return (
		<div className="bg-[#e7e45c] text-gray-700 p-8">
			<div className="flex flex-col gap-6 items-center text-center">
				<h2 className="text-4xl font-bold uppercase text-[#e07f08]">
					How can Grow support you?
				</h2>
				<h3 className="text-2xl font-bold uppercase text-[#e07f08]">
					We have expert knowledge to help you gain clarity in the following
					areas.
				</h3>
				<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-3">
					{growSupportPoints.map((point, index) => (
						<div className="col-span-1 relative flex flex-col justify-center items-center h-[350px]">
							<img
								className="w-full absolute h-full top-0 left-0"
								src="/grow-support-bg.png"
								alt=""
							/>
							<p className="text-2xl font-bold uppercase">{point.title}</p>
							<p className="text-2xl p-8">{point.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GrowSupport;
