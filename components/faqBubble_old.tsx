import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	question: React.ReactNode | string;
	children?: React.ReactNode | string;
	visible?: boolean;
	onToggle?: Function;
	color?: string;
};

const FaqBubble = (props: Props) => {
	const answerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (props.visible) {
			gsap.to(answerRef.current, {
				transform: "translateY(0)",
				opacity: "100%",
				display: "block",
			});
		} else {
			gsap.to(answerRef.current, {
				transform: "translateY(-25vh)",
				opacity: "0",
				onComplete: () => {
					answerRef!.current!.style.display = "none";
				},
			});
		}
	}, [props.visible]);

	function toggleAnimation() {
		props.onToggle?.();
	}

	return (
		<div>
			<p
				onClick={toggleAnimation}
				className="px-8 py-3 text-2xl cursor-pointer border-5 font-bold rounded-2xl shadow-lg w-fit flex items-center gap-2 text-shadow-gray-800 border-white"
			>
				<img
					src="/logo_cropped_tinted.png"
					className="w-12 rounded-lg"
					alt=""
				/>
				{props.question}
			</p>
			<div
				style={{ transform: "translateY(-25vh)", opacity: 0, display: "none" }}
				ref={answerRef}
				className="py-12 px-28 ml-6 border-white text-2xl border-5 font-bold rounded-4xl shadow-lg w-fit text-shadow-gray-800 max-w-[70%] mt-4"
			>
				{props.children}
			</div>
		</div>
	);
};

export default FaqBubble;
