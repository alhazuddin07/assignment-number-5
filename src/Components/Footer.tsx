import React from 'react';
import FLogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="mt-9">

            <div className='divider'></div>

            <div className="container mx-auto px-6 py-10">

                <div className="flex justify-between gap-8">

                    {/* About */}
                    <div>
                        <h2 className="text-xl font-bold">
                            <img src={FLogo} alt="" />
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className='flex gap-6 mt-3 font-semibold'>
                            <p>GitHub</p>
                            <p>Twitter</p>
                            <p>Linkedin</p>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Product
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Company
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Legal
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>

                </div>

                <div className='divider'></div>

                {/* Copyright */}
                <div className="flex justify-between mt-6 text-xs text-gray-400">
                    <div className='text-[16px]'>© 2026 DevStack. All rights reserved.</div>
                    <div className='flex gap-6 text-[16px]'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;