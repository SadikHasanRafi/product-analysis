import React from 'react';
import NotFoundImg  from './404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center' style={{height: '90vh'}}>
            <img className='w-9/12' src={NotFoundImg} alt="Page Not Found "/>
        </div>
    );
};

export default NotFound;