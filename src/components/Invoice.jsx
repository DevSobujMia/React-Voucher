import moment from 'moment';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav aria-label="Main navigation" role="navigation" className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-xl">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left side: Logo */}
                <div className="flex items-center">
                    <img className="max-w-32" src={logo} alt="Logo" width="100" height="32" />
                </div>

                {/* Center: Date */}
                <div className="hidden lg:block text-white text-2xl font-semibold">
                    {moment().format("dddd, MMMM D, YYYY")}
                </div>

                {/* Right side: Menu toggle and Menu items */}
                <div className="flex items-center">
                    {/* Menu toggle for mobile */}
                    <button 
                        className="lg:hidden text-white text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        ☰
                    </button>
                    
                    {/* Menu items */}
                    <ul className={`lg:flex lg:space-x-8 space-y-4 lg:space-y-0 px-4 py-2 lg:px-0 lg:py-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                        {['home', 'projects', 'tractor', 'contact', 'about'].map((item) => (
                            <li key={item} className="relative group px-4 py-2 text-center rounded-md font-bold text-lg text-white transition-all duration-300 ease-in-out">
                                <NavLink 
                                    to={`/${item}`} 
                                    aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                                    className="hover:antialiased"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </NavLink>
                                <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-20"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
