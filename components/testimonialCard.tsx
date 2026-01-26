import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

type Props = {
  name: string;
  testimonial: React.ReactNode;
  img: string;
};

const TestimonialCard = ({ name, testimonial, img }: Props) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4">
      <img
        className="w-32 -translate-y-12 mx-auto rounded-full border-12 border-amber-50"
        src={img}
        alt={name}
      />
      <div className="flex flex-col gap-8 items-center text-center h-full">
        <h3 className="text-lg font-bold text-[#08b434]">{name}</h3>
        <div className="">
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
