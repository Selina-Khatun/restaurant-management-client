import React, { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {
    const [showPassword, setShowPassword] = useState();
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = event.target.terms.checked
        // console.log(name, email, password, accepted);
        if (password.length < 6) {
            swall('Password should be at least 6 characters or more.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            swal('Password must contain at least one capital letter.');
            return;
        } else if (!/[@#$%^&+=]/.test(password)) {
            swal('Password must contain at least one special character (@, #, $, %, ^, &, +, or =).');
            return;
        } else if (!accepted) {
            swal('Please accept our term and conditions!!!!')
        } else {

            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    swal('Registration successful!');
                })
                .catch(error => {
                    console.error(error);
                    swal('Email-already-in-use');

                })
            form.reset('');
        }

    }
    return (
        <div>
            <section data-aos="zoom-in-up" className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Nice to meet you! Enter your details to register
                            </h1>

                            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>

                                <div className=' relative'>
                                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <span className=' absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                    </span>
                                </div>

                                <div className="flex items-start">
                                    {/* <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div> */}
                                    <div className="ml-3 text-sm">
                                    <input id="remember" aria-describedby="remember" type="checkbox" name='terms' className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">  I agree the Terms and Conditions</label>
                                    </div>
                                </div>
                                {/* <button type="submit" >Sign Up </button> */}
                                <input type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Sign Up" />
                            </form>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <Link to={"/login"}
                                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"

                                >
                                    LogIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;