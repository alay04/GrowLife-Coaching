"use client";

import { meetingLinks } from "@/data/meetingLinks";

const Page = () => {
  return (
    <div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
      <div className="mt-20"></div>
      <h1 className="text-3xl lg:text-5xl text-[#08b434] mb-4 uppercase font-bold text-center">
        3 SESSION COACHING PLAN
      </h1>
      <div className="text-center flex flex-col justify-center items-center gap-2 text-2xl lg:text-3xl mb-4 ">
        <p>Do you need clarity regarding a specific issue? </p>
        <p>Are you looking for an affordable coaching plan?</p>
        <p>In 3 sessions we can help solve a particular concern</p>
      </div>
      <div className="grid grid-cols-4 mt-12 gap-8">
        <div className="col-span-5 lg:col-span-2">
          <p className="lg:text-justify text-xl lg:text-2xl mb-4">
            The 3 Session Coaching Plan is designed for focused, impactful
            change in a shorter timeframe. It's ideal if you're looking for
            clarity, direction, and tangible results without a long-term
            commitment.
          </p>
          <div className="my-4 flex flex-col gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center">
              Aims & Objectives
            </h2>
            <ul className="list-disc text-xl lg:text-2xl px-2">
              <li>Increase self awareness and clarify goals</li>
              <li>Develop actionable strategies and build confidence </li>
              <li>Encourage sustainable change and forward planning</li>
            </ul>
            <p className="text-xl lg:text-2xl">
              Your journey begins with a Suitability Session, where we explore
              your current situation, define your goals, and ensure the coaching
              relationship feels aligned and supportive. This session creates a
              clear foundation, allowing us to work efficiently and
              intentionally from the very start.
            </p>
            <p className="text-xl lg:text-2xl">
              You'll then move through three tailored coaching sessions, each
              carefully designed to build momentum and drive results. Together,
              we shall increase your self-awareness, identify key obstacles or
              limiting patterns, and develop practical strategies to move you
              forward. These sessions focus on clarity, action, and confidence,
              helping you make decisive shifts where they matter most.
            </p>
            <p className="text-xl lg:text-2xl">
              This plan is ideal if you're seeking quick but meaningful
              breakthroughs, structured guidance, and accountability over a
              concentrated period. By the end of the three sessions, you can
              expect to have clear goals, actionable steps, and tools you can
              immediately apply to your daily life. You will feel more focused,
              empowered, and equipped to move forward with confidence, not just
              with insight, but with real, visible progress.
            </p>
            <p className="text-xl lg:text-2xl">
              If you're ready to take purposeful action and create results
              without overwhelm, the 3 Session Coaching Plan offers a powerful
              starting point for lasting change.
            </p>
          </div>
          <div className="my-4 flex flex-col gap-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-center">
              Learning Outcomes
            </h3>
            <ul className="list-disc text-xl lg:text-2xl px-2">
              <li>
                You can expect to be able to confidently identify and articulate
                your core values and clear personal goals.
              </li>
              <li>
                You will be able to use practical tools and strategies to
                overcome barriers and take purposeful actions.
              </li>
              <li>
                You will be able to evaluate your progress and plan next steps
                demonstrating confidence and self awareness.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center gap-8 col-span-5 lg:col-span-2">
          <img src="/3-session/001.jpeg" className="mx-auto" alt="" />
          <img src="/3-session/002.jpeg" className="mx-auto" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 mb-8 gap-4 w-full text-center">
        <p className="text-3xl font-bold uppercase">£225</p>
        <a
          href={meetingLinks["3-session-coaching-plan"]}
          target="_blank"
          className="bg-green-600 text-lg lg:text-xl cursor-pointer hover:bg-green-700 active:bg-green-800 text-white py-4 px-12 rounded-full hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-px w-fit uppercase font-bold"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Page;
