import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import p1 from "../images/person_1.jpg";
import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';


const players = [
    {
      name: "Lionel Messi",
      position: "Forward",
      number: 10,
      nationality: "Argentinian",
      club: "Paris Saint-Germain"
    },
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      number: 7,
      nationality: "Portuguese",
      club: "Al-Nassr"
    },
    {
      name: "Neymar Jr",
      position: "Forward",
      number: 10,
      nationality: "Brazilian",
      club: "Paris Saint-Germain"
    },
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      number: 17,
      nationality: "Belgian",
      club: "Manchester City"
    },
    {
      name: "Kylian Mbappé",
      position: "Forward",
      number: 7,
      nationality: "French",
      club: "Paris Saint-Germain"
    },
    {
      name: "Sergio Ramos",
      position: "Defender",
      number: 4,
      nationality: "Spanish",
      club: "Paris Saint-Germain"
    },
    {
      name: "Virgil van Dijk",
      position: "Defender",
      number: 4,
      nationality: "Dutch",
      club: "Liverpool"
    },
    {
      name: "Luka Modrić",
      position: "Midfielder",
      number: 10,
      nationality: "Croatian",
      club: "Real Madrid"
    },
    {
      name: "Manuel Neuer",
      position: "Goalkeeper",
      number: 1,
      nationality: "German",
      club: "Bayern Munich"
    },
    {
      name: "Robert Lewandowski",
      position: "Forward",
      number: 9,
      nationality: "Polish",
      club: "Barcelona"
    },
    {
      name: "Joshua Kimmich",
      position: "Midfielder",
      number: 6,
      nationality: "German",
      club: "Bayern Munich"
    }];

const HeadCoach=[
    {
        name: "Lionel Messi",
        position: "Forward",
        number: 10,
        nationality: "Argentinian",
        club: "Paris Saint-Germain"
      }  
];    

const PlayerCard = ({ player }) => {
    const {setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
      });

    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center p-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={p1} alt="description"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{player.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400"><strong>Position:</strong> {player.position}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400"><strong>Number:</strong> {player.number}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400"><strong>Nationality:</strong> {player.nationality}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400"><strong>Club:</strong> {player.club}</span>
            </div>
        </div>
    );
};

const FutsalPlayer = () => {
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
                            <h1 className="text-2xl md:text-4xl sm:text-4xl font-bold text-white text-center">Our Futsal Players</h1>
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

            {/* Players */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-center md:ml-32 md:mr-32 md:mt-8 p-4">
                    <div className="flex items-center text-4xl md:mr-8 sm:mr-8">
                        <h2 className="text-white text-4xl font-bold ml-4">Head Coach</h2>
                    </div>
                    <div className="flex flex-col md:mt-8 bg-gray-700">
                        <div className="flex flex-wrap">
                            {HeadCoach.map((player, index) => (
                                <div key={index} className="w-full p-4">
                                    <PlayerCard player={player} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Players */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-center md:ml-32 md:mr-32 md:mt-8 p-4">
                    <div className="flex items-center text-4xl md:mr-8 sm:mr-8">
                        <h2 className="text-white text-4xl font-bold ml-4">Our Players</h2>
                    </div>
                    <div className="flex flex-col md:mt-8 bg-gray-700">
                        <div className="flex flex-wrap">
                            {players.map((player, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <PlayerCard player={player} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            

            {/* footer */}
            <Footer/>

            
        </div>
    );
};

export default FutsalPlayer;
