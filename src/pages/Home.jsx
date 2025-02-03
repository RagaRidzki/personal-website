import React, { useEffect } from 'react';

// Icons
import 'remixicon/fonts/remixicon.css';

// Typed Js
import Typed from "typed.js";

// Components
import Navbar from '../assets/components/Navbar';
import Sidebar from '../assets/components/Sidebar';
import Footer from '../assets/components/Footer';

// Cv
import CV from "../assets/cv/Raga Ridzki Panuntun.pdf"

const App = () => {
    useEffect(() => {
        const options = {
            strings: [
                "Fullstack Developer",
                "Specialist Frontend Developer",
                "Content Creator",
            ],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed("#animated-text", options);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <Navbar />

            <Sidebar />

            <main class="w-full md:w-[calc(100%-320px)] ml-auto md:py-10 px-4 sm:px-8 pt-20">
                <div class="mb-4">
                    <span class="text-2xl font-semibold">Hi, I'm Raga <span className='text-3xl'>👨🏻‍💻</span></span>
                    <ul class="mt-4 space-y-2 list-disc list-inside">
                        <li class="text-sm">Based in Bogor, Indonesia</li>
                        <li className="text-sm">
                            <span id="animated-text"></span>
                        </li>
                    </ul>
                    <article class="mt-4 leading-7 text-md">
                        A passionate Frontend Developer with a strong commitment to crafting visually appealing and highly
                        functional web interfaces. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I
                        merge creativity and technical proficiency to deliver exceptional user experiences. By focusing on
                        responsive design and performance optimization.
                    </article>
                    <div class="mt-4 space-x-2">
                        <a href={CV} target="_blank" class=" text-sm cursor-pointer space-x-1">
                            <i class="ri-download-line animate-bounce"></i>
                            <span>Download CV</span>
                        </a>
                        <a href="/contact" class="text-sm border border-gray-300 py-1 px-4 rounded-full">
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>
                <div class="mt-12">
                    <div class="flex items-center space-x-2">
                        <i class="ri-settings-line text-2xl animate-spin"></i>
                        <span class="text-2xl font-semibold tracking-wide text-gray-800">Services</span>
                    </div>

                    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service Card 1 */}
                        <div class="bg-white border border-gray-200 rounded-xl p-6  hover:shadow-lg transition duration-300">
                            <div class="flex items-center space-x-2">
                                <i class="ri-code-s-slash-line text-xl text-blue-500"></i>
                                <span class="text-lg font-semibold text-gray-800">Web Development</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">We offer Professional, responsive, and user-friendly websites
                                for all your needs.</p>
                        </div>
                        {/* Service Card 2 */}
                        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300">
                            <div class="flex items-center space-x-2">
                                <i class="ri-code-s-slash-line text-xl text-blue-500"></i>
                                <span class="text-lg font-semibold text-gray-800">Web Development</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">We offer Professional, responsive, and user-friendly websites
                                for all your needs.</p>
                        </div>
                        {/* Service Card 3 */}
                        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300">
                            <div class="flex items-center space-x-2">
                                <i class="ri-code-s-slash-line text-xl text-blue-500"></i>
                                <span class="text-lg font-semibold text-gray-800">Web Development</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">We offer Professional, responsive, and user-friendly websites
                                for all your needs.</p>
                        </div>
                    </div>
                </div>
                <div class="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white  py-12 px-6 rounded-2xl shadow-lg">
                    <div class="px-6">
                        <h2 class="text-4xl font-medium mb-2">Contact Me for Working Together.</h2>
                        <p class="text-md font-light mb-6">
                            I'm open for freelance projects, feel free to email me to see how we can collaborate.
                        </p>
                        <a href="/contact"
                            class="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Contact Me
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div >
    );
};

export default App;