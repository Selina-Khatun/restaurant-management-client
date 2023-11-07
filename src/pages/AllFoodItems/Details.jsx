import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Details = () => {
    const { foods } = useContext(AuthContext);
    const { _id } = useParams();

    // Check if the "foods" array is defined before using find
    const getFoodDetails = (foodId) => {
        if (!foods) {
            return null;
        }
        const food = foods.find((item) => item._id === foodId);
        return food;
    };

    const [foodDetails, setFoodDetails] = useState(null);

    useEffect(() => {
        // Check if "foods" array is defined before fetching data
        if (!foods) {
            return;
        }

        fetch(`http://localhost:5000/foods/${_id}`)
            .then((response) => response.json())
            .then((data) => setFoodDetails(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [foods, _id]); // Use "foods" and "_id" as dependencies

    // Change "foodId" to "_id" in the following line
    const food = getFoodDetails(_id);

    if (!foodDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{food.food_name}</h1>
            <img src={food.image} alt={food.food_name} />
            <p>Category: {food.category}</p>
            <p>Price: {food.price} $</p>
        </div>
    );
};

export default Details;
