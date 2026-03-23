import { useRouter } from "next/navigation";

const Slide5 = () => {
  const nav = useRouter();
	return (
		<div className="flex items-center justify-center flex-col gap-8">
			<p className="text-white text-2xl lg:text-4xl font-bold w-[70%] text-center">
				Treated unfairly? Misjudged? Misunderstood?
			</p>
			<h1 className="text-[#08f345] text-3xl lg:text-6xl font-bold">
				EQUALITY & DIVERSITY
			</h1>
			<p className="text-white w-[70%] text-center text-2xl lg:text-4xl font-bold">
				‘ We specialise in supporting groups and individuals who have been
				treated unfairly, and help raise awareness ’
			</p>
			<button
				onClick={() => nav.push("/free-suitability-session")}
				className="bg-[#f37608] shadow-lg mt-10 hover:scale-[103%] transition-all hover:bg-[#d86908] cursor-pointer text-white px-12 text-2xl py-4 rounded-full"
			>
				Find Out More
			</button>
		</div>
	);
};

export default Slide5;
