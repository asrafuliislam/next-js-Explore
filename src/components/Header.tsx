import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='px-4 py4 border-2 border-gray-700 flex justify-between items-center '>
            <Link href='/' className='text-lg font-semibold '> hello dev</Link>


            <nav className='flex justify-around items-center flex-wrap  py-3 gap-3'>
                <Link href='/abouts'> About</Link>
                <Link href='/Login'> login</Link>
                <Link href='/register'> register</Link>
            </nav>

            
        </div>
    );
};

export default Header;