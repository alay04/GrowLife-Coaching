import Hero from "@/components/homepage/hero";
import InfoCard from "@/components/homepage/infoCard";
import Journey from "@/components/homepage/journey";
import CoachingPoints from "@/components/homepage/coachingPoints";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<InfoCard />
			<CoachingPoints />
			<Journey />
		</div>
	);
}
