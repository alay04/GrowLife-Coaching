import BookNowButton from "../bookNowButton";
import { ScrollFade } from "../scrollReveal";

const coachingMethods = [
	<>
		Using online platforms such as -{" "}
		<b>Zoom, Microsoft Teams or Google Meet.</b>
	</>,
	<>Telephone and/or Video Call</>,
	<>In person. (Subject to location).</>,
];

const bulletPoints = [
	<>
		<b>Break free</b> from old patterns.
	</>,
	<>
		Gain <b>clarity</b> about what you truly want in your personal or
		professional life.
	</>,
	<>
		Build <b>confidence</b> you can feel.
	</>,
	<>
		Create <b>meaningful goals</b>.
	</>,
	<>
		Develop <b>healthier values</b>.
	</>,
	<>Reconnect with yourself.</>,
	<>Turn thoughts into transitions.</>,
	<>
		Live with <b>purpose and happiness</b>.
	</>,
];

const CoachingPoints = () => {
	return (
		<div className="p-8 text-gray-700 bg-amber-50 text-justify col-span-5 lg:col-span-3 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-bold">Is My Coaching Strategy for You?</h3>
				<p className="text-xl">Yes, it is for you if you want to:</p>
				<ul className="list-disc flex flex-col gap-2 pl-8">
					{bulletPoints.map((point, index) => (
						<ScrollFade start="top 92%" key={index}>
							<li className="text-lg">{point}</li>
						</ScrollFade>
					))}
				</ul>
				<h3 className="text-2xl font-bold">What You Can Expect</h3>
				<p className="text-xl">
					My coaching is practical, compassionate, and tailored to you. Together
					we will uncover what’s holding you back, explore what’s possible, and
					design a plan that supports long-term change, in a space that’s safe
					and non-judgmental.
				</p>
				<h3 className="text-2xl font-bold">How Do I Coach?</h3>
				<ul className="list-disc flex flex-col gap-2 pl-8">
					{coachingMethods.map((method, index) => (
						<ScrollFade start="top 92%" key={index}>
							<li className="text-lg">{method}</li>
						</ScrollFade>
					))}
				</ul>
				<h3 className="text-2xl font-bold">Ready to Begin?</h3>
				<p className="text-xl">
					Your transformation starts with a single conversation.
				</p>
				<p className="text-xl">
					Book your <b>FREE</b> clarity session and let’s explore what’s
					possible for you!
				</p>
				<BookNowButton />
			</div>
		</div>
	);
};

export default CoachingPoints;
