import React from "react";
import { FaClock, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ConnectCard = () => {
	return (
		<div className="text-gray-800 flex flex-col gap-6 bg-white p-8 shadow-lg rounded-2xl">
			<h2 className="text-2xl font-bold">Let's Talk</h2>
			<div className="flex flex-col gap-6">
				<div className="flex gap-4">
					<div className="bg-amber-200 w-14 h-14 p-2 rounded-lg flex justify-center items-center">
						<FaPhone size={25} className="rotate-90 text-amber-500" />
					</div>
					<div>
						<p className="font-bold text-lg">Phone</p>
						<p className="text-gray-700">+44 7592 526 368</p>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-amber-200 w-14 h-14 p-2 rounded-lg flex justify-center items-center">
						<IoMail size={25} className="text-amber-500" />
					</div>
					<div>
						<p className="font-bold text-lg">Email</p>
						<p className="text-gray-700">info@growlifecoaching.co.uk</p>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-amber-200 w-14 h-14 p-2 rounded-lg flex justify-center items-center">
						<FaClock size={25} className="text-amber-500" />
					</div>
					<div>
						<p className="font-bold text-lg">Availability</p>
						<p className="text-gray-700">Flexible Scheduling</p>
						<p className="text-gray-700 text-sm">
							Please refer to the online booking page
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export function ConsultationCard() {
	return (
		<div className="text-gray-800 flex flex-col h-full justify-center gap-6 bg-amber-400 p-8 shadow-lg rounded-2xl">
			<p className="text-2xl lg:text-3xl font-bold">Free Consultation</p>
			<p className="text-gray-700 text-lg">
				Lets talk! We offer a complimentary initial phone call to discuss your
				goals and how we can achieve them.
			</p>
		</div>
	);
}

export default ConnectCard;
