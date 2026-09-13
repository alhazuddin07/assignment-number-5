import BannerLogo from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 
                        flex flex-col md:flex-row justify-between items-center">

            <div className="w-full md:w-1/2 text-center md:text-left">

                <h1 className="font-bold 
                               text-4xl sm:text-5xl md:text-6xl mt-6 md:mt-10 py-5 md:py-9">
                    Build Your Ideal <br />

                    <span className="bg-linear-to-r 
                                     from-red-500 via-pink-500 to-purple-500 
                                     bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-[16px] sm:text-[18px] md:text-[19px] 
                              text-[#475569] leading-relaxed">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="my-8 md:my-13 flex flex-col sm:flex-row gap-3 
                                justify-center md:justify-start">

                    <button
                        className="btn bg-linear-to-r from-[#fa7213] to-[#ec4899] 
                                   text-white px-6 py-4 rounded-md">
                        Explore Technologies
                    </button>

                    <button
                        className="btn text-[#374151] px-6 sm:px-16 py-4 rounded-md">
                        Learn More
                    </button>

                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">

                <img
                    src={BannerLogo}
                    alt="Development Stack"
                    className="w-75 sm:w-150 md:w-137.5 max-w-full"
                />

            </div>

        </div>
    );
};

export default Banner;