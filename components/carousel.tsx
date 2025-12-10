"use client";

import { useState, useRef, useEffect } from "react";
import {
  IoChevronBack,
  IoChevronForward,
  IoPause,
  IoPlay,
} from "react-icons/io5";

interface CarouselProps {
  images: string[];
  crops?: ("left" | "center" | "right")[];
  overlays?: React.ReactNode[];
  className?: string;
  tint?: string;
  autoScroll?: boolean;
  delay?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  crops = [],
  overlays = [],
  className,
  tint,
  autoScroll = true,
  delay = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animateKey, setAnimateKey] = useState(0); // triggers overlay animation
  const containerRef = useRef<HTMLDivElement | null>(null);
  const length = images.length;

  const nextSlide = () =>
    setCurrent((p) => {
      const n = p === length - 1 ? 0 : p + 1;
      setAnimateKey(Date.now()); // reset animation
      return n;
    });

  const prevSlide = () =>
    setCurrent((p) => {
      const n = p === 0 ? length - 1 : p - 1;
      setAnimateKey(Date.now());
      return n;
    });

  // Auto-scroll
  useEffect(() => {
    if (!autoScroll || paused) return;
    const i = setInterval(nextSlide, delay);
    return () => clearInterval(i);
  }, [current, autoScroll, paused, delay]);

  // ResizeObserver: adjust img heights to container height
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const obs = new ResizeObserver(() => {
      el.querySelectorAll<HTMLElement>(".slide-img").forEach((img) => {
        img.style.height = `${el.clientHeight}px`;
      });
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const getObjectPosition = (i: number) => {
    const c = crops[i] || "center";
    if (c === "left") return "left center";
    if (c === "right") return "right center";
    return "center center";
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className || ""}`}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative flex-shrink-0">
            <img
              src={src}
              className="slide-img w-full object-cover absolute inset-0"
              style={{ objectPosition: getObjectPosition(i) }}
            />

            {tint && (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: tint }}
              />
            )}

            {/* Animated Overlay */}
            {overlays[i] && (
              <div
                key={animateKey} // re-trigger animation on slide change
                className="
                  absolute inset-0 
                  flex items-center justify-center 
                  pointer-events-none
                  opacity-0 translate-y-[-20px]
                  transition-all duration-500 ease-out
                  animate-overlay-enter
                "
                style={{
                  animation: "overlayFadeSlide 1s ease-out forwards",
                  pointerEvents: "all",
                  animationDelay: ".3s",
                }}
              >
                {overlays[i]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-6">
        <button
          onClick={prevSlide}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          <IoChevronBack size={22} />
        </button>

        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setAnimateKey(Date.now());
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                current === i ? "bg-white" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          <IoChevronForward size={22} />
        </button>

        <button
          onClick={() => setPaused(!paused)}
          className="bg-black/60 text-white px-3 py-2 rounded-md hover:bg-black/80"
        >
          {paused ? <IoPlay size={18} /> : <IoPause size={18} />}
        </button>
      </div>

      {/* Overlay animation keyframes */}
      <style>
        {`
        @keyframes overlayFadeSlide {
          0% {
            opacity: 0;
            transform: translateY(-60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Carousel;
