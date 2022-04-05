import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center' style={{"height": "80vh"}}>
            <h1 className='text-center text-3xl mb-9 font-bold'>Question Answer</h1>
            <div className='w-full flex justify-center'>
            <div className='w-6/12'>
                <div className='mb-7'>
                <p className='font-semibold text-2xl'>What is Context API?</p>
                <p className='text-justify'>Context api is one kind of global variable for react. It allows an element or a state to be accessible anywhere In the code. Without context api for example a state is used in upper parent  but it is needed to use in lower child of that parent. Now to implement this, the state needs to pass through all the child component of that parent as props and then that lower child can access that state which is known as props drills. But with context api that prop drill will not be needed and thus the complexity of code will be less.</p>
                </div>
                <div className='mb-7'>
                <p className='font-semibold text-2xl'>What is Simantic tag?</p>
                <p className='text-justify'>In web development there are a lot of sections like header, article navigation bar and so on. Here in html version 4 there was nothing like header, article and so on. All of them used on div and in the class name developer can assign their customized name. It creates problems when the project becomes larger, it becomes too complex to manage. But in html 5 these sections got their own tag like article,header, footer and so on. ThisThis new html5 version's tag name are called semantic tag.</p>
                </div>
                <div className='mb-7'>
                <p className='font-semibold text-2xl'>Inline vs block vs inline-block?</p>
                <p className='text-justify'>Inline is an element which never starts from a new line. It always starts from where the previous element ended. On the other hand, the block element always starts from a new line.  It normally occupies the full width of that line but its height weight can be changeable whereas the  inline element's height weight is not changeable. In inline-block element height and weight can be changeable but it also starts from where the previous element was ended.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;