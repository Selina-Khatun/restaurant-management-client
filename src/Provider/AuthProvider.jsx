import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';
// import { data } from 'autoprefixer';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState();
    const [orders, setOrders] = useState();
    const [myItems, setMyItems] = useState();


    useEffect(() => {
        fetch('https://restaurant-management-server-five.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    useEffect(() => {
        fetch('https://restaurant-management-server-five.vercel.app/purchased?email=${user?.email}')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    useEffect(() => {
        fetch('https://restaurant-management-server-five.vercel.app/myItems')
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [])
    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('state changed');
            setUser(currentUser);
            // console.log(currentUser, 'currentUser')
            setLoading(false);
        });

        return () => unsubscribe();

    }, [])


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        foods,
        orders,
        myItems,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.prototypes = {
    children: PropTypes.node
}

