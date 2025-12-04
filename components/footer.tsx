import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-white text-black p-8">
			<div className="flex flex-col lg:flex-row gap-4 justify-between">
				<p>© {currentYear} Grow Life Coaching. All rights reserved.</p>
				<p>Neil Fernandes</p>
			</div>
		</footer>
	);
};

export default Footer;
