"use client";

import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  showControls?: boolean;
  videoHeight?: string;
}

export default function VideoPlayer({
  src,
  className = "",
  showControls = false,
  videoHeight,
}: VideoPlayerProps) {
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function playVideo() {
    setShowPlayIcon(false);
    videoRef.current?.play();
  }

  function toggleVideo() {
    if (videoRef.current?.paused) {
      playVideo();
    } else {
      setShowPlayIcon(true);
      videoRef.current?.pause();
    }
  }

  return (
    <div className={`relative ${className}`}>
      {showPlayIcon && (
        <div
          onClick={playVideo}
          className="absolute z-10 inset-0 flex justify-center items-center cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-16 h-16 p-4 bg-[#090b0e4d] hover:bg-[#090b0e66] transition-colors rounded-full">
            <img src="/icons/play.svg" alt="Play" className="w-full h-full" />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        onEnded={() => setShowPlayIcon(true)}
        onClick={toggleVideo}
        className="w-full h-auto"
        style={{ height: videoHeight }}
        controls={showControls}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
