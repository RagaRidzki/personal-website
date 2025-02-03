import React from 'react'

// Icons
import 'remixicon/fonts/remixicon.css';

// Components
import Navbar from '../assets/components/Navbar';
import Sidebar from '../assets/components/Sidebar';
import Footer from '../assets/components/Footer';

// Images
import Ecommerce from '../assets/images/projects/ecommerce.png';
import Inventaris from '../assets/images/projects/inventaris.png';
import Rekapitulasi from '../assets/images/projects/rekapitulasi.png';
import Webstudio from '../assets/images/projects/webstudio.png';
import Apotek from '../assets/images/projects/apotek.png';
import Masjid from '../assets/images/projects/masjid.png';

const Project = () => {
    return (
        <div>
            <Navbar />

            <Sidebar />

            <main class="w-full md:w-[calc(100%-320px)] ml-auto md:py-10 px-4 sm:px-8 pt-20">
                <div class="flex flex-col mb-4">
                    <span class="text-2xl font-semibold">Showcase Projects</span>
                    <span class="text-sm font-tight text-gray-400">Some of my best works</span>
                </div>

                <div class="mt-10">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project Card 1 */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Ecommerce} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Ecommerce Dapoer Azka</h3>
                                    <p class="text-sm text-gray-600 mt-2">The ecommerce project I created with my team, as a frontend developer</p>
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Tailwind</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">React</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Exspress</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>

                        {/* <!-- Project Card 2 --> */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Rekapitulasi} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Rekapitulasi Keterlambatan</h3>
                                    <p class="text-sm text-gray-600 mt-2">Student tardiness recapitulation project, as a fullstack developer</p>

                                    {/* <!-- Tech Stack --> */}
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Tailwind</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Laravel</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <!-- Links --> */}
                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                        {/* <!-- Project Card --> */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Inventaris} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Inventaris Barang</h3>
                                    <p class="text-sm text-gray-600 mt-2">project to manage items in stores, as a fullstack developer</p>

                                    {/* <!-- Tech Stack --> */}
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Bootsrap</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Laravel</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <!-- Links --> */}
                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                        {/* <!-- Project Card --> */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Apotek} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Apotek App</h3>
                                    <p class="text-sm text-gray-600 mt-2">Projects to manage pharmacies, such as medicine management and others. as a fullstack developer</p>

                                    {/* <!-- Tech Stack --> */}
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Bootsrap</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Laravel</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <!-- Links --> */}
                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                        {/* <!-- Project Card --> */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Masjid} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Masjid Al-Ikram</h3>
                                    <p class="text-sm text-gray-600 mt-2">Project website landing page for al ikram mosque, where you can give alms.</p>

                                    {/* <!-- Tech Stack --> */}
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Tailwind</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Laravel</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <!-- Links --> */}
                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                        {/* <!-- Project Card --> */}
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg">
                            <img src={Webstudio} alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Webstudio</h3>
                                    <p class="text-sm text-gray-600 mt-2">Project in collaboration with the team, which is a website that provides website creation</p>

                                    {/* <!-- Tech Stack --> */}
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Bootsrap</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Laravel</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">JS</span>
                                        <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">MySQL</span>
                                    </div>

                                    {/* <!-- Links --> */}
                                    {/* <div class="mt-4 flex space-x-4">
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-github-fill"></i> <span>GitHub</span>
                                        </a>
                                        <a href="#" class="text-sm font-medium hover:underline flex items-center space-x-1">
                                            <i class="ri-external-link-line"></i> <span>Live Demo</span>
                                        </a>
                                    </div> */}
                                </div>
                        </div>
                    </div>
                </div>


            </main>

            <Footer />
        </div>
    )
}

export default Project