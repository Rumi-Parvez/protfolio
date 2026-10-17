import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6'; // Install react-icons if not already installed

import rumi from "../../assets/1759495534186.jpg";

const About = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/your-username', icon: <FaGithub size={22} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-username', icon: <FaLinkedin size={22} /> },
    { name: 'X', href: 'https://x.com/your-username', icon: <FaXTwitter size={22} /> },
    { name: 'Contact', href: 'mailto:your.email@example.com', icon: <FaEnvelope size={22} /> },
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
              className="h-96 w-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

        </div>


        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Rumi Parvez</h2>
            <p className="text-xl font-medium text-red-600 mt-1">Full-Stack Web Developer</p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            I build modern, responsive, and user-friendly web applications with a focus on clean code, thoughtful design, and practical solutions.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Currently learning, building, and exploring new ways to turn ideas into real-world products.
          </p>


          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition-colors duration-300"
            >
              View My Work
            </Link>
            <a
              href="mailto:your.email@example.com"
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
                className="p-3 bg-transparent text-gray-200 rounded-full hover:bg-red-700 hover:text-white transition-colors duration-300 shadow-md"
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