import FLogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="mt-9">

            <div className="divider"></div>

            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div className="text-center md:text-left">

                        <h2 className="text-xl font-bold flex justify-center md:justify-start">
                            <img
                                src={FLogo}
                                alt="Dev Stack"
                                className="w-auto"
                            />
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500 max-w-md">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex justify-center md:justify-start gap-6 mt-3 font-semibold text-gray-600">
                            <p>GitHub</p>

                            <span className='sm:block md:hidden'>•</span>

                            <p>Twitter</p>

                            <span className='sm:block md:hidden'>•</span>

                            <p>LinkedIn</p>
                        </div>

                    </div>

                    <div className="hidden md:block">
                        <h3 className="font-semibold text-gray-800">
                            Product
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="font-semibold text-gray-800">
                            Company
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="font-semibold text-gray-800">
                            Legal
                        </h3>

                        <div className="mt-3 space-y-2 text-sm text-gray-500">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>

                </div>

                <div className="divider"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center 
                                gap-4 mt-6 text-xs text-gray-400">

                    <div className="text-center sm:text-left">
                        © 2026 Dev Stack. All rights reserved.
                    </div>

                    <div className="flex gap-5">
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;