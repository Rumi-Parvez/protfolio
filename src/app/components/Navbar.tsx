import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import rumiparvez from "../../assets/ycb3ja.jpg (1).jpeg";

const Navbar = () => {
    return (
        <div className="w-full">
            <header className="fixed left-1/2 top-3 z-50 flex h-11 w-[94%] max-w-[1400px] -translate-x-1/2 items-center justify-between gap-1 rounded-full border border-white/30 bg-black/40 px-3 text-white shadow-lg backdrop-blur-md sm:top-5 sm:h-14 sm:w-[calc(100%-2rem)] sm:px-5 md:h-15 md:px-8 lg:px-10 print:hidden">

                {/* Logo & Name */}
                <Link href="/" className="flex min-w-0 shrink items-center">
                    <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
                        <Image
                            src={rumiparvez}
                            alt="Rumi Parvez"
                            height={200}
                            width={200}
                            priority
                            className="h-7 w-7 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
                        />
                        <h1 className="truncate font-italiana text-xs font-light sm:text-xl md:text-2xl max-w-[110px] xs:max-w-[140px] sm:max-w-none">
                            Rumi Parvez
                        </h1>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-4 font-sans text-sm font-extralight text-white xl:gap-5 xl:text-base">
                        <li>
                            <Link href="/" className="transition-colors duration-300 hover:text-red-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#About" className="transition-colors duration-300 hover:text-red-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#Skills" className="transition-colors duration-300 hover:text-red-300">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="#Projects" className="transition-colors duration-300 hover:text-red-300">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#Education" className="transition-colors duration-300 hover:text-red-300">
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition-colors duration-300 hover:text-red-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    className="flex shrink-0 whitespace-nowrap items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-normal text-black shadow-md transition duration-300 hover:bg-neutral-200 sm:rounded-[5px] sm:px-4 sm:py-2 sm:text-sm md:px-6"
                >
                    <span>{`Let's Talk`}</span>
                    <GoArrowUpRight className="text-xs sm:text-xl" />
                </Link>

            </header>
        </div>
    );
};

export default Navbar;