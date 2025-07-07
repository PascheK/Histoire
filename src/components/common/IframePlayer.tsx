// components/common/IframePlayer.tsx
"use client";

import React from "react";
import { cn } from "@/utils/cn"; // Facultatif : utilitaire pour fusionner les classes

interface IframePlayerProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  className?: string;
  aspectRatio?: string; // Par défaut: 16/9
}

const IframePlayer: React.FC<IframePlayerProps> = ({
  src,
  className = "",
  aspectRatio = "16/9",
  ...props
}) => {
  return (
    <div
      className={cn("relative flex justify-center w-full overflow-hidden")}
      style={{ aspectRatio }}
    >
      <iframe
      title={src}
        src={src}
        className={cn("absolute inset-0 h-full w-4/5 m-auto border-0 rounded-xl shadow-md", className)}
        {...props}
      />
    </div>
  );
};

export default IframePlayer;
