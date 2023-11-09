import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddedFood = () => {
    const {myItems}=useContext(AuthContext);
    return (
        <div>
            my added food :{myItems.length}
        </div>
    );
};

export default AddedFood;