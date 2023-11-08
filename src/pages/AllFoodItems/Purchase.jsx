import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Purchase = () => {

    const [selectedItem, setSelectedItem] = useState({});
    const { foods, user } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    // console.log(user);
    // console.log('foods:', foods);
    // console.log('ID:', id);

    useEffect(() => {
        if (foods && id) {
            const foundItem = foods.find(item => item._id === id);
            // console.log(foundItem);
            setSelectedItem(foundItem);
        }
    }, [id, foods, selectedItem]);

    if (!selectedItem || Object.keys(selectedItem).length === 0) {
        return <div><span className="loading loading-spinner loading-sm"></span></div>;
    }
    const { _id, category, description, food_name, image, ingredients, making, origin, price, procedure } = selectedItem;
    // console.log(selectedItem);

    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        } else {
            swal("You can't purchase more than 20 items.");
        }
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePurchaseItem = event => {
        event.preventDefault();
        const form = event.target;
        const food_name = form.food_name.value;
        const buyerName = form.buyerName.value;
        const price = form.price.value;
        const quantity = form.quantity.value
        const email = user?.email;
        const date = form.date.value;
        const purchaseItem = {
            food_name: food_name,
            price: price,
            buyerName,
            email,
            date,
            quantity
        };
        // console.log(purchaseItem);
        fetch(`http://localhost:5000/purchased`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: " food item is successfully purchase!",
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
                                <input type="text" name="food_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" defaultValue={food_name} required readOnly />
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
                                <input type="text" name="buyerName" defaultValue={user?.displayName} id="buyerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerName" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="buyerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer email</label>
                                <input type="email" name="Email" defaultValue={user?.email} id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerEmail" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" defaultValue={price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" readOnly required />
                            </div>
                            <div>
                                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buying date</label>
                                <input type="date" name="date" defaultValue={new Date().toISOString().substring(0, 10)} id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="date" required />
                            </div>
                        </div>

                        {/* <!-- Input Number --> */}
                        <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                            <div className="w-full flex justify-between items-center gap-x-5">
                                <div className="grow">
                                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                                        Select quantity
                                    </span>
                                    <input
                                        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                        type="text" name='quantity'
                                        value={quantity}
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

                        <button type="submit" className="w-full my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Item</button>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default Purchase;