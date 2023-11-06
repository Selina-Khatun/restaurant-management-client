import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);
    // // console.log(user);
    // const handleLogout = () => {
    //     console.log("Logging out...");
    //     logOut()
    //         .then(() => {
    //             console.log("Logged out successfully.");
    //         })
    //         .catch(error => {
    //             console.error("Log out error:", error);
    //         });
    // }

    const navLinks = <>

        <li ><NavLink className='mr-10 font-bold' to={"/"}>Home</NavLink></li>
        <li ><NavLink className='mr-10 font-bold' to={"/allFoodItems"}>All Food Items</NavLink></li>
        <li ><NavLink className='mr-10 font-bold' to={"/blog"}>Blog</NavLink></li>
        <li ><NavLink className='mr-10 font-bold' to={"/registration"}>Registration</NavLink></li>
        {/* <li ><NavLink className='mr-10 font-bold' to={"/login"}>Login</NavLink></li> */}

    </>


    return (
        <div>
            <nav className=" navbar sticky top-0 pt-5 shadow-2xl rounded-xl  bg-base-100 z-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-[29%] ml-10 animate-bounce' src="https://i.ibb.co/ydQrpfS/logo-dark.png" alt="" />
                    <div>
                        <img className='w-[20%] animate-bounce' src="https://i.ibb.co/vH0C4ys/well-new-logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className='btn btn-outline btn-warning lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>

                {/*  {user ? (
                        <div className=' flex justify-center flex-wrap-reverse lg:mt-0 mt-10 items-center gap-3'>
                            <div className='flex flex-col flex-wrap'>
                                <p className=' text-rose-600 lg:font-bold'>{user?.displayName} </p>
                                <p className=' text-rose-600 lg:font-bold text-xs'>{user?.email} </p>
                            </div>
                            <label tabIndex={0} className="btn btn-ghost btn-circle border-rose-300 avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleLogout} className='btn btn-outline btn-error lg:text-white text-black'> log out</button>

                        </div>
                    ) : (
                        <button className='btn btn-outline btn-error lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>

                    )} */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;