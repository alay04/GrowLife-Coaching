"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface MenuItem {
	title: string;
	url: string;
}

interface NavbarProps {
	menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 p-6 ${
				isScrolled ? "bg-green-50 shadow-sm" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="text-xl font-semibold flex flex-row items-center gap-4 justify-between"
				>
					<img className="h-12" src="/logo_cropped.png" alt="" />
					<div className="flex items-center flex-col gap-0">
						<p className="text-orange-500 uppercase">GROW</p>
						<p className="text-green-500 text-sm uppercase font-light">
							LIFE COACHING
						</p>
					</div>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-8 text-lg">
					{menuItems.map((item) => (
						<li key={item.title}>
							<Link
								href={item.url}
								className={`${
									isScrolled ? "text-gray-900" : "text-white"
								} hover:text-green-500 transition-colors`}
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white text-3xl"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className="fixed inset-0 z-50 bg-green-50/70 backdrop-blur-lg flex flex-col items-center justify-center gap-10 text-3xl md:hidden">
					<button
						className="md:hidden fixed top-0 m-8 right-0 text-3xl"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <FiX /> : <FiMenu />}
					</button>
					{menuItems.map((item) => (
						<Link
							key={item.title}
							href={item.url}
							onClick={() => setIsOpen(false)}
							className="hover:text-green-500"
						>
							{item.title}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
