import React from 'react';

const DailyMenus = () => {
    return (
        <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute  xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-[80vh] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                        src="https://i.ibb.co/gz9s4y3/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai-188544-13382.jpg"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5 transition duration-500 hover:scale-105  hover:bg-slate-200 p-5 rounded-xl">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                        <h2 className="mb-5 font-sans font-kaushan-script text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl sm:leading-none">
                        Start eating better
                            <br className="hidden md:block" />
                            Daily New Fresh Menus
                            
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Monkfish, onion, paella rice, garlic & smoked paprika, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping. creamy chesapeake crab dip with artichoke, baked and topped with a hot cheddar cheese.
                        </p>
                        <div className="flex items-center">
                            
                            <button className='btn btn-warning'>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DailyMenus;