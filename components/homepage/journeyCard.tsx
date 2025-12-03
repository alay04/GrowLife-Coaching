import React from "react";

type PropTypes = {
  imageSrc: string;
  title: string;
  content: string;
};

const JourneyCard = (props: PropTypes) => {
  return (
    <div className="bg-amber-800 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-7">
      {/* Image Section */}
      <div className="md:col-span-2">
        <img
          className="
            w-full 
            h-48 md:h-64 
            object-cover 
            scale-110
          "
          src={props.imageSrc}
          alt=""
        />
      </div>

      {/* Text Section */}
      <div className="md:col-span-5 md:ml-8 lg:mt-2 p-4 md:p-0 flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl font-bold">{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
