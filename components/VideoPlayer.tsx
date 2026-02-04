"use client";

import { useRef, useState } from "react";

type OverlayPosition = "top" | "center" | "bottom";

interface VideoPlayerProps {
  src: string;
  className?: string;
  showControls?: boolean;
  videoHeight?: string;

  /** Overlay content */
  overlay?: React.ReactNode;
  /** Overlay position */
  overlayPosition?: OverlayPosition;
}

export default function VideoPlayer({
  src,
  className = "",
  showControls = false,
  videoHeight,
  overlay,
  overlayPosition = "center",
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

  const overlayPositionClasses: Record<OverlayPosition, string> = {
    top: "left-1/2 -translate-x-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Overlay text/content */}
      {overlay && (
        <div
          className={`absolute z-20 ${overlayPositionClasses[overlayPosition]} pointer-events-none w-full`}
        >
          {overlay}
        </div>
      )}

      {/* Play icon overlay */}
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
