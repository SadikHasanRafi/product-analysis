import React from 'react';
import Img from './uphone.jpg'

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-black to-gray-800 text-white w-full flex justify-evenly items-center' style={{height: '80vh'}}>
            <article>
                <h1 className='text-8xl'>uPhone 13 Pro</h1>
                <p className='text-4xl my-2'>Oh.So.Pro</p>
                <button className='bg-gray-700 py-2 px-5 my-5  text-white'>Buy Now</button>
            </article>
            <img src={Img} className='w-5/12' alt="" />
        </div>
    );
};

export default Home;