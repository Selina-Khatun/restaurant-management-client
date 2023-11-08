import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { data } from 'autoprefixer';

const OdderFood = () => {
    const { user } = useContext(AuthContext);
    const [ordered, setOrdered] = useState([]);
    // const url = `;
    // useEffect(() => {
    //     fetch(`http://localhost:5000/purchased?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    // }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/purchased?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])
    return (
        <div>
            My ordered food items   {ordered.length}
        </div>
    );
};

export default OdderFood;