import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import bg_2 from "../images/bg_2.jpg";
import Carousel from '../components/Carousel';
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2020 = () => {
    const images = [bg_2, bg_3, bg_2, bg_3];

    const {setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
      });

    return (
        <div className="relative w-full min-h-screen bg-black">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />

                    <div className="flex flex-col mt-20 md:flex-row justify-center md:mt-40 p-4">
                        <div className="w-full md:w-2/3 justify-center items-center">
                            <h1 className="text-2xl md:text-4xl sm:text-4xl font-bold text-white text-center">Achievements (2020)</h1>
                            <p className="text-sm md:text-lg text-gray-300 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                            </p>
                            <p className="text-sm md:text-lg text-gray-300 mt-4">
                                Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fame Cup - Model Town */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-start md:ml-32 md:mt-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">Fame Cup - Model Town</h2>
                    </div>
                    <div className="relative flex flex-col md:flex-row mt-8 md:mt-8 md:mr-32">
                        <div className="relative md:w-4/6">
                            <Carousel images={images} />
                        </div>
                        <p className="text-sm md:text-lg md:w-2/6 md:ml-8 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                        </p>
                    </div>
                </div>
            </div>

            {/* All Pakistan Cup - Depalpur */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-start md:ml-32 md:mt-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">All Pakistan Cup - Depalpur</h2>
                    </div>
                    <div className="relative flex flex-col md:flex-row mt-8 md:mt-8 md:mr-32">
                        <div className="relative md:w-4/6">
                            <Carousel images={images} />
                        </div>
                        <p className="text-sm md:text-lg md:w-2/6 md:ml-8 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                        </p>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Awards2020;
