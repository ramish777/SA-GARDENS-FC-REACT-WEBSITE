import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import sa from "../images/sa.jpg";



const AboutUs = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
    
                <div className="flex flex-col mt-20 lg:flex-row items-center justify-center lg:mt-40 lg:mb-40 p-4">
                    <div className="w-full lg:w-2/3 justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">About Us</h1>
                        <p className="text-sm lg:text-lg text-gray-300 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                        </p>
                        <p className="text-sm lg:text-lg text-gray-300 mt-4">
                            Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
        {/* History */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">History & Origin</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <img src={sa} alt="Achievement" className="w-full rounded-lg" />
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                    </p>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                    </p>
                </div>
            </div>
        </div>
    
        {/* About SA Gardens and SA Group */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">About SA Gardens and SA Group</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <img src={sa} alt="Achievement" className="w-full rounded-lg" />
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                    </p>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                    </p>
                </div>
            </div>
        </div>
    
        {/* Location of main office */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">Location</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <iframe
                        title="uniqueTitle"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.4522613754784!2d74.26358017512803!3d31.730854136713624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191f320e5f28b1%3A0x93ad1e608ed90b5c!2sS%20A%20Gardens%20Main%20Enterance%20Gate!5e0!3m2!1sen!2s!4v1719577411477!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                    </p>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
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

export default AboutUs;
