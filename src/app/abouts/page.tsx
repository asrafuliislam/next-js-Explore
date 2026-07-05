import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title> Welcome to about </Title>
            <nav className='flex justify-around items-center flex-wrap  py-3 gap-3'>
                <Link href="/abouts/contact">Contact</Link>
                <Link href="/abouts/teams">Teams</Link>
            </nav>
        </div>
    );
};

export default About;