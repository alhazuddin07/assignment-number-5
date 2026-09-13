import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#F1F5F9] p-3 font-semibold">

            <div className="container mx-auto flex items-center justify-between">
                <button className="md:hidden flex flex-col gap-1.5 p-1">
                    <span className="w-5 h-0.5 bg-gray-500"></span>
                    <span className="w-5 h-0.5 bg-gray-500"></span>
                    <span className="w-5 h-0.5 bg-gray-500"></span>
                </button>

                <img
                    src={Logo}
                    alt="DevStack"
                    className="w-auto h-8 md:h-auto"
                />
                <ul className="hidden md:flex justify-between items-center gap-6 text-[#475569]">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex items-center gap-2 md:gap-4">
                    <button className="text-[#334155] text-sm md:text-base">
                        Sign In
                    </button>
                    <button className="btn btn-secondary rounded-3xl btn-sm md:btn-md">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;