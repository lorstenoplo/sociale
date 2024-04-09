"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function AlbumHero() {
  return (
    <WavyBackground className="hidden sm:block w-screen overflow-x-hidden mx-auto py-6">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Experience over 100 albums
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Look at your favorite albums on the go
      </p>
    </WavyBackground>
  );
}
