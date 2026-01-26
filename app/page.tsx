"use client";

import Hero from "@/components/homepage/hero";
import InfoCard from "@/components/homepage/infoCard";
import Journey from "@/components/homepage/journey";
import CoachingPoints from "@/components/homepage/coachingPoints";
import GrowSupport from "@/components/homepage/growSupport";
import Statistics from "@/components/statistics";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-amber-50">
      <Hero />
      <InfoCard />
      <CoachingPoints />
      <Statistics />
      <Journey />
      <GrowSupport />
    </div>
  );
}
