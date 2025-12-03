import React from "react";
import JourneyCard from "./journeyCard";
import { ScrollFade } from "../scrollReveal";

const journeyCards = [
  {
    src: "/journey/lotus.jpg",
    title: "Millenial Life Coaching",
    content:
      "When you’re in your twenties, you’re building the foundation for the rest of your life. You’re finding out a lot of new things about yourself, relationships, your desires and fears. With all the pressure to ‘make it’ and do it quick, choosing one path to happiness or career fulfilment and sticking to it isn't easy. Work with a life coach to find clarity and form a plan of action.",
  },
  {
    src: "/journey/lotus.jpg",
    title: "Millenial Life Coaching",
    content:
      "When you’re in your twenties, you’re building the foundation for the rest of your life. You’re finding out a lot of new things about yourself, relationships, your desires and fears. With all the pressure to ‘make it’ and do it quick, choosing one path to happiness or career fulfilment and sticking to it isn't easy. Work with a life coach to find clarity and form a plan of action.",
  },
  {
    src: "/journey/lotus.jpg",
    title: "Millenial Life Coaching",
    content:
      "When you’re in your twenties, you’re building the foundation for the rest of your life. You’re finding out a lot of new things about yourself, relationships, your desires and fears. With all the pressure to ‘make it’ and do it quick, choosing one path to happiness or career fulfilment and sticking to it isn't easy. Work with a life coach to find clarity and form a plan of action.",
  },
];

const Journey = () => {
  return (
    <div className="bg-[#07411f] p-8 flex flex-col gap-8">
      <h2 className="text-5xl text-center font-bold">
        Where are you on your journey?
      </h2>
      <div className="flex flex-col gap-8">
        {journeyCards.map((journey, i) => (
          <ScrollFade direction={i % 2 ? "right" : "left"} initialX={200}>
            <JourneyCard
              content={journey.content}
              imageSrc={journey.src}
              title={journey.title}
            />
          </ScrollFade>
        ))}
      </div>
    </div>
  );
};

export default Journey;
