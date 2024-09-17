"use client";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export const Confetti = () => {
  return (
    <div className="absolute z-10 h-screen w-screen select-none">
      <Fireworks autorun={{ speed: 3, duration: 2000 }} />
    </div>
  );
};
