import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Navigation = () => {
    return (
        <nav className='flex justify-evenly items-center'>
            <Link to="/"><img src={Logo} className='h-12' alt="Logo" /></Link>
            <ul className='flex justify-evenly w-1/3 py-10 text-2xl'>

                {/* Route Match */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;