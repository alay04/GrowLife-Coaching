import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Grow - Life Coaching",
	description:
		"I’m a certified life coach with a strong academic foundation in personal development and human behavior, but my work is equally shaped by the lessons life has taught me first-hand.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar
					menuItems={[
						{
							title: "Home",
							url: "/",
						},
						{
							title: "About Me",
							url: "/",
						},
						{
							title: "Contact",
							url: "/",
						},
						{
							title: "FAQ",
							url: "/",
						},
					]}
				/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
