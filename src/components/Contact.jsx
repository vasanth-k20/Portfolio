import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ypp4ovm', 'template_jm9pg8a', form.current, 'RsohPdi49xFBNJZF9')
            .then((result) => {
                console.log(result.text);
                setStatus('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" className="min-h-[50vh] flex items-center justify-center py-16 bg-neutral-100 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 w-[60%]">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Contact Me
                </motion.h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="name" className="block text-gray-600 mb-2">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label htmlFor="email" className="block text-gray-600 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-600 mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            required
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>
                {status && (
                    <p className="text-center mt-4 text-green-500">{status}</p>
                )}
            </div>
        </section>
    );
};

export default Contact;
