import React from 'react';

// Icons
import 'remixicon/fonts/remixicon.css';

// Components
import Navbar from '../assets/components/Navbar';
import Sidebar from '../assets/components/Sidebar';
import Footer from '../assets/components/Footer';

// Images
import Cyberlabs from '../assets/images/certificates/cyberlabs.png';
import DicodingJs from '../assets/images/certificates/dicoding-js.png';
import DicodingSoftware from '../assets/images/certificates/dicoding-software.jpg';
import K3LH from '../assets/images/certificates/k3lh.jpg';
import PKL from '../assets/images/certificates/pkl.png';
import ProgateCmd from '../assets/images/certificates/progate-cmd.png';
import ProgateGit from '../assets/images/certificates/progate-git.png';
import Unity from '../assets/images/certificates/unity.png';
import Wantech from '../assets/images/certificates/wantech.jpg';

const Certificate = () => {
    return (
        <div>
            <Navbar />

            <Sidebar />

            <main class="w-full md:w-[calc(100%-320px)] ml-auto md:py-10 px-4 sm:px-8 pt-20">
                <div class="flex flex-col mb-4">
                    <span class="text-2xl font-semibold">Certificates</span>
                    <span class="text-sm font-tight text-gray-400">Showcase all of my certificates.</span>
                </div>

                <div class="mt-10">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Certificate Item 1 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={PKL} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Winnership</h3>
                                    <p class="text-sm text-center mt-2">Certificate of 6 months internship at PT Wesclic Indonesia Neotech.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 2 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={DicodingJs} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Dicoding</h3>
                                    <p class="text-sm text-center mt-2">Dicoding bootcamp certificate on learning basic javascript programming.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 3 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={DicodingSoftware} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Dicoding</h3>
                                    <p class="text-sm text-center mt-2">Dicoding bootcamp certificate on researching a career as a software developer.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 4 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={Unity} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Unity Essentials Pathway</h3>
                                    <p class="text-sm text-center mt-2">Unity bootcamp certificate on the basics of using unity, and working on mini game projects.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 5 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={ProgateGit} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Progate</h3>
                                    <p class="text-sm text-center mt-2">Progate bootcamp certificate on git fundamentals.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 6 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={ProgateCmd} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Progate</h3>
                                    <p class="text-sm text-center mt-2">Progate bootcamp certificate on UNIX fundamentals. Command Line.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 7 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={K3LH} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">International Labour Organization</h3>
                                    <p class="text-sm text-center mt-2">Occupational health and safety e-learning certificate</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 8 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={Wantech} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Wantech Indonesia</h3>
                                    <p class="text-sm text-center mt-2">Certificate of participation in frontend developer bootcamp using Vue.js framework.</p>
                                </div>
                        </div>

                        {/* <!-- Certificate Item 9 --> */}
                        <div class="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={Cyberlabs} alt="Certificate Image" class="w-full h-auto" />
                                <div class="absolute inset-0 bg-primary bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <h3 class="text-lg font-semibold">Cyberlabs</h3>
                                    <p class="text-sm text-center mt-2">Certificate of participation in backend developer bootcamp activities using the Express.js framework</p>
                                </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Certificate