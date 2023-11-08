import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FoodCard = (food) => {
    const [quantities, setQuantity] = useState(1);
    const { _id, category, description, madeBy, quantity, food_name, image, ingredients, making, origin, price, procedure } = food;

    // console.log(food.madeBy)
    // console.log(food.quantity)
    // console.log(food);
    const incrementQuantity = () => {
        if (quantities < 20) {
            if (quantities === food.quantity) {
                swal("You already have the maximum quantity and no more available .");
            } else {
                setQuantity(quantities + 1);
            }
        } else {
            swal("You can't purchase more than 20 items.");
        }
    };

    const decrementQuantity = () => {
        if (quantities > 1) {
            setQuantity(quantities - 1);
        }
    };


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
                        <h1 className='text-xl font-semibold' > price:{price} $</h1>
                        <p>Ingredients: {ingredients}</p>
                        <p className='text-xl font-semibold text-red-500 py-2'>Available quantity : {quantity}</p>

                        <div className="card-actions justify-end">

                            {/* <!-- Input Number --> */}
                            <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                                <div className="w-full flex justify-between items-center gap-x-5">
                                    <div className="grow">
                                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                                            Select quantity
                                        </span>
                                        <input
                                            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                            type="text" name='quantities'
                                            value={quantities}
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex justify-end items-center gap-x-1.5">
                                        <button
                                            type="button"
                                            onClick={decrementQuantity}
                                            className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover-bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark-bg-slate-900 dark-border-gray-700 dark-text-white dark-hover-bg-gray-800 dark-focus:outline-none dark-focus:ring-1 dark-focus:ring-gray-600"
                                            data-hs-input-number-decrement
                                        >
                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={incrementQuantity}
                                            className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover-bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark-bg-slate-900 dark-border-gray-700 dark-text-white dark-hover-bg-gray-800 dark-focus:outline-none dark-focus:ring-1 dark-focus:ring-gray-600"
                                            data-hs-input-number-increment>
                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Input Number --> */}

                            <NavLink to={`/details/${_id}`}>
                                <button className="btn btn-warning btn-outline font-bold text-slate-100">Details</button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;