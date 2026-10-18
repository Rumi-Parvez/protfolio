import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import rumiparvez from "../../assets/ycb3ja.jpg (1).jpeg";

const Navbar = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-15">
            <div className="fixed top-3 left-1/2 z-50 flex h-14 w-[calc(100%-2rem)] max-w-[1400px] -translate-x-1/2 items-center justify-between rounded-full border border-white/30 bg-black/10 px-4 font-extralight text-white backdrop-blur-xl sm:top-5 sm:h-15 sm:w-[calc(100%-3rem)] sm:px-6 md:px-8 lg:px-10">

                <Link href='/'>
                <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
                    <Image
                        src={rumiparvez}
                        alt="Rumi Parvez"
                        height={500}
                        width={500}
                        className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
                    />
                    <h1 className="font-italiana text-lg sm:text-xl md:text-2xl">
                        Rumi Parvez
                    </h1>
                </div>
                </Link>

                <div className="hidden lg:block">
                    <ul className="flex items-center justify-between gap-4 font-sans text-sm text-white xl:gap-5 xl:text-base">
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
                </div>

                <Link
                    href="/contact"
                    className="flex shrink-0 items-center justify-center gap-1 rounded-[5px] bg-white px-3 py-2 text-xs text-black shadow-md transition duration-300 hover:bg-neutral-200 sm:gap-2 sm:px-5 sm:text-sm md:px-6 lg:px-8"
                >
                    {`Let's Talk`}
                    <GoArrowUpRight className="text-base sm:text-xl" />
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
