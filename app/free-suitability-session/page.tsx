"use client";

import BookNowButton from "@/components/bookNowButton";
import { meetingLinks } from "@/data/meetingLinks";

const Page = () => {
  return (
    <div className="bg-amber-50 min-h-[60vh] p-6 lg:p-16 text-gray-900">
      <div className="mt-20"></div>
      <h1 className="text-5xl text-[#08b434]  mb-4 uppercase font-bold text-center">
        FREE SUITABILITY SESSION
      </h1>
      <div className="text-center flex flex-col justify-center items-center gap-2 text-3xl mb-4 ">
        <p>Feeling uncertain?</p>
        <p>Do you want to know if life coaching is for you?</p>
        <p>Would you like to explore where you are?</p>
      </div>
      <div className="grid grid-cols-4 mt-12 gap-8">
        <div className="flex flex-col justify-around items-center gap-8 col-span-5 lg:col-span-2">
          <img
            src="/free-suitability-session/001.jpeg"
            className="mx-auto"
            alt=""
          />
          <img
            src="/free-suitability-session/002.jpeg"
            className="mx-auto"
            alt=""
          />
        </div>
        <div className="col-span-5 lg:col-span-2">
          <p className="lg:text-justify text-2xl mb-4">
            The Suitabilty session is a complimentary, no obligation
            conversation designed to give you the space, certainty, and
            confidence to explore whether coaching is the right next step for
            you. If you’ve been feeling stuck, overwhelmed, uncertain, or simply
            aware that something needs to change, but aren’t sure where to
            start. This session is a supportive and grounded place to begin.
          </p>
          <p className="lg:text-justify text-2xl mb-4">
            During our time together, we’ll gently explore what’s currently
            happening in your life, the challenges you’re facing, and what you
            truly want to move toward. This isn’t about having all the answers
            already, it’s about understanding your patterns, and identifying
            what’s holding you back from moving forward with confidence. You’ll
            have the opportunity to speak openly, be heard without judgment, and
            reflect in a way that often brings immediate insight and relief.
          </p>
          <p className="lg:text-justify text-2xl mb-4">
            This conversation also allows you to experience my coaching approach
            and decide whether it feels aligned, supportive, and right for you.
            We’ll talk through your goals, the type of support you’re looking
            for, and what kind of structure would best serve you. If coaching
            feels like a good fit, we’ll explore the most suitable next steps
            and identify a coaching plan that aligns with your needs, pace, and
            desired outcomes.
          </p>
          <p className="lg:text-justify text-2xl mb-4">
            By the end of the Suitability session, you can expect to walk away
            with greater direction , a stronger sense of direction, and a
            clearer understanding of what changes are possible for you. Many
            clients leave feeling lighter, more focused, and empowered, even
            from this first conversation. Whether or not we decide to work
            together, this session is designed to leave you with value, insight,
            and a clearer perspective on where you are and where you want to go.
          </p>
          <p className="lg:text-justify text-2xl mb-4">
            This chat is ideal if you’re curious about coaching, considering
            personal growth, or ready to invest in yourself, but want to take
            that first step with intention, purpose, and ease. Think of it as
            the beginning of a more aligned, confident, and purposeful chapter.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-8 items-center gap-4">
        <p className="text-3xl font-bold uppercase">FREE</p>
        <a
          href={meetingLinks["free-suitability-session"]}
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
