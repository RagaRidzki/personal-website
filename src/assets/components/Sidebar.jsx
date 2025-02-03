import React from 'react';
import { Link, useLocation } from 'react-router-dom'

// Icons
import 'remixicon/fonts/remixicon.css';

// Images
import ProfileImg from "../images/menu/profile.jpg";
import BackgroundImg from "../images/menu/background.jpg";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div>
            <aside className="fixed left-0 top-0 w-64 ml-4 md:w-80 h-full py-6 px-6 transform -translate-x-full md:translate-x-0 transition-transform duration-300 sidebar-menu">
                <div className="flex flex-col items-center justify-center">
                    <img src={BackgroundImg} alt="" className="w-[250px] h-[100px] rounded-xl z-0 " />
                    <img src={ProfileImg} alt="" className="w-[90px] h-[90px] rounded-full -mt-15 z-10 mb-2 transition-opacity duration-300" />
                    <span className="text-xl font-semibold">Raga Ridzki Panuntun</span>
                    <span className="text-md text-gray-500 mb-4">@araijitech</span>
                    <div class="mb-2 space-x-4 text-lg">
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
                </div>
                <ul className="mt-4">
                    <li className="mb-3 group active">
                        <a href="/"
                            className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ${location.pathname === "/" ? "bg-gray-100" : ""}`}>
                            <i className="ri-home-4-line mr-3 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
                        </a>
                    </li>
                    <li className="mb-3 group">
                        <a href="/about"
                            className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ${location.pathname === "/about" ? "bg-gray-100" : ""}`}>
                            <i
                                className="ri-chat-smile-line mr-3 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">About</span>
                        </a>
                    </li>
                    <li className="mb-3 group">
                        <a href="/project"
                            className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ${location.pathname === "/project" ? "bg-gray-100" : ""}`}>
                            <i
                                className="ri-briefcase-line mr-3 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">Project</span>
                        </a>
                    </li>
                    <li className="mb-3 group">
                        <a href="/certificate"
                            className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ${location.pathname === "/certificate" ? "bg-gray-100" : ""}`}>
                            <i className="ri-award-line mr-3 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">Certificate</span>
                        </a>
                    </li>
                    <li className="mb-3 group">
                        <a href="/contact"
                            className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ${location.pathname === "/contact" ? "bg-gray-100" : ""}`}>
                            <i
                                className="ri-send-plane-line mr-3 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">Contact</span>
                        </a>
                    </li>
                </ul>
            </aside >
        </div>
    )
}

export default Sidebar