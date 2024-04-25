import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.svg'; 

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="lg:flex lg:justify-between">
            <img src={logo} alt="Logo" className="h-8" />

            <button onClick={toggleMenu} className="lg:hidden absolute right-8">
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
            <div className={`lg:flex lg:gap-5 lg:font-inter lg:text-sm lg:items-center flex flex-col  lg:flex-row ${isMenuOpen ? 'block ' : 'hidden'}`}>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/flashcard/mathematices" className="nav-link">FlashCard</NavLink>
                <NavLink to="/" className="nav-link">Contact</NavLink>
                <NavLink to="/" className="nav-link">Faq</NavLink>
                <NavLink to="/" className="nav-link bg-gradient-to-b from-primary to-blue-500 py-2 px-6 rounded-2xl text-white">Login</NavLink>
            </div>

            
            
        </div>
    );
}

export default Navigation;
