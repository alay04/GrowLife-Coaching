import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

type Props = {
	question: React.ReactNode | string;
	children?: React.ReactNode | string;
	open: boolean;
	onToggle: () => void;
};

const FaqItem = ({ question, children, open, onToggle }: Props) => {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!contentRef.current) return;

		if (open) {
			gsap.to(contentRef.current, {
				height: "auto",
				opacity: 1,
				duration: 0.35,
				ease: "power2.out",
			});
		} else {
			gsap.to(contentRef.current, {
				height: 0,
				opacity: 0,
				duration: 0.25,
				ease: "power2.in",
			});
		}
	}, [open]);

	return (
		<div className="border-b border-gray-200">
			{/* Question Row */}
			<button
				onClick={onToggle}
				className="w-full flex justify-between items-center py-6 text-left text-lg lg:text-xl font-medium"
			>
				<span>{question}</span>
				<span className="text-2xl font-light">
					{open ? <RxCaretUp /> : <RxCaretDown />}
				</span>
			</button>

			{/* Answer */}
			<div
				ref={contentRef}
				className="overflow-hidden"
				style={{ height: 0, opacity: 0 }}
			>
				<div className="pb-6 text-gray-600 text-base lg:text-lg">
					{children}
				</div>
			</div>
		</div>
	);
};

export default FaqItem;
