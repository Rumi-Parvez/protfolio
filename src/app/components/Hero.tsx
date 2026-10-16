import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

import herorumi from "../../assets/ChatGPT Image Jun 10, 2026, 07_46_13 PM-Photoroom.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <Navbar></Navbar>
      <div className=" relative container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-10 z-10">
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <h1 className="text-6xl  text-white font-fjalla">
            Engineering <span className="text-8xl font-italiana">scalable</span>{" "}
            architecture for modern{" "}
            <span className="text-8xl font-italiana">enterprises</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Full-Stack Software Engineer specializing in performant React
            applications, robust Node.js backend systems, and cloud
            optimization.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/"
              className="bg-white text-black font-libre px-15 py-3 rounded-[5px] hover:bg-neutral-200 transition  shadow-md ">
              {`Let's Talk`}
            </Link>

            <Link
              href="/"
              className="border border-white/30 bg-black/40 hover:bg-white/10 text-white font-libre px-6 py-3 rounded-[1px] transition flex items-center gap-2 backdrop-blur-sm">
              Download Resume <FaDownload className="text-xs" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full pt-8 lg:pt-0">
          <div className="relative w-full max-w-[480px] h-[500px] lg:h-[600px] mr-20 mt-10">
            <Image
              src={herorumi}
              alt="Rumi Parvez"
              fill
              priority
              className="object-cover  "
            />
          </div>
          
        </div>
        
      </div>
      <div className="absolute bottom-0  w-full h-50 bg-gradient-to-b from-black via-black/98 to-transparent pointer-events-none rotate-180 z-10"></div>
      
    </div>
   
    </>
  );
};

export default Hero;
