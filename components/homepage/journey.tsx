import React from "react";
import JourneyCard from "./journeyCard";
import { ScrollFade } from "../scrollReveal";

const journeyCards = [
	{
		src: "/journey/20s.jpeg",
		title: "Young People",
		content:
			"Young people and millennials are navigating constant change. Balancing financial pressure, career uncertainty, and the noise of comparison in a digital world. Many feel overwhelmed, stuck between expectations and the desire for a meaningful, authentic life. Yet they carry huge potential and creativity that just needs direction. Work with me to find clarity and action.",
	},
	{
		src: "/journey/30s.jpeg",
		title: "In Your 30’s",
		content:
			"Thirty-somethings are juggling rising responsibilities, careers, relationships, family, finances—while quietly questioning if they’re where they “should” be by now. Many feel caught between stability and the urge for change, managing burnout, shifting priorities, and the pressure to redefine success. It’s a decade of transition, growth, and recalibration. I can help you find growth and direction.",
	},
	{
		src: "/journey/40s.jpeg",
		title: "Mid life",
		content:
			"Midlife often brings a mix of accomplishment and restlessness. Responsibilities are heavy, priorities are shifting, and many begin questioning whether the path they’re on still fits who they’ve become. It’s a time of thought and the desire for deeper fulfillment. With change on the horizon, guidance can make the journey clearer. I will help you find purpose and energy.",
	},
	{
		src: "/journey/60s.jpeg",
		title: "Retirement",
		content:
			"Retirement and beyond can bring freedom, but also uncertainty. Daily routines shift, identities evolve, and many wonder how to stay purposeful, active, and connected. It’s a chapter filled with possibility—new interests, renewed relationships, and a chance to redefine what a fulfilling life looks like. Support and direction can make this transition smoother. I can help you find meaning and fulfilment at this stage of your life.",
	},
];

const Journey = () => {
	return (
		<div className="bg-[#07411f9c] p-8 flex flex-col gap-8">
			<h2 className="text-5xl text-center font-bold">
				Where are you on your journey?
			</h2>
			<div className="flex flex-col gap-8">
				{journeyCards.map((journey, i) => (
					<ScrollFade
						key={i}
						direction={i % 2 ? "right" : "left"}
						initialX={200}
					>
						<JourneyCard
							content={journey.content}
							imageSrc={journey.src}
							title={journey.title}
						/>
					</ScrollFade>
				))}
			</div>
		</div>
	);
};

export default Journey;
