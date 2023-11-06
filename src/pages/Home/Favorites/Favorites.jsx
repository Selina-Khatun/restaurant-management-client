import React from 'react';
import { NavLink } from 'react-router-dom';

const Favorites = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl font-bold text-red-500 underline border-b-2 text-center '>


                Most Favorites Items
            </h1>

            <div className='mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='transition duration-400 hover:scale-105' src="https://i.ibb.co/J5WQZ5M/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food-1150-26407.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">name</h2>
                        <p>category</p>
                        <p>price</p>
                        <div className="card-actions justify-end">
                        <NavLink to={"/allFoodItems"}> <button className="btn btn-warning btn-outline font-bold text-slate-100"> Details</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;