import React from 'react';
import Link from 'next/link';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaDiscord,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <FaFacebookF size={18} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <FaLinkedinIn size={18} />,
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: <FaXTwitter size={18} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Rumi-Parvez',
      icon: <FaGithub size={18} />,
    },
    {
      name: 'Discord',
      href: 'https://discord.com',
      icon: <FaDiscord size={18} />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <FaYoutube size={18} />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: <FaInstagram size={18} />,
    },
  ];

  return (
    <>
      <footer className="overflow-hidden bg-[#222222] px-4 pt-12 pb-8 text-white select-none sm:px-6 sm:pt-14 md:px-10 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-light tracking-tight sm:mb-8 sm:text-4xl md:text-5xl">
            Rumi Parvez
          </h2>

          <div className="flex flex-col items-start justify-between gap-6 pb-6 md:flex-row md:items-center">
            <div className="w-full md:w-auto">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 font-sans text-sm text-gray-400 sm:gap-x-6 sm:text-base">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#About"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Projects"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Story"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-gray-300 sm:gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="my-2 border-t border-gray-700/60" />

          <div className="flex flex-col items-start justify-between gap-4 pt-4 pb-8 text-xs font-light text-gray-400 sm:flex-row sm:items-center sm:pb-12 sm:text-sm">
            <p className="text-center sm:text-left">
              © {currentYear} Rumi Parvez. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-6">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-gray-200"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-gray-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="mt-[-12px] w-full overflow-hidden bg-[#222222] pt-3 text-center leading-none sm:mt-[-18px] sm:pt-4 md:mt-[-25px]">
        <h1 className="pointer-events-none mx-auto whitespace-nowrap text-[16vw] font-fjalla uppercase tracking-[0.08em] text-white opacity-90 sm:text-[17vw] md:text-[16vw] lg:text-[15vw]">
          RUMI PARVEZ
        </h1>
      </div>
    </>
  );
};

export default Footer;
