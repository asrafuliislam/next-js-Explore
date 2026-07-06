import Title from '@/components/Title';
import React from 'react';

const TutorialsPages = async ({ params }) => {

    const { slug } = await params;
    
    const [technology, Topics, subject, page_no] = slug || [];
    return (
        <div>
            <Title>{technology}</Title>
            <h2>{Topics}</h2>

            <h1> {subject}</h1>

            <h3>page no: {page_no} </h3>

            <h1>this is Tutorials page</h1>
        </div>
    );
};

export default TutorialsPages;