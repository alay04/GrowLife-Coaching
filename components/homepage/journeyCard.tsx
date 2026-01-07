import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

type PropTypes = {
  imageSrc: string;
  title: string;
  content: string;
  id?: string;
};

const JourneyCard = ({ imageSrc, title, content, id }: PropTypes) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [width, setWidth] = useState<string>("85vw"); // default for mobile

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 768) {
        // On medium screens and up, use min(700px, 40vw)
        // We can't use min() directly in state as a string? Actually we can!
        setWidth("min(700px, 40vw)");
      } else {
        setWidth("85vw");
      }
    };

    updateWidth(); // initial call
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleFlip = () => {
    if (!innerRef.current) return;
    const targetRotation = isFlipped ? 0 : 180;
    gsap.to(innerRef.current, {
      rotationY: targetRotation,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => setIsFlipped(!isFlipped),
    });
  };

  function onBookFreeSession(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Book Free Session");
    window.open(
      "https://cal.com/officer-nasty-d9p4ge/free-suitability-session",
      "_blank",
    );
  }

  return (
    <div
      id={id}
      onClick={handleFlip}
      className="cursor-pointer [perspective:1200px]"
      style={{ width, height: "500px" }}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl md:text-2xl font-bold text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute bg-green-50 shadow-md inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-xl flex flex-col gap-6 items-center justify-center">
          <p className="text-gray-800 text-center lg:text-2xl">{content}</p>
          <button
            onClick={onBookFreeSession}
            className="bg-green-600 text-lg lg:text-xl cursor-pointer hover:bg-green-700 active:bg-green-800 text-white py-4 px-12 rounded-full hover:shadow-lg shadow-green-300 active:translate-y-1 duration-300 transition-all hover:-translate-y-[1px] w-fit uppercase font-bold"
          >
            Book Free Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
