import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full" id="controls-carousel">
            <div className="relative h-80 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 left-0 z-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevImage}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-700 group-hover:bg-red-600 group-focus:ring-4 group-focus:ring-red-600 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextImage}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-700 group-hover:bg-red-600 group-focus:ring-4 group-focus:ring-red-600 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
