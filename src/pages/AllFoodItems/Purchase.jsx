import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useParams } from 'react-router-dom';

const Purchase = () => {
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

    const handlePurchaseItem = event => {
        event.preventDefault();
        const form = event.target;
        const food_name = form.food_name.value;
        const buyerName = form.buyerName.value;
        const price = form.price.value;
        const buyerEmail = form.buyerEmail.value;
        const date = form.ratings.value;
        const description = form.description.value;
        const purchaseItem = { _id, category, description, food_name, image, ingredients, making, origin, price, procedure };
        console.log(purchaseItem);
        fetch(`https://brand-shop-server-o7wq85cow-selinakhatuns-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Good job!",
                        text: "product updated successfully!",
                        icon: "success",
                        button: "Aww yiss!",

                    });
                    form.reset();
                }
            })

    }


    return (
        <div>
            purchase

            <section data-aos="fade-up" className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
                    <form onSubmit={handlePurchaseItem}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                                <input type="text" name="food_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" defaultValue={food_name} required />
                            </div>

                            {/* <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name='category' defaultValue={category} >
                                        <option defaultValue="">Select category</option>
                                        <option value="Makeup">soup</option>
                                        <option value="Health">rice </option>
                                        <option value="Beauty">tacos</option>
                                        <option value="oil">Burger</option>
                                        <option value="Cream">salad</option>
                                        <option value="Cream">sea food</option>
                                        <option value="Cream">sushi</option>
                                        <option value="Cream">pasta</option>
                                        <option value="Cream">curry</option>
                                        <option value="Cream">pizza</option>
                                        <option value="Cream">risotto</option>

                                    </select>
                                </div> */}

                            <div className="w-full">
                                <label htmlFor="buyerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer Name</label>
                                <input type="text" name="buyerName" defaultValue="Buyer Name" id="buyerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerName" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="buyerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer Name</label>
                                <input type="email" name="buyerEmail" defaultValue="buyerEmail Name" id="buyerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerEmail" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" defaultValue={price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                            </div>




                            <div>
                                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buying date</label>
                                <input type="number" name="date" defaultValue='date' id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="date" required />
                            </div>

                        </div>


                        <div className="w-32 mb-8 ">
                            <label htmlFor=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
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

                        <button type="submit" className="w-full my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Item</button>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default Purchase;