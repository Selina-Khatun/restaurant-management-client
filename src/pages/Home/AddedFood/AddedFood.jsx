import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import AddedRow from './AddedRow';

const AddedFood = () => {
    const {user, myItems } = useContext(AuthContext);
    const [addedFoods, setAddedFoods] = useState([]);
    // console.log(myItems)
    useEffect(() => {
        fetch(`https://restaurant-management-server-five.vercel.app/myItems`)
            .then(res => res.json())
            .then(data => setAddedFoods(data));
    }, [myItems])
    

    return (
        <div>



            <h1 className='text-4xl py-5 text-center  font-bold my-7 text-red-600'> My added food items  :{addedFoods.length} </h1>

            {addedFoods.length > 0 ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-xl w'>
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
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedFoods.map(addedFood => <AddedRow key={addedFood._id}
                                    _id={addedFood._id}
                                    food_name={addedFood.food_name}
                                    price={addedFood.price}
                                    buyerName={addedFood.buyerName}
                                    email={addedFood.email}
                                    photo={addedFood.photo}
                                    date={addedFood.date}
                                    quantities={addedFood.quantities}
                                    addedFood={addedFood}
                                    user={user}
                                    // handleUpdateProduct={handleUpdateProduct}
                                >

                                    o
                                </AddedRow>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='text-4xl py-5 text-center  font-bold my-7 text-red-600' >You didn't added any food item</div>

            )}

        </div>
    );
};

export default AddedFood;