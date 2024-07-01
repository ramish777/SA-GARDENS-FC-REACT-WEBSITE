import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import isl from "../images/isl.JPG";
import bc from "../images/bc.JPG";
import volka from "../images/volka.JPG";
import gymARM from "../images/gram.JPG";
import maidan from "../images/maidan.JPG";

const Partners = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />

                    <div className="flex flex-col mt-20 md:flex-row items-center justify-center md:mt-40 md:mb-40 p-4">
                        <div className="w-full md:w-2/3 justify-center items-center">
                            <h1 className="text-2xl md:text-4xl sm:text-4xl font-bold text-white text-center">Our Partners</h1>
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

            {/* Achievements */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-center md:ml-32 md:mr-32 md:mt-8 p-4">
                    <div className="flex items-center text-4xl md:mr-8 sm:mr-8">
                        <h2 className="text-white text-4xl font-bold ml-4">Our Partners</h2>
                    </div>
                    <div className="flex flex-col md:mt-8 bg-gray-700">
                        <div className="flex flex-wrap">

                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <img src={volka} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                                <h1 className="text-center text-white mt-5 font-bold">Volka Foods</h1>
                                <h1 className="text-center text-white text-it mt-2 font-bold">Academy Partner</h1>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <img src={gymARM} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                                <h1 className="text-center text-white mt-5 font-bold">Gym Armour</h1>
                                <h1 className="text-center text-white text-it mt-2 font-bold">Apparel Partner</h1>
                            </div>

                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <img src={maidan} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                                <h1 className="text-center text-white mt-5 font-bold">Maidan</h1>
                                <h1 className="text-center text-white text-it mt-2 font-bold">Equipment Partner</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

            {/* ISL */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-start md:ml-32 md:mt-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">SA Gardens FC X ISL</h2>
                    </div>
                    <div className="relative flex flex-col md:flex-col mt-8 md:mt-8 md:mr-32">
                        <img
                        src={isl}
                        alt="Achievement"
                        className="w-full rounded-lg"
                        />
                        <p className="text-sm md:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                        </p>
                        <p className="text-sm md:text-lg text-gray-300 mt-4">
                        Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                        </p>
                    </div>
                </div>
            </div>

            {/* SA Gardens FC X Beaconhouse */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-start md:ml-32 md:mt-8 p-4">
                    <div className="flex items-center md:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 md:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">SA Gardens FC X Beaconhouse</h2>
                    </div>
                    <div className="relative flex flex-col md:flex-col mt-8 md:mt-8 md:mr-32">
                        <img
                        src={bc}
                        alt="Achievement"
                        className="w-full rounded-lg"
                        />
                        <p className="text-sm md:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                        </p>
                        <p className="text-sm md:text-lg text-gray-300 mt-4">
                        Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                        </p>
                    </div>
                </div>
            </div>             

            {/* footer */}
            <Footer/>

            
        </div>
    );
};

export default Partners;
