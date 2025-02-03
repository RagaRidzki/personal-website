import React, { useState, useRef } from 'react';

// EmailJs
import emailjs from '@emailjs/browser';

// Icons
import 'remixicon/fonts/remixicon.css';

// Components
import Navbar from '../assets/components/Navbar';
import Sidebar from '../assets/components/Sidebar';
import Footer from '../assets/components/Footer';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_ynzy032', 
            'template_5m4kv0w', 
            form.current, 
            'o_B7NehgZLyVH0sIk'
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS error:", error);
            }
        ).finally(() => {
            setIsSending(false);
        });
    };
    return (
        <div>
            <Navbar />

            <Sidebar />

            <main className="w-full md:w-[calc(100%-320px)] md:ml-[320px] md:py-10 px-4 sm:px-8 pt-20">
                {/* Header */}
                <div className="flex flex-col mb-4">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <p className="text-sm text-gray-400">Let's get in touch.</p>
                    <hr className="border-t border-gray-300 mt-2" />
                </div>

                {/* Find Me Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Find Me</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <a href="https://www.linkedin.com/in/ragaridzkipanuntun" target="_blank" rel="noopener noreferrer"
                            className="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg transform transition duration-300 hover:shadow-md">
                            <i className="ri-linkedin-box-fill text-blue-600 text-3xl mr-3"></i>
                            <div>
                                <p className="font-medium">Connect with me</p>
                                <p className="text-gray-500 text-xs">Raga Ridzki Panuntun</p>
                            </div>
                        </a>
                        <a href="https://github.com/RagaRidzki" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg transform transition duration-300 hover:shadow-md">
                            <i className="ri-github-fill text-gray-900 text-3xl mr-3"></i>
                            <div>
                                <p className="font-medium">Explore my code</p>
                                <p className="text-gray-500 text-sm">RagaRidzki</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/ragajiww/" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg transform transition duration-300 hover:shadow-md">
                            <i className="ri-instagram-line text-red-500 text-3xl mr-3"></i>
                            <div>
                                <p className="cursor-pointer font-medium">Follow Me</p>
                                <p className="text-gray-500 text-sm">@ragajiww</p>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@araijitech" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg transform transition duration-300 hover:shadow-md">
                            <i className="ri-tiktok-fill text-gray-900 text-3xl mr-3"></i>
                            <div>
                                <p className="font-medium">Follow Me</p>
                                <p className="text-gray-500 text-sm">@araijitech</p>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@Araijitech" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg transform transition duration-300 hover:shadow-md">
                            <i className="ri-youtube-line text-red-600 text-3xl mr-3"></i>
                            <div>
                                <p className="font-medium">Subscribe</p>
                                <p className="text-gray-500 text-sm">Araiji</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mt-8">
                    <span class="text-xl font-medium tracking-wide text-gray-800">Or Send Me an Email</span>
                    <form ref={form} onSubmit={handleSubmit} class="mt-4 space-y-6">
                        <div class="flex gap-x-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="user_name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="user_email"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your subject"
                            name="subject"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                        <textarea
                            placeholder="Enter your message"
                            name="message"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg h-40"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            class="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>

    )
}

export default Contact