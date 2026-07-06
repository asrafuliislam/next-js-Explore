import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 min-h-screen'>
            <div className='col-span-3 border-r-2' >
            
            <Link href='/' className='text-lg font-semibold '> hello dev</Link>


                <nav className='flex flex-col gap-5'>
                    <Link className='bg-gray-300 rounded-2xl m-4 p-4 text-gray-800 font-semibold hover:bg-gray-500 duration-200' href={"/dashboard/add-story"}> Add Story </Link>
                    <Link className='bg-gray-300 rounded-2xl m-4 p-4 text-gray-800 font-semibold hover:bg-gray-500 duration-200' href={"/dashboard/profile"}>My Profile</Link>
                    <Link className='bg-gray-300 rounded-2xl m-4 p-4 text-gray-800 font-semibold hover:bg-gray-500 duration-200' href={"/dashboard/settings"}>Settings</Link>
                </nav>
            </div>
            <div className='col-span-9 mx-3'> {children}</div>
        </div>
    );
};

export default DashboardLayout;