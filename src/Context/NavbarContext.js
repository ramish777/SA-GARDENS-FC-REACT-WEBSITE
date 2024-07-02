import React, { createContext, useState } from 'react';

// Create the context
export const NavbarContext = createContext();

// Create the provider component
export const NavbarProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    // Function to toggle the dropdown state
    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to handle link click
    const handleLinkClick = (page, section) => {
        if (section) {
          // Handle section navigation with hash
          window.location.hash = section;
        }
        setActiveLink(page); // Set the active page link
    };

    return (
    <NavbarContext.Provider value={{ isDropdownOpen, toggleDropdown, activeLink, handleLinkClick, setActiveLink }}>
        {children}
    </NavbarContext.Provider>
    );
};
