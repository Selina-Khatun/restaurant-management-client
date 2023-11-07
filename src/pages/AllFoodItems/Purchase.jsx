import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const { foods } = useContext(AuthContext);
    // console.log('foods:', foods);
    const { id } = useParams();
    console.log('ID:', id);

    useEffect(() => {
        if (foods && id) {
            const foundItem = foods.find(item => item._id === id);
            console.log(foundItem);
            setSelectedItem(foundItem);

        }

    }, [id, foods]);
    if (!selectedItem || Object.keys(selectedItem).length === 0) {
        return <div><span className="loading loading-spinner loading-sm"></span></div>;
    }
    const { _id, category, description, food_name, image, ingredients, making, origin, price, procedure } = selectedItem;

    console.log(selectedItem);

    const handlePurchaseItem = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photo = form.photo.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const category = form.category.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        // const updateProduct = { name, photo, brand, price, category, ratings, description };
        // console.log(updateProduct);
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
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" defaultValue={food_name} required />
                            </div>
                            
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                                <input type="text" name="brand" defaultValue={brand} id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" defaultValue={price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                            </div>
                            
                            <div>
                                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ratings</label>
                                <input type="number" name="ratings" defaultValue={ratings} id="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name='description' defaultValue={description} placeholder="Your description here"></textarea>
                            </div>
                        </div>

                        <button type="submit" className="w-full my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Purchase;