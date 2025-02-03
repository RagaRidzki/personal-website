import React, { useState } from 'react';

// Icons
import 'remixicon/fonts/remixicon.css';

// Images
import ProfileImg from "../images/menu/profile.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shadow, setShadow] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setShadow(!isMenuOpen); // Menambahkan/menghapus shadow pada navbar
    };
    return (
        <div>{/* Navbar Mobile */}
            <nav className={`fixed top-0 left-0 w-full bg-white py-4 px-6 md:hidden z-50 ${shadow ? 'shadow-md' : 'shadow-md'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center space-x-2">
                        <img
                            src={ProfileImg}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-4 border-white"
                        />
                        <span className="text-lg font-semibold">
                            Raga Ridzki Panuntun
                        </span>
                    </div>
                    <button id="menu-btn" className="text-2xl focus:outline-none" onClick={toggleMenu}>
                        <i id="menu-icon" className={`ri-menu-line ${isMenuOpen ? 'ri-close-line' : ''}`}></i>
                    </button>
                </div>
            </nav>

            {/* Dropdown Mobile */}
            <div id="mobile-menu" className={`md:hidden z-50 ${isMenuOpen ? '' : 'hidden'} fixed bg-white shadow-md md:hidden z-50 top-18 left-0 w-full `}>
                <div className="flex justify-between mb-2 py-2 px-8 space-x-4 text-lg">
                    <a href="https://www.linkedin.com/in/ragaridzkipanuntun/" target="_blank"><i
                        class="ri-linkedin-fill hover:text-primary duration-300"></i></a>
                    <a href="https://www.instagram.com/ragajiww/" target="_blank"><i
                        class="ri-instagram-line hover:text-primary duration-300"></i></a>
                    <a href="https://github.com/RagaRidzki" target="_blank"><i
                        class="ri-github-line hover:text-primary duration-300"></i></a>
                    <a href="https://www.tiktok.com/@araijitech" target="_blank"><i
                        class="ri-tiktok-fill hover:text-primary duration-300"></i></a>
                    <a href="https://saweria.co/Araiji" target="_blank"><i
                        class="ri-cup-line hover:text-primary duration-300"></i></a>
                </div>
                <ul className="px-6 space-y-2 pb-6">
                    <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
                        <i className="ri-home-4-line mr-4 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                        <a href="/" className="block text-sm">Home</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
                        <i className="ri-chat-smile-line mr-4 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                        <a href="/about" className="block text-sm">About</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
                        <i className="ri-briefcase-line mr-4 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                        <a href="/project" className="block text-sm">Project</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
                        <i className="ri-award-line mr-4 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                        <a href="/certificate" className="block text-sm">Certificate</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
                        <i className="ri-send-plane-line mr-4 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                        <a href="/contact" className="block text-sm">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar