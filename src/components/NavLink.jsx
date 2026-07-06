import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();

    return (
        <Link className={`${pathName.startsWith(href) && "bg-sky-400 font-semibold duration-200 py-2 px-2 rounded-2xl text-black"}`} href={href} >
            {children}
        </Link>
    );
};

export default NavLink;