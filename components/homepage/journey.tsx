"use client";

import React from "react";
import JourneyCard from "./journeyCard";
import { ScrollFade } from "../scrollReveal";

const journeyCards = [
	{
		src: "/journey/20s.jpeg",
		title: "Young People",
		id: "young-people",
		content:
			"Young people and millennials are navigating constant change. Balancing financial pressure, career uncertainty, and the noise of comparison in a digital world. Many feel overwhelmed, stuck between expectations and the desire for a meaningful, authentic life. Yet they carry huge potential and creativity that just needs direction. Work with me to find clarity and action.",
	},
	{
		src: "/journey/30s.jpeg",
		title: "In Your 30’s",
		id: "30s",
		content:
			"Thirty-somethings are juggling rising responsibilities, careers, relationships, family, finances—while quietly questioning if they’re where they “should” be by now. Many feel caught between stability and the urge for change, managing burnout, shifting priorities, and the pressure to redefine success. It’s a decade of transition, growth, and recalibration. I can help you find growth and direction.",
	},
	{
		src: "/journey/40s.jpeg",
		title: "Mid life",
		id: "mid-life",
		content:
			"Midlife often brings a mix of accomplishment and restlessness. Responsibilities are heavy, priorities are shifting, and many begin questioning whether the path they’re on still fits who they’ve become. It’s a time of thought and the desire for deeper fulfillment. With change on the horizon, guidance can make the journey clearer. I will help you find purpose and energy.",
	},
	{
		src: "/journey/60s.jpeg",
		title: "Retirement",
		id: "retirement",
		content:
			"Retirement and beyond can bring freedom, but also uncertainty. Daily routines shift, identities evolve, and many wonder how to stay purposeful, active, and connected. It’s a chapter filled with possibility—new interests, renewed relationships, and a chance to redefine what a fulfilling life looks like. Support and direction can make this transition smoother. I can help you find meaning and fulfilment at this stage of your life.",
	},
];

const Journey = () => {
	return (
		<div className="p-8 flex flex-col gap-8 text-gray-700 overflow-y-none">
			<h2
				id="journey"
				className="text-4xl lg:text-5xl text-[#f9ca56] uppercase text-center font-bold"
			>
				Where are you on your journey?
			</h2>
			<div className="grid lg:grid-cols-2 gap-12 mx-auto">
				{journeyCards.map((journey, i) => (
					<div className="col-span-2 lg:col-span-1">
						<ScrollFade
							delay={i * 0.5}
							key={i}
							direction={i % 2 ? "right" : "left"}
							initialX={500}
						>
							<JourneyCard
								id={journey.id}
								content={journey.content}
								imageSrc={journey.src}
								title={journey.title}
							/>
						</ScrollFade>
					</div>
				))}
			</div>
		</div>
	);
};

export default Journey;
