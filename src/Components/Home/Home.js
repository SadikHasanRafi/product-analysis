import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../Hook/useReviews';

import Reviews from '../Reviews/Reviews';
import Img from './uphone.jpg'


const Home = () => {
    const [reviews,setReviews] = useReviews();

    const review = reviews.slice(0,3)
           
    return (
        <div>
            <div className='bg-gradient-to-r from-black to-gray-800 text-white w-full flex justify-evenly items-center' style={{height: '80vh'}}>
                <article>
                    <h1 className='text-8xl'>uPhone 13 Pro</h1>
                    <p className='text-4xl my-2'>Oh.So.Pro</p>
                    <button className='rounded-lg bg-gray-700 py-2 px-5 my-5  text-white'>Buy Now</button>
                </article>
                <img src={Img} className='w-5/12' alt="" />
            </div>
            <div className='flex flex-col items-center'>
               
                <h1 className='text-5xl mt-20'>Customer Review</h1>
                <p className='flex flex-col items-center my-9'>
                    { review.map( rev =>
                        <div className='w-4/12 bg-slate-100 my-2 p-5 rounded-lg'>
                            <p className='rounded-lg block bg-white p-5 mb-3'>{rev.review}</p>
                            <p className='text-right block font-semibold text-orange-500'>{rev.rating} stars</p>
                            <p className='block font-semibold'>{rev.name}</p>
                        </div>
                    )}
                </p>
                <Link to="/reviews"><button className='mb-10 rounded-lg bg-gray-800 py-3 px-6 text-white'>See More Reviews</button></Link>
            </div>
        </div>
    );
};

export default Home;