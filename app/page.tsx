import Hero from "@/components/homepage/hero";
import InfoCard from "@/components/homepage/infoCard";
import Journey from "@/components/homepage/journey";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <InfoCard />
      <Journey />
    </div>
  );
}
