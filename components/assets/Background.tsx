"use client";
import React from "react";

import { BackgroundBeams } from "../ui/background-beams";
import Globe from './Globe'

export function Background() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center overflow-hidden antialiased">
      <div className="flex h-screen w-full items-center justify-start gap-3" >

        <div className="w-[600px] mb-auto  mt-36 ml-24 relative z-10 text-start ">
        <h1 className=" text-lg md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold">
          Keizer
        </h1>
        <p></p>
        <p className="text-neutral-500 w-[580px]  my-2 text-lg mt-5 ">
        Discover the ultimate hub for all your AI needs, packed with powerful tools and resources to help you unlock the full potential of artificial intelligence.
        </p>

        <button className="w-full py-3 mt-8 hover:bg-white hover:text-black text-white border rounded-md  duration-300 ease-in-out border-white">Explore</button>
        </div>

        <div className="relative z-20 top-16 ml-40">
        <Globe />
        </div>


      </div>
      <BackgroundBeams />
    </div>
  );
}
