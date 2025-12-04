"use client";

const BookNowButton = () => {
	function handleClick() {
		console.log("Book Now clicked");
	}
	return (
		<button
			onClick={handleClick}
			className="bg-green-600 cursor-pointer hover:bg-green-700 active:bg-green-800 text-white p-2 rounded-lg hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-[1px]"
		>
			Book Now
		</button>
	);
};

export default BookNowButton;
