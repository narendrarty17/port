import React, { useState } from 'react';
import ImageSlider from './utils/imageSlider';

const images = [
    "/images/portfolio/project_0.jpg",
    "/images/portfolio/project_01.jpg",
    "/images/portfolio/project_02.jpg",
    "/images/portfolio/project_03.jpg"
]


const portfolio = () => {
    return (
        <div className="flex flex-col p-10 gap-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:items-center">
                <div className="text-3xl font-bold">
                    <h1 className="text-slate-700">Lets have a look at my </h1>
                    <h1 className="text-orange-400">Portfolio</h1>
                </div>
                <button className="bg-orange-400 mt-3 text-white font-medium text-xl px-4 h-12 w-[120px] rounded-3xl">
                    See All
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <ImageSlider images={images} />
                <div className="flex gap-2 justify-center">
                    <div className="w-10 h-3 bg-orange-400 rounded-lg" />
                    <div className="w-3 h-3 bg-gray-300 rounded-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 ml-auto mr-auto">
                <button className="bg-gray-200 px-3 py-2 rounded-3xl">
                    Landing Page
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded-3xl">
                    Product Design
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded-3xl">
                    Animation
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded-3xl">
                    Glassmorphism
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded-3xl">
                    Cards
                </button>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tighter">Lirante - Food Delivery Solution</h1>
                    <img
                        className="hidden md:inline h-10"
                        src="/images/up-right-arrow.svg"
                    />
                </div>
                <div className="text-slate-700 text-center text-xl tracking-tight max-w-[746px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
                    interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                </div>
            </div>
        </div>
    );
}

export default portfolio;