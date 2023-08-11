import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-50 px-2 md:px-4 z-50 bg-white">
      {/* Desktop and Mobile Friendly*/}
      <Link to={""}></Link>
      <div className="flex items-center h-full justify-between">
        <div className="h-20">
          <img src={Logo} alt="logo" className="h-full" />
        </div>
        {/* NAVBAR */}
        <div className="flex items-center gap-4 md:gap-7">
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg text-secondary font-semibold'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-primary">
            <FaCartPlus/>
          </div>

          <div className="text-2xl text-primary">
            <FaUserAlt color='#0096D6' />
          </div>
        </div>
      </div>

      {/* {Mobile} */}
    </header>
  );
};

export default Header;