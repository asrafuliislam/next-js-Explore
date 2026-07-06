import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <h2> 404 | Your Page Not Found</h2>
            <Link href={"/"} className='bg-sky-600 rounded-2xl px-3 py-2 '>Go to Home</Link>
        </div>
    );
};

export default NotFound;