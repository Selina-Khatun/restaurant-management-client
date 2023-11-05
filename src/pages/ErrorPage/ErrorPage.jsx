import React from 'react';
import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavLink><button className='text-lg text-rose-700 font-bold py-3 hover:text-blue-700 underline'>Back to Home</button></NavLink>
            <img className=' w-[90%] mx-auto  max-h-[90vh]' src="https://i.ibb.co/NS8TL8z/error5.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;