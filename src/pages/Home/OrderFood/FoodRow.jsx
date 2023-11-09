
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const FoodRow = ({order,handleDelete}) => {
    const { orders ,user} = useContext(AuthContext);
    
    const { _id, food_name, price, buyerName, email, photo, date, quantities } = order;
    // console.log(orders);
  
  

    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-4">
                <img src={photo} alt="Apple Watch" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {food_name}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {price}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {date}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {buyerName}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleDelete(_id)} className="font-medium btn-outline btn text-red-600 dark:text-red-500 hover:underline">delete</button>
            </td>
        </tr>

    );
};

export default FoodRow;