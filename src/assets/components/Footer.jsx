import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer
                class="w-full md:w-[calc(100%-450px)] md:ml-86 py-10 transition-all main flex flex-col items-center justify-center text-center">
                <ul class="flex space-x-4">
                    <li><a href="/about" class="hover:text-primary ">About</a></li>
                    <li><a href="/project" class="hover:text-primary">Project</a></li>
                    <li><a href="/certificate" class="hover:text-primary">Certificate</a></li>
                </ul>
                <span class="mt-6 text-base font-bold">Get in Touch</span>
                <div class="mt-8 space-x-4 text-lg">
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
                <span class="mt-4">&copy; 2025 Raga Ridzki Panuntun. All Rights Reserved. </span>
            </footer>
        </div>
    )
}

export default Footer