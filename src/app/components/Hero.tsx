import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

import herorumi from "../../assets/ChatGPT Image Jun 10, 2026, 07_46_13 PM-Photoroom.png";

const Hero = () => {
  return (
    <>
      <div className="hero relative overflow-hidden">

        <div className="relative pt-25 container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:gap-10 md:px-8 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-10 z-10">
          <div className="flex flex-col items-start space-y-5 sm:space-y-6 lg:col-span-7">
            <h1 className="text-4xl leading-tight text-white font-fjalla sm:text-5xl md:text-6xl lg:text-6xl">
              Engineering{" "}
              <span className="text-5xl font-italiana sm:text-6xl md:text-7xl lg:text-8xl">
                scalable
              </span>{" "}
              architecture for modern{" "}
              <span className="text-5xl font-italiana sm:text-6xl md:text-7xl lg:text-8xl">
                enterprises
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              Full-Stack Software Engineer specializing in performant React
              applications, robust Node.js backend systems, and cloud
              optimization.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
              <Link
                href="/contact"
                className="rounded-[5px] bg-white px-8 py-3 text-center font-libre text-black shadow-md transition hover:bg-neutral-200 sm:px-10 md:px-12 lg:px-15"
              >
                {`Let's Talk`}
              </Link>

              <Link
                href="/"
                className="flex items-center gap-2 rounded-[1px] border border-white/30 bg-black/40 px-4 py-3 font-libre text-sm text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-6 sm:text-base"
              >
                Download Resume <FaDownload className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="relative flex h-full items-end justify-center pt-4 sm:pt-8 lg:col-span-5 lg:justify-end lg:pt-0">
            <div className="relative mt-4 h-[320px] w-full max-w-[320px] sm:mt-6 sm:h-[400px] sm:max-w-[380px] md:h-[480px] md:max-w-[420px] lg:mr-4 lg:mt-10 lg:h-[500px] lg:max-w-[480px] xl:mr-20 xl:h-[600px]">
              <Image
                src={herorumi}
                alt="Rumi Parvez"
                height={400}
                width={400}
                priority
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 z-10 h-50 w-full rotate-180 bg-gradient-to-b from-black via-black/98 to-transparent"></div>
      </div>
    </>
  );
};

export default Hero;
