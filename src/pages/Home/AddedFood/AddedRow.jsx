import React, { useState } from 'react';

const AddedRow = ({ addedFood }) => {
    // console.log(addedFood)
    // const [names, setNames] = useState();
    // const [image, setImage] = useState();
    // const [prices, setPrices] = useState();
    const { _id, addByName, category, price, description, name, origin, quantity, email, photo, date, quantities } = addedFood;

    const handleUpdateProduct = event => {
        // event.preventDefault();
        const form = event.target;
        // console.log(names, image, prices)
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const updateProduct = { name, photo, price };
        console.log(updateProduct);
        fetch(`https://restaurant-management-server-five.vercel.app/${_id}`, {
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
                }
            })

    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-4">
                <img src={photo} alt="Apple Watch" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {name}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {price}
            </td>


            <td className="px-6 py-4">
                {/* <button onClick={() => handleUpdateProduct(_id)} className="font-medium btn-outline btn text-red-600 dark:text-red-500 hover:underline">update</button> */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <div>
                            <form onSubmit={handleUpdateProduct} method="dialog">

                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" defaultValue={name} required />

                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product photo</label>
                                    <input type="url" name="photo" defaultValue={photo} id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" https://example.com" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="number" name="price" defaultValue={price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                                </div>
                                <div className="modal-action">

                                    {/* if there is a button, it will close the modal */}
                                    <button className="font-medium btn-outline btn text-red-600 dark:text-red-500 hover:underline">update</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>


            </td>
        </tr>
    );
};

export default AddedRow;