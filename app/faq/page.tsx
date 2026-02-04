"use client";

import FaqItem from "@/components/faqBubble_old";
import { faqData } from "@/data/faq";
import { useState } from "react";

const Page = () => {
	const [currentlySelected, setCurrentlySelected] = useState(0);

	function handleToggle(i: number) {
		if (i === currentlySelected) setCurrentlySelected(-1);
		else {
			setCurrentlySelected(i);
		}
	}

	return (
		<div className="overflow-x-hidden bg-amber-50 min-h-[90vh] text-gray-900 p-8">
			<div className="mt-25"></div>
			<div
				className="relative w-full bg-contain bg-no-repeat flex flex-col justify-center items-center"
			>
				<h1 className="text-4xl text-yellow-400 text-center font-bold mb-8">Frequently Asked Questions</h1>
				<div className="z-10 flex flex-col gap-4 p-4 mr-10 lg:w-[70%]">
					{faqData.map((qna, i) => (
						<FaqItem
							key={i}
							onToggle={() => handleToggle(i)}
							open={i === currentlySelected}
							question={qna.question}
						>
							{qna.answer}
						</FaqItem>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
