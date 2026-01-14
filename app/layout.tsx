import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsappButton";

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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
					rel="stylesheet"
				/>
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
							title: "About",
							url: "/about",
						},
						{
							title: "Services",
							children: [
								{
									title: "Young People",
									url: "/#young-people",
								},
								{
									title: "In Your 30's",
									url: "/#30s",
								},
								{
									title: "Mid-Life",
									url: "/#mid-life",
								},
								{
									title: "Retirement",
									url: "/#retirement",
								},
							],
						},
						{
							title: "Sessions",
							children: [
								{
									title: "Free Suitability Session",
									url: "/free-suitability-session",
								},
								{
									title: "3 Session Coaching Plan",
									url: "/3-session-coaching-plan",
								},
								{
									title: "6 Session Coaching Plan",
									url: "/6-session-coaching-plan",
								},
								{
									title: "Personality Assessment",
									url: "/personality-assessment",
								},
								{
									title: "Strength Assessment",
									url: "/strength-assessment",
								},
							],
						},
						{
							title: "Testimonials",
							url: "/testimonials",
						},
						{
							title: "FAQ's",
							url: "/faq",
						},
						{
							title: "Contact",
							url: "/contact",
						},
					]}
				/>
				{children}
				<WhatsappButton />
				<Footer />
			</body>
		</html>
	);
}
