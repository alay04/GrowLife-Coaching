import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	question: React.ReactNode | string;
	children?: React.ReactNode | string;
	defaultShow?: boolean;
};

const FaqBubble = (props: Props) => {
	const answerRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(props.defaultShow ?? false);

	useEffect(() => {
		if (!visible) {
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
	}, [visible]);

	function toggleAnimation() {
		setVisible((p) => !p);
	}

	return (
		<div>
			<p
				onClick={toggleAnimation}
				className="px-8 py-3 text-2xl cursor-pointer border-5 font-bold rounded-[50%] w-fit text-[#13f850]"
			>
				{props.question}
			</p>
			<div
				style={{ transform: "translateY(-25vh)", opacity: 0, display: "none" }}
				ref={answerRef}
				className="py-12 px-28 text-2xl border-5 font-bold rounded-[50%] w-fit text-[#ddd312] max-w-[70%] ml-auto"
			>
				{props.children}
			</div>
		</div>
	);
};

export default FaqBubble;
