import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

type Props = {
	question: React.ReactNode | string;
	children?: React.ReactNode | string;
	visible: boolean;
	color?: "green" | "orange";
	onToggle?: () => void;
};

const FaqBubble = ({
	question,
	children,
	visible,
	onToggle,
	color = "green",
}: Props) => {
	const answerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!answerRef.current) return;

		if (visible) {
			gsap.fromTo(
				answerRef.current,
				{ height: 0, opacity: 0 },
				{
					height: "auto",
					opacity: 1,
					duration: 0.4,
					ease: "power2.out",
				}
			);
		} else {
			gsap.to(answerRef.current, {
				height: 0,
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
			});
		}
	}, [visible]);

	const isGreen = color === "green";

	return (
		<div
			className={`p-4 rounded-lg border-4 ${
				isGreen ? "border-[#17fcaa]" : "border-[#e4ee2d]"
			}`}
		>
			<div
				onClick={onToggle}
				className={`${
					isGreen ? "text-[#17fcaa]" : "text-[#e4ee2d]"
				} text-lg lg:text-3xl cursor-pointer flex flex-row justify-between items-center font-bold`}
			>
				<p>{question}</p>
				{visible ? <FaCaretUp size={25} /> : <FaCaretDown size={25} />}
			</div>

			<div
				ref={answerRef}
				className={`overflow-hidden ${
					isGreen ? "text-[#17fcaa]" : "text-[#e4ee2d]"
				}`}
				style={{
					height: visible ? "auto" : 0,
					opacity: visible ? 1 : 0,
				}}
			>
				sdsdsd
				<hr className="mb-2 mt-3 border-2" />
				{children}
			</div>
		</div>
	);
};

export default FaqBubble;
