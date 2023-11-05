import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Login = () => {
    const [showPassword, setShowPassword] = useState();
    return (

        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <img className=' transition duration-500 ease-in-out hover:scale-150' src="https://i.ibb.co/ydQrpfS/logo-dark.png" alt="" />
                    </div>
                    <p className="mt-6 font-normal text-center text-white md:mt-0 animate-pulse">
                    login to know our latest news updates about our offers, recipes and events. One cannot think well, love well, sleep well, if one has not dined well.
                    </p>
                    <div className="text-sm font-medium text-white dark:text-gray-300">
                        Don't have an account? <Link to={"/login"}
                            className="font-medium  transition-colors text-rose-200 hover:text-blue-700"

                        >
                            sign up
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input
                                type="email"
                                name='email'
                                id="email"
                                autoFocus
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" required
                            />
                        </div>
                        <div className=' relative'>
                                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <span className=' absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                    </span>
                                </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" required
                            />
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Log in
                            </button>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or login with</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                >
                                    <span>
                                    <FcGoogle></FcGoogle> 
                                    </span>
                                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg className="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">Twitter</span>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;