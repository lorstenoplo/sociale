"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/cn";

export default function HomeHero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Introducing Sociale 🚀
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        The best place to share your thoughts and connect with others.
      </p>
    </div>
  );
}
