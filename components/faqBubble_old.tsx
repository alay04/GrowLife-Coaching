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
				className="px-8 py-3 text-2xl cursor-pointer border-5 font-bold rounded-[50%] w-fit text-[#0c6423]"
			>
				{props.question}
			</p>
			<div
				style={{ transform: "translateY(-25vh)", opacity: 0, display: "none" }}
				ref={answerRef}
				className="py-12 px-28 text-2xl border-5 font-bold rounded-[50%] w-fit text-[#6e690d] max-w-[70%] ml-auto"
			>
				{props.children}
			</div>
		</div>
	);
};

export default FaqBubble;
