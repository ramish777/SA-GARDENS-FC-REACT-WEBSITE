import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import bg_2 from "../images/bg_2.jpg";
import { Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';

const LandingPage = () => {
    const images = [bg_2, bg_3, bg_2, bg_3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const { handleLinkClick } = useContext(NavbarContext);

    const handleLearnMoreClick = () => {
        navigate('/academy');
        handleLinkClick('Academy')
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
          nextImage();
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    });

    return (
        <div className="relative w-full min-h-screen bg-black">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />

                    <div className="flex flex-col md:flex-row justify-center md:mt-40 p-4">
                        <div className="w-full md:w-2/3 justify-center items-center">
                            <h1 className="text-2xl md:text-4xl sm:text-4xl font-bold text-white text-center">Welcome to SA Gardens Football Club</h1>
                            <p className="text-sm md:text-lg text-gray-300 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                            </p>
                            <p className="text-sm md:text-lg text-gray-300 mt-4">
                                Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:mt-10 p-4">
                            <button
                            className="bg-red-600 text-white font-bold py-3 px-6 rounded text-lg hover:bg-transparent hover:border-white hover:border-2 hover:text-white transition-colors duration-300"
                            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfCOYbkn_ZBPItidbVny18AZM2-6UfXStsCB7_wCNJoO-xD9w/viewform?usp=sf_link", "_blank")}
                            >
                            Join Us
                        </button>
                        <button className=" text-white font-bold py-3 px-6 rounded text-lg ml-4" onClick={handleLearnMoreClick}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* FASTEST GROWING  */}
            <div class="flex flex-col md:flex-row p-4 bg-gray-800">
                <div class="h-auto p-4 w-full">
                    <div class="flex flex-col items-center justify-center md:flex-row">
                        <h2 class="text-center text-white font-bold text-xl md:text-4xl">Fastest growing club in the world</h2>
                    </div>
                    <div class="flex flex-col items-center md:ml-32 md:mr-32 justify-center md:flex-row md:mt-8">
                        <div class="flex flex-col items-center bg-red-600 rounded-lg h-72 w-full p-4 md:w-1/4 m-1">
                            <h1 class="text-4xl font-bold text-white">10</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Cities completed in</h1>
                            <h1 class="text-l text-white">Lyari, Quetta, Chitral,</h1>
                            <h1 class="text-l text-white">Islamabad, Peshawar,</h1>
                            <h1 class="text-l text-white">Mansehra, Faisalabad,</h1>
                            <h1 class="text-l text-white">Gujranwala, Sialkot,</h1>
                            <h1 class="text-l text-white">Lahore</h1>
                        </div>
                        <div class="flex flex-col items-center bg-red-600 rounded-lg h-72 w-full p-4 md:w-1/4 m-1">
                            <h1 class="text-4xl font-bold text-white">8</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Cities employed from</h1>
                            <h1 class="text-l text-white">Chitral, Gilgit, Hazara,</h1>
                            <h1 class="text-l text-white">Islamabad, Faisalabad,</h1>
                            <h1 class="text-l text-white">Gujranwala, Kashmir,</h1>
                            <h1 class="text-l text-white">Lahore</h1>
                        </div>
                        <div class="flex flex-col items-center bg-red-600 rounded-lg h-72 w-full p-4 md:w-1/4 m-1">
                            <h1 class="text-4xl font-bold text-white">67%</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Win percentage</h1>
                            <h1 class="text-l text-white">12/18 tournaments</h1>
                            <h1 class="text-l text-white">won within a year</h1>
                        </div>
                        <div class="flex flex-col items-center bg-red-600 rounded-lg h-72 w-full p-4 md:w-1/4 m-1">
                            <h1 class="text-4xl font-bold text-white">4</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">International Representation</h1>
                            <h1 class="text-l text-white">Our players have represented</h1>
                            <h1 class="text-l text-white">Pakistan in Hungary, South</h1>
                            <h1 class="text-l text-white">Africa, Brazil, Nepal</h1>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Clubs and facilties */}
            <div className="flex flex-col md:flex-row p-4 bg-gray-700">
                <div className="flex flex-col w-full items-start md:ml-32 md:mr-32 md:mt-8 md:mb-8 p-4">
                    <div className="flex w-full items-center justify-between md:mr-8 sm:mr-8">
                        <div className="flex items-center">
                            <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                            <h2 className="text-white text-xl md:text-2xl font-bold ml-4">Clubs and facilities </h2>
                        </div>
                        <div className="flex space-x-1">
                            <button className="bg-gray-500 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                            onClick={prevImage}>
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                            <button className="bg-gray-500 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                            onClick={nextImage}
                            >
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className=" w-full items-center justify-center flex flex-col md:flex-row">

                    <div className=" flex flex-col w-full md:flex-row mt-8 md:mt-8">
                    <div className="relative w-full" id="controls-carousel">
                        <div className="relative h-screen overflow-hidden rounded-lg md:h-96">
                        {images.map((image, index) => (
                            <img
                            key={index}
                            src={image}
                            className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                            alt={`Slide ${index + 1}`}
                            />
                        ))}
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* ACADEMY STRUCTURE  */}
            <div class="flex flex-col md:flex-row p-4 bg-gray-800">
                <div class="h-auto p-4 w-full">
                    <div class="flex flex-col items-center justify-center md:flex-row">
                        <h2 class="text-center text-white font-bold text-xl md:text-4xl">ACADEMY STRUCTURE</h2>
                    </div>
                    <div class="flex flex-col items-center md:ml-32 md:mr-32 justify-center md:flex-row md:mt-8">
                        <div class="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 md:w-1/4 m-4">
                            <h1 class="text-4xl md:text-8xl p-4 font-bold text-white">4</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Age Categories</h1>    
                        </div>
                        <div class="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 md:w-1/4 m-4">
                            <h1 class="text-4xl md:text-8xl p-4 font-bold text-white">3</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Academy Centers</h1>
                        </div>
                        <div class="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 md:w-1/4 m-4">
                            <h1 class="text-4xl md:text-8xl p-4 font-bold text-white">150+</h1>
                            <h1 class="mt-4 text-lg font-bold text-white mb-8">Student Athletes</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* Achievements */}
            <div className="flex flex-col md:flex-row p-4 bg-gray-700">

                <div className="flex flex-col items-start md:ml-32 md:mt-8 md:mb-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                        <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                        <h2 className="text-white text-2xl font-bold ml-4">Achievements</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row mt-8 md:mt-8 md:mr-32">
                        <div className="relative w-full mb-4 md:mb-0 md:mr-4 group">
                        <Link to="/awards-2020">
                            <img src={bg_3} alt="Achievement" className="w-full rounded-lg bg-black transition-opacity duration-300 cursor-pointer group-hover:opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg">2020 2x Trophies</span>
                            </div> 
                            <h1 className="text-center text-white mt-5 font-bold">Click to view</h1> 
                            <h1 className="text-center text-white font-bold">2020 2x Trophies </h1>  
                        </Link> 
                        </div>
                        <div className="relative w-full mb-4 md:mb-0 md:mr-4 group">
                        <Link to="/awards-2021-22">
                            <img src={bg_3} alt="Achievement" className="w-full rounded-lg bg-black transition-opacity duration-300 cursor-pointer group-hover:opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold  text-lg">2021-22 4x Trophies</span>
                            </div>
                            <h1 className="text-center text-white mt-5 font-bold">Click to view</h1> 
                            <h1 className="text-center text-white font-bold">2021-22 4x Trophies </h1>
                        </Link>
                        </div>
                        <div className="relative w-full mb-4 md:mb-0 md:mr-4 group">
                        <Link to="/awards-2022-23">
                            <img src={bg_3} alt="Achievement" className="w-full rounded-lg bg-black transition-opacity duration-300 cursor-pointer group-hover:opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg">2022-23 6x Trophies</span>
                            </div>
                            <h1 className="text-center text-white mt-5 font-bold">Click to view</h1> 
                            <h1 className="text-center text-white  font-bold">2022-23 6x Trophies </h1>
                        </Link>
                        </div>
                        
                    </div>


                </div>
               
            </div>

            {/* Teams */}

            <div className="flex flex-col md:flex-row p-4 bg-gray-700">

                <div className="flex flex-col items-start md:ml-32 md:mt-8 md:mb-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                        <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                        <h2 className="text-white text-2xl font-bold ml-4">Teams</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row mt-8 md:mt-8 md:mr-32">
                        <div className="relative w-full mb-4 md:mb-0 md:mr-4 group">
                            <Link to="/football-players">
                            <img src={bg_2} alt="Achievement" className="w-full rounded-lg bg-black transition-opacity duration-300 cursor-pointer group-hover:opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg">See our Football Team </span>
                            </div>
                            
                            <h1 className="text-center text-white mt-5 font-bold"> View our Football Team </h1>
                            </Link>
                        </div>
                        <div className="relative w-full mb-4 md:mb-0 md:mr-4 group">
                            <Link to="/futsal-players">
                            <img src={bg_2} alt="Achievement" className="w-full rounded-lg bg-black transition-opacity duration-300 cursor-pointer group-hover:opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg">See our Futsal Team</span>
                            </div>
                            
                            <h1 className="text-center text-white mt-5 font-bold"> View our Futsal Team </h1>
                            </Link>
                        </div>
                    </div>


                </div>
               
            </div>

            {/* footer */}
            <Footer/>

            
        </div>
    );
};

export default LandingPage;
