const WhatsappButton = () => {
	const phoneNumber = "+447592526368";
	return (
		<a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 flex flex-col justify-center items-center gap-2 right-4 z-50 w-12 cursor-pointer lg:w-15 text-black rounded-full">
			<img src="/whatsapp.png" alt="" />
		</a>
	);
};

export default WhatsappButton;
