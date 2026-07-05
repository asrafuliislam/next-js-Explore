import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-900 text-black py-10 px-5'>
            <h1 className='text-5xl '>{children}</h1>
        </div>
    );
};

export default Title;