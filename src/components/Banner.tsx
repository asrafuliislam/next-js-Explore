"use client"

import React from 'react';
import Title from './Title';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter();
    const  handleBtn = () => {
        const password = prompt("enter password")
        if(password == "1234"){
            router.push("/dashboard");
        }
    }

    return (
        <div className='text-center  space-y-5 bg-linear-60 from-sky-400 to-white text-black p-5 rounded-2xl'>
            <h1 className='text-5xl font-bold'> welcome to dev </h1>
            <button onClick={handleBtn} className='bg-sky-500 text-white py-3 px-3 rounded-2xl cursor-pointer hover:bg-black duration-500'> share dev</button>
        </div>
    );
};

export default Banner;