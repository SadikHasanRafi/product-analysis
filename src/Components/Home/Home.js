import React from 'react';

import Reviews from '../Reviews/Reviews';
import Img from './uphone.jpg'


const Home = () => {
    
    return (
        <div>
            <div className='bg-gradient-to-r from-black to-gray-800 text-white w-full flex justify-evenly items-center' style={{height: '80vh'}}>
                <article>
                    <h1 className='text-8xl'>uPhone 13 Pro</h1>
                    <p className='text-4xl my-2'>Oh.So.Pro</p>
                    <button className='bg-gray-700 py-2 px-5 my-5  text-white'>Buy Now</button>
                </article>
                <img src={Img} className='w-5/12' alt="" />
            </div>
            <div className='flex flex-col items-center'>
               
                <h1 className='text-5xl mt-20'>Customer Review</h1>
                <button className='bg-black py-3 px-6 text-white'>See More Reviews</button>
            </div>
        </div>
    );
};

export default Home;