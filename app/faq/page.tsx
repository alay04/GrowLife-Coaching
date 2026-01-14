"use client";

import FaqBubble from "@/components/faqBubble_old";
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
				style={{ backgroundImage: 'url("/faq/faq_new_1.jpeg")' }}
				className="relative overflow-y-auto w-full h-[580px] bg-contain bg-no-repeat"
			>
				<div className="z-10 flex flex-col gap-4 p-4 mr-10">
					{faqData.map((qna, i) => (
						<FaqBubble
							key={i}
							visible={i === currentlySelected}
							onToggle={() => handleToggle(i)}
							color={i & 1 ? "green" : "orange"}
							question={qna.question}
						>
							{qna.answer}
						</FaqBubble>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
