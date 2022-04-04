import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex justify-evenly w-1/3 py-7 text-2xl'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;