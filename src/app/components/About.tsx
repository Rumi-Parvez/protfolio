import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaYoutube, FaDiscord, FaInstagram, FaFacebookF } from 'react-icons/fa6'; // Install react-icons if not already installed

import rumi from "../../assets/1759495534186.jpg";

const About = () => {
  const socialLinks = [
        {
              name: 'GitHub',
              href: 'https://github.com/Rumi-Parvez',
              icon: <FaGithub size={18} />,
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/rumi-parvez-dev',
              icon: <FaLinkedin size={18} />,
            },
            {
              name: 'X / Twitter',
              href: 'https://x.com/openyhoolceo',
              icon: <FaXTwitter size={18} />,
            },
           
    { name: 'Contact', href: '#Mail', icon: <FaEnvelope size={22} /> },
  ];


  return (
   <>
   <div className='about' id='About'>
     <section className=" max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-italiana font-bold text-center underline decoration-red-700 underline-offset-8 mb-12">
        About Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image & Social Links */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group overflow-hidden rounded-2xl border-2 border-gray-600 hover:border-red-700 transition-all duration-500 shadow-lg">
            <Image
              src={rumi}
              height={500}
              width={500}
              alt="Rumi Parvez"
              className="h-80 w-80 md:h-135 md:w-135 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

        </div>


        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Rumi Parvez</h2>
            <p className="text-xl font-medium text-red-600 mt-1">Full-Stack Web Developer</p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {`I'm Rumi Parvez, a Full-Stack Web Developer passionate about building clean, responsive, and user-friendly web applications. My journey began with HTML and CSS and gradually grew into JavaScript, TypeScript, React, Next.js, and backend development.`}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            I enjoy solving problems, writing maintainable code, and turning ideas into practical digital experiences. Outside coding, I love exploring new technologies and continuously learning new things.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {`I'm focused on building real-world projects, improving my skills, and creating products that make a meaningful difference.`}
          </p>


          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#Projects"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition-colors duration-300"
            >
              View My Work
            </Link>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-red-700 text-red-700 dark:text-red-500 font-semibold rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-300"
            >
              {`Let's Connect`}
            </a>
          </div>  
          <div className="flex gap-4 mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3 bg-transparent text-gray-200 rounded-full  hover:text-red-600 transition-colors duration-300 shadow-md"
              >
                {link.icon}
              </a>
            ))}
          </div>    
        </div>
        
      </div>
    </section>
   </div>
   </>
  );
};

export default About;