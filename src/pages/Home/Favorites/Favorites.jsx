import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Favorites = () => {
    const { foods } = useContext(AuthContext);
    console.log(foods)
    const displayedProducts = foods?.slice(0, 4);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-5'>
      
    
                    {
                        displayedProducts?.map(food => (<div className='mt-10'>
                            <div key={food._id} className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className=' h-60 transition duration-400 hover:scale-105' src={food.image} alt={food.image} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{food.food_name}</h2>
                                    <p>{food.category}</p>
                                    <p>{food.price}</p>
                                    <div className="card-actions justify-end">
                                        <NavLink to={"/allFoodItems"}> <button className="btn btn-warning btn-outline font-bold text-slate-100"> Details</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }

                    Most Favorites Items
             


         
        </div>
    );
};

export default Favorites;