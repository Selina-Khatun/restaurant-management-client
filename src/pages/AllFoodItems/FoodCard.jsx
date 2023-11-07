import React from 'react';
import { NavLink } from 'react-router-dom';

const FoodCard = (food) => {
    const { _id, category, description, food_name, image, ingredients, making, origin, price, procedure } = food;
    // console.log(food);

    return (
        <div>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img className='transition duration-400 h-60 hover:scale-105' src={image} alt={food_name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{food_name}</h2>
                        <p>Category: {category}</p>
                        price:{price} $
                        <p>Ingredients: {ingredients}</p>
                        <div className="card-actions justify-end">

                            <div className=" ">
                                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    <label for=""
                                        className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                        placeholder="1" />
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                    
                                </div>
                            </div>


                        </div>
                        <NavLink to={`/details/${_id}`}>
                            <button className="btn btn-warning btn-outline font-bold text-slate-100">Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;