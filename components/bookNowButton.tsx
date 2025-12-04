"use client";

const BookNowButton = () => {
	function handleClick() {
		console.log("Book Now clicked");
	}
	return (
		<button
			onClick={handleClick}
			className="bg-green-600 text-2xl cursor-pointer hover:bg-green-700 active:bg-green-800 text-white p-4 rounded-lg hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-[1px] uppercase font-bold"
		>
			Book Now
		</button>
	);
};

export default BookNowButton;
