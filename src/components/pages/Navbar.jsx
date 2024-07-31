import moment from 'moment';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav aria-label="Main navigation" role="navigation" className="bg-[#05e2bd]">
            <div className="flex items-center justify-between px-4 py-2">
                {/* Left side: Logo */}
                <div className="flex items-center">
                    <img className="max-w-32" src={logo} alt="Logo" width="100" height="32" />
                </div>
                
                {/* Center: Date */}
                <div className="hidden lg:block text-white text-2xl">{moment().format("dddd, MMMM D, YYYY")}</div>

                {/* Right side: Menu toggle and Menu items */}
                <div className="flex items-center">
                    {/* Menu toggle for mobile */}
                    <button 
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        ☰
                    </button>
                    
                    {/* Menu items */}
                    <ul className={`lg:flex lg:space-x-12 space-y-4 lg:space-y-0 px-4 py-2 lg:px-0 lg:py-0 ${isOpen ? 'block' : 'hidden'}`}>
                        {['home', 'projects', 'tractor', 'contact', 'about'].map((item) => (
                            <li key={item} className="relative px-4 py-2 text-center rounded-md font-bold text-lg text-white hover:text-black cursor-pointer hover:shadow-xl hover:bg-white hover:outline-2 outline-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black border hover:border hover:border-black">
                                <NavLink to={`/${item}`} aria-label={item.charAt(0).toUpperCase() + item.slice(1)}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
