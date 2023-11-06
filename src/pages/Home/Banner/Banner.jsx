import React from 'react';
import './Banner.css';

const Banner = () => {
    

    return (


        <div className="carousel w-full py-10 my-10 ">
            <div id="slide1" className="carousel-item relative w-full shine-image h-[70vh] rounded-xl">
                <img src="https://i.postimg.cc/76CbR42t/chanel3.jpg" className="  w-full  brightness-50 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className='w-[50%] mx-auto text-center animate-pulse'>
                        <h1 className=' font-dancing-script text-7xl font-extrabold text-white '>The best tasting experience</h1>
                        <h1 className=' p-5 font-bold text-gray-400 '>If you’re looking for authentic  and delicious Indian Cuisine, Foodoko is the perfect location for lunch or dinner!</h1>
                        <button className="btn btn-warning btn-outline font-bold text-slate-100"> all menus</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-warning btn-outline">❮</a>
                    <a href="#slide2" className="btn btn-warning btn-outline">❯</a>

                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full shine-image h-[70vh] rounded-xl">
                <img src="https://i.postimg.cc/d1nn58Gj/chanel4.jpg" className="w-full  brightness-75" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className='w-[50%] mx-auto text-center animate-pulse'>
                        <h1 className=' font-dancing-script text-7xl font-extrabold text-white '>Granny offers you</h1>
                        <h1 className='p-5 font-bold text-white'>Granny help you treat yourself with a different meal everyday, thanks to our daily changing menus and our awesome creative chefs!</h1>
                        <button className="btn btn-warning btn-outline font-bold text-slate-100">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-warning btn-outline">❮</a>
                    <a href="#slide3" className="btn btn-warning btn-outline">❯</a>

                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full shine-image h-[70vh] rounded-xl">
                <img src="https://i.ibb.co/gPR1bW1/revlon1.jpg" className="w-full brightness-50 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <div className='w-[50%] mx-auto text-center animate-pulse '>
                        <h1 className=' font-dancing-script text-7xl font-extrabold text-white '>Hot and ready to serve</h1>
                        <h1 className='p-5 font-bold text-white'>Granny have offered a team of culinary professionals that make delectable dishes at memorable events for both private clientele.</h1>
                        <button className="btn btn-warning btn-outline font-bold text-slate-100">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-warning btn-outline">❮</a>
                    <a href="#slide4" className="btn btn-warning btn-outline">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full shine-image h-[70vh] rounded-xl">
                <img src="https://i.ibb.co/tK4dkXL/revlon2shadow-Plate.jpg" className="w-full brightness-50 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className='w-[50%] mx-auto text-center animate-pulse'>
                        <h1 className=' font-dancing-script text-7xl font-extrabold text-white '>Quality is the heart
</h1>
                        <h1 className='p-5 font-bold text-white'>Who said healthy food can't also be delicious? Granny creative chefs use fresh and seasonal ingredients to make affordable.</h1>
                        <button className="btn btn-warning btn-outline font-bold text-slate-100">All Menus</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-warning btn-outline">❮</a>
                    <a href="#slide1" className="btn btn-warning btn-outline">❯</a>

                </div>

            </div>
        </div>

    );
};

export default Banner;