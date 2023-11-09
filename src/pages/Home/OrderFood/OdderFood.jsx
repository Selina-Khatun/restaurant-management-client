import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import FoodRow from './FoodRow';
import swal from 'sweetalert';

const OdderFood = () => {
    const { user } = useContext(AuthContext);
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchased?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])
    const handleDelete = (id) => {
        console.log('Delete button clicked for ID:', id);
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log('Deleting item with ID:', id);
                    fetch(`http://localhost:5000/purchased/${id}`, {
                        method: 'DELETE'
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            console.log('Delete request response:', data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary product has been deleted!", "success");
                                const remaining = ordered.filter((order) => order._id !== id);
                                console.log('Remaining items:', remaining);
                                setOrdered(remaining);
                                console.log('Updated ordered state:', ordered);
                            }
                        });
                }
            });
    };

    return (
        <div>

            <h1 className='text-4xl py-5 text-center  font-bold my-7 text-red-600'> My ordered food items  : {ordered.length}</h1>


            {ordered.length > 0 ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-xl'>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    added time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    food owner
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordered.map(order => <FoodRow key={order._id}
                                    _id={order._id}
                                    food_name={order.food_name}
                                    price={order.price}
                                    buyerName={order.buyerName}
                                    email={order.email}
                                    photo={order.photo}
                                    date={order.date}
                                    quantities={order.quantities}
                                    order={order}
                                    ordered={ordered}
                                    user={user}
                                    handleDelete={handleDelete}
                                ></FoodRow>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='text-4xl py-5 text-center  font-bold my-7 text-red-600' >You didn't order any item</div>

            )}





        </div>
    );
};

export default OdderFood;