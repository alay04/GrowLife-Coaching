"use client";

const ContactForm = () => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const body = `
First Name: ${formData.get("firstName")}
Last Name: ${formData.get("lastName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Message:
${formData.get("message")}
`;

		const mailto = `mailto:info@growlifecoaching.co.uk?subject=${encodeURIComponent(
			"New submission from Get in Touch form"
		)}&body=${encodeURIComponent(body)}`;

		window.open(mailto);
	}

	return (
		<form
			method="POST"
			className="grid grid-cols-2 gap-4"
			onSubmit={handleSubmit}
		>
			<label className="col-span-1 flex flex-col gap-2 text-gray-800">
				<span>First Name</span>
				<input
					type="text"
					placeholder="Enter your first name"
					className="p-2 border-2 border-gray-300 rounded-md"
					name="firstName"
				/>
			</label>
			<label className="col-span-1 flex flex-col gap-2 text-gray-800">
				<span>Last Name</span>
				<input
					type="text"
					placeholder="Enter your last name"
					className="p-2 border-2 border-gray-300 rounded-md"
					name="lastName"
				/>
			</label>
			{/* email */}
			<label className="col-span-2 flex flex-col gap-2 text-gray-800">
				<span>Email</span>
				<input
					type="email"
					placeholder="Enter your email"
					className="p-2 border-2 border-gray-300 rounded-md"
					name="email"
				/>
			</label>
			{/* phone */}
			<label className="col-span-2 flex flex-col gap-2 text-gray-800">
				<span>Phone</span>
				<input
					type="tel"
					placeholder="Enter your phone number"
					className="p-2 border-2 border-gray-300 rounded-md"
					name="phone"
				/>
			</label>
			{/* message */}
			<label className="col-span-2 flex flex-col gap-2 text-gray-800">
				<span>What can we help you with?</span>
				<textarea
					placeholder="Tell me about your goal and what you would like to achieve..."
					rows={4}
					name="message"
					className="p-2 border-2 border-gray-300 rounded-md"
				></textarea>
			</label>
			{/* submit button */}
			<button
				type="submit"
				className="col-span-2 cursor-pointer p-2 bg-amber-500 text-white border-2 border-amber-500 rounded-lg font-bold text-lg"
			>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
