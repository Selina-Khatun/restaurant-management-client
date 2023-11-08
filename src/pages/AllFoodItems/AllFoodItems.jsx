import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import FoodCard from './FoodCard';

const AllFoodItems = () => {
    const { foods } = useContext(AuthContext);
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleQuery = () => {
        setQuery(inputValue);
    };

    if (!foods) {
        return <div>Loading...</div>;
    }

    const filteredFoods = foods.filter((food) =>
        food.food_name.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div>
            <div className="mb-3 ">
                <div className="relative flex w-1/2 my-9 py-10 mx-auto items-stretch flex-wrap ">
                    <input
                        type="search"
                        className="relative m-0 mx-auto max-w-sm -mr-3 block min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-2 text-sm font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-[#FF444A] focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search here...."
                        onChange={handleInputChange}
                        aria-label="Search"
                        aria-describedby="button-addon1" />


                    <button
                        onClick={handleQuery}
                        className="relative z-[2] flex items-center rounded-r bg-[#FF444A] px-6 py-2.5 text-sm font-medium  leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:bg-[#FF444A] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        type="button"
                        id="button-addon1"

                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Search
                    </button>

                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


            {filteredFoods.map((food) => (
                    <FoodCard
                        key={food._id}
                        _id={food._id}
                        category={food.category}
                        description={food.description}
                        food_name={food.food_name}
                        image={food.image}
                        ingredients={food.ingredients}
                        making={food.making}
                        origin={food.origin}
                        quantity={food.quantity}
                        madeBy={food.madeBy}
                        price={food.price}
                        procedure={food.procedure}
                        food={food}
                    />
                ))}

            </div>
        </div>
    );
};

export default AllFoodItems;