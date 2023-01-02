import React from 'react'
import NavbarTop from './NavbarTop'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavbarTop />
            <nav>
                <header className="bg-[#FFF8EE] shadow-2xl	">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                         <Link to="/"><img alt="logo" src='images/logo.png' className='object-scale-down h-12 w-96' /></Link>   
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link className="mr-8 hover:text-gray-900 text-[#2A435D] font-bold" to="/">Home</Link>
                            <Link className="mr-8 hover:text-gray-900 text-[#2A435D] font-bold" to='/about'>About</Link>
                            <Link className="mr-8 hover:text-gray-900 text-[#2A435D] font-bold" to="/drinks">Drinks</Link>
                            <Link className="mr-8 hover:text-gray-900 text-[#2A435D] font-bold" to="/contact">Contact</Link>
                        </nav>
                        <img src="images/cart.svg" alt="" className='h-6 mr-5' />
                        <div className='flex flex-row mr-16'>
                            <div className='mt-10'>
                                <button className='font-bold'>
                                    Dilivery Order
                                </button>
                                <br></br>
                                <span className='text-sm'>+880 1630 225 015</span>
                            </div>
                            <img src="images/delivery-icon.svg" alt="" className='h-8 m-10' />

                        </div>

                        <button className="inline-flex items-center bg-[#F89808] border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0 text-white">Login
                        </button>

                    </div>
                </header>
            </nav>
        </div>
    )
}

export default Navbar