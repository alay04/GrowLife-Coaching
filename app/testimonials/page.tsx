"use client";

import { QuoteEnd, QuoteStart } from "@/components/quotes";
import TestimonialCard from "@/components/testimonialCard";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

const data = [
  {
    name: "Brian Ziregbe",
    testimonial: (
      <div>
        <p>
          <QuoteStart /> Neil has been an invaluable support system during some
          of my most challenging times, including periods of personal grief and
          academic and mental health struggles. He is an exceptional listener
          who offers non-judgmental guidance that I truly value. I highly
          recommend his life coaching services to anyone seeking meaningful
          support. <QuoteEnd />
        </p>
      </div>
    ),
    img: "/testimonials/brian.png",
  },
  {
    name: "Marlowe Malicdem",
    testimonial: (
      <div>
        <p>
          <QuoteStart />I really enjoyed my life coaching sessions with Neil. We
          worked together for some months and during this time I felt a
          significant improvement in my personal and working life. I really
          enjoyed having a space to chat through things. The sessions where we
          worked together to set goals and plan how I would work towards these
          goals were really beneficial. Neil was always happy to talk things
          through, and often shared different techniques and advice that changed
          my perspective on things.
          <QuoteEnd />
        </p>
      </div>
    ),
    img: "/testimonials/marlow.png",
  },
  {
    name: "Ellen Vermuelen",
    testimonial: (
      <div>
        <p>
          <QuoteStart />
          I've had the pleasure of working with Neil for several months, and I
          genuinely look forward to our coaching sessions. Before our first
          meeting, I was quite nervous and unsure of what to expect, but Neil's
          warm and open nature immediately put me at ease. Our sessions have
          been transformative. Through our work together, I've come to recognise
          and embrace my strengths, which has made me feel more positive and
          confident, enabling me to apply for new job roles. Neil's guidance and
          support have been invaluable in helping me reflect on my values, set
          future goals, establish meaningful and achievable priorities, and take
          action.
          <QuoteEnd />
        </p>
      </div>
    ),
    img: "/testimonials/profile.png",
  },
  {
    name: "Naz Bhatti",
    testimonial: (
      <div>
        <p>
          <QuoteStart />
          I'd highly recommend Grow Life Coaching for their excellent level of
          support and care for their clients. The level of coaching is
          exceptional. They're flexible and they're happy to adjust their vast
          skill set to best accommodate the clients needs.
        </p>
        <p>
          They are positioned to benefit everybody, especially in today's
          climate. So give them a try and you'll thank yourself that you did.
          <QuoteEnd />
        </p>
      </div>
    ),
    img: "/testimonials/naz2.jpeg",
  },

  {
    name: "Leanne F",
    testimonial: (
      <div>
        {" "}
        <p>
          <QuoteStart />
          Neil provided steady, compassionate support during some of my most
          difficult personal and academic challenges. He is an exceptional
          listener who offers insightful, non-judgmental guidance. I highly
          recommend his life coaching services to anyone looking for genuine
          support and understanding.
          <QuoteEnd />
        </p>
      </div>
    ),
    img: "/testimonials/profile.png",
  },
];

const Page = () => {
  return (
    <div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
      <div className="mt-14"></div>
      <h1 className="text-3xl lg:text-5xl text-[#08b434] mb-4 uppercase font-bold text-center">
        Testimonials
      </h1>
      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {data.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            testimonial={item.testimonial}
            img={item.img}
          />
        ))}
        <div className="col-span-1 w-full h-fit">
          <VideoPlayer src="/testimonials/video-1.mp4" videoHeight="550px" />
        </div>
      </div>
    </div>
  );
};

export default Page;
