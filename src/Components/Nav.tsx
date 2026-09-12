import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='bg-[#F1F5F9] p-3  font-semibold '>
            <div className='flex justify-between items-center container mx-auto'>
                <img src={Logo} alt="" />
                
                <ul className='flex justify-between items-center gap-6  text-[#475569] '>
                    <li className='text-[#DB2777]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                
                <div className='flex gap-4'>
                    <button className='text-[#334155]'>Sign In</button>
                    <button className='btn btn-secondary rounded-3xl'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;