import React, { useContext, useEffect, useState } from 'react';
import logo_1 from "../images/logo_1.png";
import { Link } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';

const Navbar = () => {
  const { isDropdownOpen, toggleDropdown, activeLink, setActiveLink } = useContext(NavbarContext);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navbarRef = React.useRef(null);

  // Function to update the navbar height
  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  };
  
  // Effect to update navbar height when dropdown state changes
  useEffect(() => {
    updateNavbarHeight();
  }, [isDropdownOpen]);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Handle link click
  const handleLinkClick = (page, section) => {
    setActiveLink(page);
    // Removed the toggleDropdown call to prevent closing the dropdown
  };

  // Determine the active link and hash
  const getActiveLinkClass = (page, section) => {
    if (window.innerWidth < 1024) {
      if (activeLink === page) {
        if (section && window.location.hash === `#${section}`) {
          return 'bg-gray-700 text-white'; // Active page with specific section
        }
        if (!section && !window.location.hash) {
          return 'bg-gray-700 text-white'; // Active page without specific section
        }
      }
    } else {
      if (activeLink === page) {
        if (section && window.location.hash === `#${section}`) {
          return 'underline'; // Active page with specific section
        }
        if (!section && !window.location.hash) {
          return 'underline'; // Active page without specific section
        }
      }
    }
    return '';
  };

  return (
    <>
      <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 border-gray-200 dark:border-gray-700 z-50 ${scrolled ? 'bg-gray-900' : 'bg-transparent'} transition-colors duration-300`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo_1} className="h-14" alt="Logo" />
            <span className="self-center md:text-2xl sm:text-xl font-semibold whitespace-nowrap dark:text-white">
              SA Gardens Football Club
            </span>
          </Link>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isDropdownOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('Home')}`}
                  onClick={() => handleLinkClick('Home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('About Us')}`}
                  onClick={() => handleLinkClick('About Us')}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('Academy')}`}
                  onClick={() => handleLinkClick('Academy')}
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/academy#price"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('Academy', 'price')}`}
                  onClick={() => handleLinkClick('Academy', 'price')}
                >
                  Price
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('Join Us')}`}
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfCOYbkn_ZBPItidbVny18AZM2-6UfXStsCB7_wCNJoO-xD9w/viewform?usp=sf_link", "_blank")}
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-partners"
                  className={`block py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${getActiveLinkClass('Our Partners')}`}
                  onClick={() => handleLinkClick('Our Partners')}
                >
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: navbarHeight }}>
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Navbar;
