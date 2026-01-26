"use client";

import ConnectCard, { ConsultationCard } from "@/components/connectCard";
import ContactForm from "@/components/contactForm";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 bg-amber-50 min-h-[40vh] px-4 lg:px-12">
      <div className="mt-28"></div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-gray-900">
          Your Growth Starts With a Conversation. Ready to Take The First Step?
        </h1>
        <p className="text-center text-gray-900 text-2xl">
          We will help you find your Purpose with Poise, Direction and Strength.
          The Result: A New Life, A New You.
        </p>
      </div>
      <div className="grid grid-cols-2 p-4 gap-8">
        <div className="flex flex-col gap-4 bg-white p-8 shadow-lg rounded-2xl col-span-2 lg:col-span-1">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <ConnectCard />
          <ConsultationCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
