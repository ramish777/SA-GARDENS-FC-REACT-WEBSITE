import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import bg_2 from "../images/bg_2.jpg";
import { useState, useEffect } from 'react';
import LocationCard from "../components/Location";
import PricingCard from '../components/PriceCard';



const Academy = () => {
    const images = [bg_2, bg_3, bg_2, bg_3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#price') {
          const element = document.getElementById('price');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

    return (
        <div className="relative w-full min-h-screen bg-black">
    <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full overflow-y-auto">
            <Navbar />

            <div className="flex flex-col mt-20 lg:flex-row justify-center lg:mt-40 p-4">
                <div className="w-full lg:w-2/3 justify-center items-center">
                    <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Academy</h1>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                    </p>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-10 p-4">
                <button className="bg-red-600 text-white lg:w-1/3 font-bold py-3 px-6 rounded text-lg hover:bg-transparent hover:border-white hover:border-2 hover:text-white transition-colors duration-300"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfCOYbkn_ZBPItidbVny18AZM2-6UfXStsCB7_wCNJoO-xD9w/viewform?usp=sf_link", "_blank")}>
                    Join Now
                </button>
            </div>
        </div>
    </div>

    {/* Pricing Section */}
    <div id="price" className="locations-section items-center justify-center bg-gray-700 py-16">
        <h2 className="text-3xl font-bold text-center text-white lg:mb-4">Training Packages</h2>
        {/* <div className="h-2 rounded-lg w-64 bg-red-600 mx-auto"></div>  */}
        <div className="flex flex-col md:flex-row items-center justify-center p-4 lg:ml-32 lg:mr-32 lg:mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <PricingCard
                    ageCategory="Under 10"
                    price="50"
                    trainingTime="4 PM - 5 PM"
                    sessionsPerWeek="3"
                    importantInfo={[
                        "Access to all facilities",
                        "Qualified coaches",
                        "Special kids program"
                    ]}
                />
                <PricingCard
                    ageCategory="11-15"
                    price="70"
                    trainingTime="5 PM - 6 PM"
                    sessionsPerWeek="4"
                    importantInfo={[
                        "Access to all facilities",
                        "Qualified coaches",
                        "Advanced training program"
                    ]}
                />
                <PricingCard
                    ageCategory="16+"
                    price="90"
                    trainingTime="6 PM - 7 PM"
                    sessionsPerWeek="5"
                    importantInfo={[
                        "Access to all facilities",
                        "Qualified coaches",
                        "Intensive training sessions"
                    ]}
                />
                <PricingCard
                    ageCategory="16+"
                    price="90"
                    trainingTime="6 PM - 7 PM"
                    sessionsPerWeek="5"
                    importantInfo={[
                        "Access to all facilities",
                        "Qualified coaches",
                        "Intensive training sessions"
                    ]}
                />
            </div>
        </div>
    </div>
    
    {/* Clubs and facilities */}
    <div id="facilities" className="flex flex-col lg:flex-row p-4 bg-gray-800">
        <div className="flex flex-col w-full items-start lg:ml-32 lg:mr-32 lg:mt-8 lg:mb-8 p-4">
            <div className="flex w-full items-center justify-between lg:mr-8 sm:mr-8">
                <div className="flex items-center">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-xl lg:text-2xl font-bold ml-4">Our Facilities and Activities</h2>
                </div>
                <div className="flex space-x-1">
                    <button className="bg-gray-600 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                    onClick={prevImage}>
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                    <button className="bg-gray-600 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                    onClick={nextImage}
                    >
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className=" w-full items-center justify-center flex flex-col lg:flex-row">

                <div className=" flex flex-col w-full lg:flex-row mt-8 lg:mt-8">
                <div className="relative w-full" id="controls-carousel">
                    <div className="relative h-80 overflow-hidden rounded-lg lg:h-96">
                    {images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        alt={`Slide ${index + 1}`}
                        />
                    ))}
                    </div>
                </div>
                </div>
                
            </div>
            
            <div className="mt-8">
                <h3 className="text-white text-xl lg:text-2xl font-bold">Exciting Facilities We Offer</h3>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                    <li className="mb-2">State-of-the-art football fields</li>
                    <li className="mb-2">Fully equipped indoor gym</li>
                    <li className="mb-2">Modern classrooms for theory sessions</li>
                    <li className="mb-2">Swimming pool</li>
                    <li className="mb-2">Physiotherapy and medical center</li>
                    <li className="mb-2">Cafeteria with healthy meal options</li>
                    <li className="mb-2">Locker rooms and showers</li>
                    <li className="mb-2">Lounge area for parents and visitors</li>
                    <li className="mb-2">Training sessions with professional coaches</li>
                    <li className="mb-2">Tournaments and competitive matches</li>
                    <li className="mb-2">Personalized training programs</li>
                    <li className="mb-2">Video analysis sessions</li>
                </ul>
            </div>
            
        </div>
    </div>

    {/* Locations Section */}
    <div id="locations" className="locations-section items-center justify-center bg-gray-700 py-16">
        <h2 className="text-3xl font-bold text-center text-white lg:mb-4">Our Locations</h2>
        {/* <div className="h-2 rounded-lg w-64 bg-red-600 mx-auto"></div>  */}
        <div className="flex flex-col items-center justify-center p-4 lg:ml-32 lg:mr-32 lg:mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  md:items-center md:justify-center lg:grid-cols-3">
                <LocationCard name="Location 1" address="123 Main St" image={bg_3} phone="+39 39 444423" email="fc@help.info" />
                <LocationCard name="Location 2" address="456 Elm St" image={bg_2} phone="+39 39 444423" email="fc@help.info" />
                <LocationCard name="Location 3" address="789 Oak St" image={bg_3} phone="+39 39 444423" email="fc@help.info" />
            </div>
        </div>
    </div>

    {/* footer */}
    <Footer/>
</div>

    );
};

export default Academy;
