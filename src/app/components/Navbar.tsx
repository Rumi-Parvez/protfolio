import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="container mx-auto px-15">
            <div className='  mx-auto h-15  w-350   mt-4  sticky top-0 z-50  border border-white bg-black/10 backdrop-blur-xl rounded-full flex justify-between items-center px-10 font-extralight text-white'>
            <div>
                <h1>Rumi Parvez</h1>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5 font-sans text-white'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Projects</Link></li>
                    <li><Link href="/">Story</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </div>
            <Link href="/"><button>{`Let's Talk`}</button></Link>

            </div>
        </div>
    );
};

export default Navbar;