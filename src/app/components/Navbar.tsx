import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import rumiparvez from "../../assets/ycb3ja.jpg (1).jpeg"

const Navbar = () => {
    return (
        <div className="container mx-auto px-15">
            <div className='  mx-auto h-15  w-350   mt-5  fixed top-0 z-50  border border-white bg-black/10 backdrop-blur-xl rounded-full flex justify-between items-center px-10 font-extralight text-white'>
            <div className='flex justify-center items-center gap-3'>
                <Image src={rumiparvez} alt='Rumi Parvez' height={500} width={500} className='h-10 w-10 rounded-full ' ></Image>
                <h1 className='font-italiana text-2xl'>Rumi Parvez</h1>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5 font-sans text-white'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#About">About</Link></li>
                    <li><Link href="#Projects">Projects</Link></li>
                    <li><Link href="#Story">Story</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <Link 
              href='/contact' 
              className='bg-white flex justify-center items-center gap-2 text-black font-libre px-8 py-2 rounded-[5px] hover:bg-neutral-200 transition text-sm shadow-md '
            >
              {`Let's Talk`}
              <GoArrowUpRight className='text-xl' />

            </Link>

            </div>
        </div>
    );
};

export default Navbar;