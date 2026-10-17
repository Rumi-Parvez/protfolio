import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaDribbble, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebookF size={18} /> },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: <FaDribbble size={18} /> },
    { name: 'GitHub', href: 'https://github.com', icon: <FaGithub size={18} /> },
    { name: 'X', href: 'https://x.com', icon: <FaXTwitter size={18} /> },
  ];

  return (
    <>
    <footer className="bg-[#222222] text-white pt-16 pb-8 px-6 md:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Rumi Parvez
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6">
          
          <div>
                <ul className='flex justify-between items-center gap-5 font-sans text-gray-400'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#About">About</Link></li>
                    <li><Link href="#Projects">Projects</Link></li>
                    <li><Link href="#Story">Story</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>


          <div className="flex items-center gap-5 text-gray-300">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-white transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700/60 my-2" />


        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 font-light pt-4 pb-12 gap-4">
          <p>© {currentYear} Rumi Parvez. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        
      </div>
     
    </footer>
     <div className="w-full text-center overflow-hidden leading-none pt-4 bg-[#222222] mt-[-25px]">
          <h1 className="text-[18vw] font-fjalla uppercase tracking-widest text-white whitespace-nowrap opacity-90 pointer-events-none mx-auto  ">
            RUMI PARVEZ
          </h1>
        </div>
    </>
  );
};

export default Footer;