/* eslint-disable jsx-a11y/media-has-caption */
// components/common/VideoPlayer.tsx
"use client";

import React from "react";
import { cn } from "@/utils/cn"; // Optionnel si tu as un utilitaire de merge de classes

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: string; // ex: "16/9", "4/3", etc.
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = "",
  aspectRatio = "16/9",
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-black md:max-w-[66%] max-w-full",
        className
      )}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      <video
        src={src}
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        {...props}
      />
    </div>
  );
};

export default VideoPlayer;
