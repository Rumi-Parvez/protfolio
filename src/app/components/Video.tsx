'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

interface PhilosophyVideoProps {
  subheading?: string;
  heading?: string;
  videoSrc?: string;
  poster?: string;
}

const PhilosophyVideo: React.FC<PhilosophyVideoProps> = ({
  subheading = 'THE ENGINEER BEHIND THE CODE',
  heading = 'A short film on\nmy engineering philosophy',
  videoSrc = '/videos/philosophy.mp4',
  poster = '/images/thumbnail.png',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6 select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Subheading */}
        <span className="text-xs md:text-sm font-sans tracking-[0.25em] text-gray-400 uppercase mb-3">
          {subheading}
        </span>

        {/* Main Title */}
        <h2 className="text-3xl md:text-6xl font-italiana tracking-tight leading-tight max-w-2xl whitespace-pre-line mb-12">
          {heading}
        </h2>

        {/* Video Container Frame */}
        <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/80 bg-black shadow-2xl group">
          
          {/* Guaranteed Poster Image (Shows when video is paused or before play) */}
          {!isPlaying && poster && (
            <div className="absolute inset-0 z-0">
              <Image
                src={poster}
                alt="Video Thumbnail"
                height={500}
                width={500}
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* HTML5 Video Tag */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            preload="metadata"
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="relative z-10 w-full h-full object-cover"
          />

          {/* Custom Play Button Overlay */}
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 cursor-pointer group-hover:bg-black/20"
            >
              {/* Outer Translucent Ring */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-110">
                
                {/* White Center Play Button */}
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black pl-1 shadow-lg transition-colors duration-300 group-hover:bg-white/90">
                  <FaPlay className="text-lg md:text-xl text-black" />
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default PhilosophyVideo;