import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Details = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const { foods } = useContext(AuthContext);
    // console.log('foods:', foods);
    const { id } = useParams();
    // console.log('ID:', id);

    useEffect(() => {
        if (foods && id) {
            const foundItem = foods.find(item => item._id === id);
            // console.log(foundItem);
            setSelectedItem(foundItem);

        }

    }, [id, foods]);
    if (!selectedItem || Object.keys(selectedItem).length === 0) {
        return <div><span className="loading loading-spinner loading-sm"></span></div>;
    }
    const { _id, category, description, food_name, image, ingredients, making, origin, price, procedure } = selectedItem;

    // console.log(selectedItem);

    return (
        <div>
            <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src={image} alt=""
                                        className="object-cover w-full lg:h-full " />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={image} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={image} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={image}
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                            <img src={image} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        {food_name}</h2>
                                    <div className="flex items-center mb-6">
                                        <ul className="flex mr-2">
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                                    </div>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        <span className='text-2xl text-rose-500 font-semibold'>Description : <br /></span> {description}
                                    </p>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        <span className='text-2xl text-rose-500 font-semibold'> Ingredients : <br /></span>  {ingredients}
                                    </p>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        <span className="max-w-md mb-8 text-gray-700 dark:text-gray-400"> Procedure : <br /></span> {procedure}
                                    </p>
                                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span> Price :{price} $</span>
                                    </p>
                                    <p className="text-green-600 dark:text-green-300 ">stock  in </p>
                                </div>
                                <div className="flex items-center mb-8">
                                    <h2 className=" mr-6 text-xl font-bold dark:text-gray-400">
                                        Category :{category}</h2>

                                </div>
                                <h2 className=" text-xl pb-4 font-bold text-rose-500">
                                    Made by : </h2>
                                <div className="flex items-center mb-8">
                                    <h2 className=" text-xl font-bold dark:text-gray-400">
                                        Origin :  {origin}</h2>


                                </div>

                                <div className="flex flex-wrap items-center -mx-4 ">
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">

                                        <Link to={`/purchase/${_id}`}> <button
                                            className="flex btn btn-outline btn-error items-center justify-center w-full p-4  rounded-md ">
                                            Order Now
                                        </button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;
