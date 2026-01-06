import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const footerLinks = [
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Testimonials",
		path: "/testimonials",
	},
	{
		title: "Services",
		path: "/#journey",
	},
	{
		title: "FAQ",
		path: "/faq",
	},
];

const quickLinks = [
	{
		title: "Mid Life",
		path: "/mid-life",
	},
	{
		title: "Six Session Coaching Plan",
		path: "/6-session-coaching-plan",
	},
	{
		title: "Free Suitability Session",
		path: "/free-suitability-session",
	},
	{
		title: "Booking Calender",
		path: "#",
	},
];

const contactLinks = [
	{
		icon: <img src="/social/phonecall.png" className="w-10" alt="Phone" />,
		path: "tel:+447592526368",
		title: "+44 7592 526 368",
	},
	{
		icon: <img src="/social/email.png" className="w-10" alt="Email" />,
		path: "mailto:info@growlifecoaching.co.uk",
		title: "info@growlifecoaching.co.uk",
	},
];

const socialLinks = [
	{
		img: "/social/facebook.png",
		path: "#",
		title: "Facebook",
	},
	{
		img: "/social/instagram.png",
		path: "#",
		title: "Instagram",
	},
	{
		img: "/social/linkedin.png",
		path: "#",
		title: "LinkedIn",
	},
	{
		img: "/social/tiktok.png",
		path: "#",
		title: "TikTok",
	},
	{
		img: "/social/youtube.png",
		path: "#",
		title: "YouTube",
	},
];

const sessionLinks = [
	{
		title: "Free Suitability Session",
		path: "/free-suitability-session",
	},
	{
		title: "3 Session Coaching Plan",
		path: "/3-session-coaching-plan",
	},
	{
		title: "6 Session Coaching Plan",
		path: "/6-session-coaching-plan",
	},
	{
		title: "Personality Assessment",
		path: "/personality-assessment",
	},
	{
		title: "Strength Assessment",
		path: "/strength-assessment",
	},
];

const policies = [
	{
		title: "Privacy Policy",
		path: "/privacy-policy",
	},
	{
		title: "Terms and Conditions",
		path: "/terms-and-conditions",
	},
	{
		title: "Cookie Policy",
		path: "/cookie-policy",
	},
];

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="p-8 bg-[#04641d] text-white grid grid-cols-4 gap-8">
			<div className="col-span-4 lg:col-span-1 text-xl flex flex-col gap-4">
				<p className="text-center lg:text-left">
					Grow Life Coaching, led by Neil Fernandes. Empowers, guides, provides
					unique tools & strategies and delivers with an empathetic approach you
					do.
				</p>
				<div className="flex flex-col gap-4">
					<p className="text-2xl text-center lg:text-left">Follow Us</p>
					<div className="flex flex-row gap-4 justify-center lg:justify-start">
						{socialLinks.map((link) => (
							<a href={link.path} className="shake">
								<img className="w-10" src={link.img} alt={link.title} />
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="col-span-4 lg:col-span-1 lg:pl-4 text-2xl flex flex-col gap-4 items-center">
				{footerLinks.map((link) => (
					<Link
						key={link.title}
						className="hover:text-orange-400 transition-colors"
						href={link.path}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className="col-span-4 lg:col-span-1 lg:pl-4 text-2xl flex flex-col gap-4 items-center">
				<p className="text-2xl font-black">Sessions</p>
				{sessionLinks.map((link) => (
					<Link
						key={link.title}
						className="hover:text-orange-400 transition-colors"
						href={link.path}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className="col-span-4 lg:col-span-1 lg:pl-4 text-2xl flex flex-col gap-4 items-center">
				<p className="text-2xl font-black">Quick Links</p>
				{quickLinks.map((link) => (
					<Link
						key={link.title}
						className="hover:text-orange-400 transition-colors"
						href={link.path}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className="col-span-4 lg:pl-4 text-2xl flex flex-col gap-4 items-center">
				<p className="text-2xl font-black">Contact Us</p>
				{contactLinks.map((link) => (
					<Link
						key={link.title}
						className="hover:text-orange-400 transition-colors flex flex-row gap-2 items-center"
						href={link.path}
					>
						{link.icon} {link.title}
					</Link>
				))}
			</div>
			<div className="col-span-4 lg:col-span-2">
				<p className="text-center lg:text-left text-lg">
					&copy; {currentYear} Grow Life Coaching.
				</p>
			</div>
			<div className="col-span-4 lg:col-span-2">
				<p className="text-center lg:text-right text-lg">
					&reg; All rights reserved.
				</p>
			</div>
			<div className="col-span-4 flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0 text-lg">
				{policies.map((link) => (
					<Link
						key={link.title}
						className="hover:text-orange-400 transition-colors"
						href={link.path}
					>
						{link.title}
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
