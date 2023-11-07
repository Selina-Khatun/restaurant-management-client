import React from 'react';

const AboutAs = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-primary-600 rounded-full text-blue-800 px-4 py-1.5 font-bold mr-3">New</span><span className="text-sm font-medium"> <span className='font-dancing-script font-bold text-3xl text-yellow-500'>Granny</span>  is out! See what's new</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold font-kaushan-script tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello dear</h1>
                    <h1 className='font-bold text-3xl'>Welcome To <span className='font-dancing-script font-extrabold text-6xl text-yellow-500'>Granny</span></h1>
                    <img src="" alt="" />
                    <p className="mb-8 text-lg font-normal py-4 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Granny was the first retaurant to open in Jamalpur, the resturant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and coffee roastery.</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex justify-center text-orange-300 items-center py-3 px-5 text-base font-medium text-center  rounded-lg bg-bg-orange-400 hover:text-slate-800 hover:bg-yellow-400 focus:ring-bg-orange-400 dark:focus:ring-bg-orange-400">
                            Learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>

                    </div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span className="font-semibold font-kaushan-script text-3xl uppercase ">Our Story</span>
                        <div className="flex shadow-2xl rounded-2xl justify-around items-center mt-8 text-gray-500 sm:justify-between">
                        
                            <div className="card w-96 ">
                                <div className="card-body items-center text-center">
                                    <h2 className='text-3xl font-bold font-kaushan-script text-yellow-500'>2005</h2>
                                    <h2 className="card-title text-2xl">Grand Opening</h2>
                                    <p>Granny was opened in May 6, 2005, the interior was created by the most famous artists. Today our restaurant welcomes 250 people!</p>
                                    
                                </div>
                            </div>
                            <div className="card w-96 ">
                                <div className="card-body items-center text-center">
                                    <h2 className='text-3xl font-bold font-kaushan-script text-yellow-500'>2015</h2>
                                    <h2 className="card-title text-2xl">Second Branch</h2>
                                    <p>Since the very first day, Granny was a gathering place for teachers, doctors, actors. Therefore we decided to open our second branch!</p>
                                    
                                </div>
                            </div>
                            <div className="card w-96 ">
                                <div className="card-body items-center text-center">
                                    <h2 className='text-3xl font-bold font-kaushan-script text-yellow-500'>2023</h2>
                                    <h2 className="card-title text-2xl">Great Taste Award</h2>
                                    <p>Granny was and still remains not just a restaurant, but also a remarkable part of the culture. We are happy to announce that we claim tate award.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutAs;