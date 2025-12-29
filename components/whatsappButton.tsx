import React from "react";

const WhatsappButton = () => {
	return (
		<button className="fixed bottom-4 flex flex-col justify-center items-center gap-2 right-4 z-50 w-12 cursor-pointer lg:w-15 text-black hover:shadow-lg hover:shadow-green-200 rounded-full">
			<img src="/whatsapp.png" alt="" />
			<p className="text-nowrap">Contact us</p>
		</button>
	);
};

export default WhatsappButton;
