
"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {

    const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) return <></>

    return (
        <div className='px-4 py4 border-2 border-gray-700 flex justify-between items-center '>
            <Link href='/' className='text-lg font-semibold '> hello dev</Link>


            <nav className='flex justify-around items-center flex-wrap  py-3 gap-3'>
                <NavLink href='/abouts'> About </NavLink>
                <NavLink href='/Stories'>Stories</NavLink>
                <NavLink href='/Login'>login</NavLink>
                <NavLink href='/register'>register</NavLink>
            </nav>

            {/* <nav className='flex justify-around items-center flex-wrap  py-3 gap-3'>
                <Link href='/abouts'> About </Link>
                <Link href='/Stories'>Stories</Link>
                <Link href='/Login'> login</Link>
                <Link href='/register'> register</Link>
                <NavLink href='/abouts'> About </NavLink>
            </nav> */}




        </div>
    );
};

export default Header;