import React from 'react';
import MarqueeText from 'react-marquee-text';

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

const technologies = [
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'React', Icon: SiReact },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Vercel', Icon: SiVercel },
];

const Tech = () => {
  return (
    <div className="relative z-20 w-full overflow-hidden border-y border-white/10 bg-black/70 py-5 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-950/30 via-transparent to-red-950/30" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-28" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-28" />

      <MarqueeText duration={38} direction='right' pauseOnHover>
        <div className="flex items-center gap-4 px-2">
          {technologies.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-neutral-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/[0.08] hover:text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.10)]"
            >
              <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />

              <span className="whitespace-nowrap text-sm font-medium tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Tech;
