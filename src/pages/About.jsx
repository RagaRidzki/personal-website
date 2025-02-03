import React from 'react';

// Framer Motion
import { motion } from "framer-motion";

// Icons
import 'remixicon/fonts/remixicon.css';

// Components
import Navbar from '../assets/components/Navbar';
import Sidebar from '../assets/components/Sidebar';
import Footer from '../assets/components/Footer';

// Images
import Wesclic from '../assets/images/abouts/wesclic.svg'
import Wikrama from '../assets/images/abouts/wikrama-logo.png'
import Bootsrap from '../assets/images/techstacks/bootsrap.svg'
import CSS from '../assets/images/techstacks/css.svg'
import Github from '../assets/images/techstacks/github.svg'
import HTML from '../assets/images/techstacks/html.svg'
import Javascript from '../assets/images/techstacks/js.svg'
import Laravel from '../assets/images/techstacks/laravel.svg'
import MySql from '../assets/images/techstacks/mysql.svg'
import PHP from '../assets/images/techstacks/php.svg'
import Tailwind from '../assets/images/techstacks/tailwind.svg'

// Cv
import CV from "../assets/cv/Raga Ridzki Panuntun.pdf"

const About = () => {
    const techStacks = [
        { img: HTML, name: "HTML" },
        { img: CSS, name: "CSS" },
        { img: Bootsrap, name: "Bootstrap" },
        { img: Tailwind, name: "Tailwind" },
        { img: Javascript, name: "JavaScript" },
        { img: PHP, name: "PHP" },
        { img: Laravel, name: "Laravel" },
        { img: MySql, name: "MySQL" },
        { img: Github, name: "Github" },
    ];
    return (
        <div>
            <Navbar />

            <Sidebar />

            <main class="w-full md:w-[calc(100%-320px)] ml-auto md:py-10 px-4 sm:px-8 pt-20">
                <div class="flex flex-col mb-4">
                    <span class="text-2xl font-semibold">About Me</span>
                    <span class="text-sm font-tight text-gray-400">Short story about me.</span>
                    <article class="mt-4">
                        I'm Raga Ridzki Panuntun, a web developer with a main focus on frontend development. My journey in the world of web development began in early high school, when I started learning through developer forums and various tutorials on YouTube. Since then, I've been interested in exploring the frontend world and continuing to develop my skills.
                        I have a deep interest in JavaScript and frontend frameworks like React and Vue. I believe that technology is constantly evolving, and I always try to keep learning and exploring new concepts that can improve the user experience on a website.
                        <br /><br />
                        For me, good communication and collaboration are key in every project. I enjoy the process of solving problems, working efficiently, and learning from others. Through this site, I want to share my insights, document my journey, and showcase the projects I have worked on.
                        I am very open to discussion and collaboration, so please feel free to contact me. I will be happy to help and discuss further!
                    </article>
                </div>

                <div class="mt-12">
                    <div class="flex items-center space-x-2">
                        <i class="ri-briefcase-3-line text-2xl"></i>
                        <span class="text-2xl font-semibold tracking-wide text-gray-800">Career</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-sm font-tight text-gray-400">My Professional Career Journey</span>
                        <a href={CV} target='_blank' type="submit" class="flex text-sm cursor-pointer">
                            <span><i class="ri-download-line animate-bounce"></i> Download CV</span>
                        </a>
                    </div>
                    <div class="mt-6  flex space-x-4 items-start">
                        <img src={Wesclic} alt="Company Logo" class="w-12 h-12 rounded-full" />
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800">Full-Stack Developer Intern</h3>
                            <p class="text-gray-600">PT Wesclic Indonesia Neotech | 6 Months</p>
                            <ul class="mt-2 text-gray-500 list-disc pl-5">
                                <li>Developed and maintained web applications using HTML, CSS, Bootsrap, Laravel, MySql</li>
                                <li>Collaborated with teams to implement front-end and back-end solutions.</li>
                                <li>Optimized database queries and improved system performance.</li>
                                <li>Testing, Debugging & Deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <div class="flex items-center space-x-2">
                        <i class="ri-graduation-cap-line text-2xl"></i>
                        <span class="text-2xl font-semibold tracking-wide text-gray-800">Education</span>
                    </div>
                    <span class="text-sm font-tight text-gray-400">My Educational Journey</span>
                    <div class="mt-6 flex space-x-4 items-start">
                        <img src={Wikrama} alt="School Logo" class="w-12 h-12 rounded-full" />
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800">Wikrama Vocational Highschool</h3>
                            <p class="text-gray-600">Software and Game Development | 2022 - 2025</p>
                            <ul class="mt-2 text-gray-500 list-disc pl-5">
                                <li>Studied programming fundamentals, web development, and software engineering.</li>
                                <li>Worked on various projects using front-end and back-end technologies.</li>
                                <li>Gained hands-on experience in building interactive applications.</li>
                                <li>Explored Game Development & UI/UX Design</li>
                                <li>Worked on Real-World Projects & Team Collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <div class="flex items-center space-x-2">
                        <i class="ri-settings-2-line text-2xl"></i>
                        <span class="text-2xl font-semibold tracking-wide text-gray-800">Tech Stack</span>
                    </div>
                    <span class="text-sm font-tight text-gray-400">My Coding Skills</span>
                    <div class="mt-6 flex flex-wrap items-center gap-4">
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={HTML} alt="" />
                                <span class="font-tight">HTML</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={CSS} alt="" />
                                <span class="font-tight">CSS</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={Bootsrap} alt="" />
                                <span class="font-tight">Bootsrap</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={Tailwind} alt="" />
                                <span class="font-tight">Tailwind</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={Javascript} alt="" />
                                <span class="font-tight">JavaScript</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={PHP} alt="" />
                                <span class="font-tight">PHP</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={Laravel} alt="" />
                                <span class="font-tight">Laravel</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={MySql} alt="" />
                                <span class="font-tight">MySQL</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 py-3 px-8 rounded-full">
                            <div class="flex items-center space-x-2">
                                <img src={Github} alt="" />
                                <span class="font-tight">Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About