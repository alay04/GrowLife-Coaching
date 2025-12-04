import Carousel from "../carousel";

const Hero = () => {
	return (
		<div className="h-screen">
			<Carousel
				// tint="#24bf8020"
				tint="rgba(28 46 24 / 0.23)"
				delay={3000} // in milliseconds
				images={[
					"/home/00.jpg",
					"/home/01.jpeg",
					"/home/02.jpeg",
					"/home/03.jpeg",
				]}
				overlays={[
					<div className="">
						<h2 className="text-white text-4xl font-bold">Content 1</h2>
					</div>,
					<div className="">
						<h2 className="text-white text-4xl font-bold">Content 2</h2>
					</div>,
					<div className="">
						<h2 className="text-white text-4xl font-bold">Content 3</h2>
					</div>,
					<div className="">
						<h2 className="text-white text-4xl font-bold">Content 4</h2>
					</div>,
				]}
				crops={["left", "center", "center", "left"]}
			/>
			<div className="flex"></div>
		</div>
	);
};

export default Hero;
