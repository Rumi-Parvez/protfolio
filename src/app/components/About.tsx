import React from 'react';
import Image from 'next/image';

import rumi from "../../assets/1759495534186.jpg"

const About = () => {
    return (
        <div className='about'>
            <div className=' mx-auto px-15 my-20 '>
                <h1 className='text-6xl font-italiana flex justify-center items-center underline'>About</h1>
                <div className=' h-150 w-120 mt-10 '>
                    <div>
                        <Image src={rumi} height={500} width={500} alt='Rumi parvez' className='h-100 w-100 rounded-2xl border-2 transition-all duration-500 ease-in-out border-gray-600 hover:border-red-700   hover:h-101 hover:w-101'></Image>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default About;