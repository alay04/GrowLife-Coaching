import React, { useState, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

type Props = {
	question: React.ReactNode | string;
	children?: React.ReactNode | string;
	color?: "green" | "orange";
};

const FaqDropdown = ({
	question,
	children,
	color = "green",
}: Props) => {
	const [open, setOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	const isGreen = color === "green";

	return (
		<div
			className={`rounded-lg border-4 p-4 ${
				isGreen ? "border-[#17fcaa]" : "border-[#e4ee2d]"
			}`}
		>
			{/* Header */}
			<button
				onClick={() => setOpen(!open)}
				className={`w-full flex justify-between items-center font-bold text-left
				${isGreen ? "text-[#17fcaa]" : "text-[#e4ee2d]"}
				text-lg lg:text-3xl`}
			>
				<span>{question}</span>
				{open ? <FaCaretUp size={24} /> : <FaCaretDown size={24} />}
			</button>

			{/* Content */}
			<div
				ref={contentRef}
				className={`overflow-hidden transition-all duration-300 ease-in-out
				${isGreen ? "text-[#17fcaa]" : "text-[#e4ee2d]"}`}
				style={{
					maxHeight: open ? contentRef.current?.scrollHeight : 0,
					opacity: open ? 1 : 0,
				}}
			>
				<hr className="my-3 border-2" />
				<div className="text-base lg:text-lg">{children}</div>
			</div>
		</div>
	);
};

export default FaqDropdown;
