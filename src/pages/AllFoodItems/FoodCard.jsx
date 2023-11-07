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