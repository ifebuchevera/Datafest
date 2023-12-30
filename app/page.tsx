"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main className="">
    <nav className="bg-white p-4 border-[3px] border-[#F6F6F6]">
      <div className="container mx-auto flex justify-between  items-center">
        <Link href="/" className="text-[#808080]  font-500  font-500  font-500 text-lg font-bold">
         <Image src="/img/logo.svg" alt="img" width="100" height="100" />
        </Link>
        <div className="hidden md:flex xl:hidden">
  <p>
    <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
      Register as an attendee
      <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2'/>
    </button>
  </p>
</div>

        <div className="lg:hidden">
          {/* Hamburger icon for small and medium screens */}
          <button className="text-[#808080]  font-500  font-500  font-500" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
       <div className="absolute text-center top-16 right-4 p-4  dropdown-container">
       {/* Dropdown menu for small and medium screens */}
       <Link href="/" className="block dropdown-item">
         About event
       </Link>
       <Link href="/about" className="block dropdown-item">
         Speakers
       </Link>
       <Link href="/about" className="block dropdown-item">
         Panelist
       </Link>
       <Link href="/about" className="block dropdown-item">
         Partners & Sponsors
       </Link>
       <Link href="/about" className="block dropdown-item">
         Organisers
       </Link>
       <Link href="/about" className="block dropdown-item">
         Speakers
       </Link>
       <div className="my-8 flex flex-col items-center justify-ccenter">

       <div className="flex my-2">
          <p className=''>
            <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl w-[240px]  px-[16px] py-[8px] text-[16px]'>
            Register as an attendee
            <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2'/>
            </button></p>
        </div>
        <div className="flex my-2 ">
          <p className=''>
            <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px] w-[240px] my-2'>
            Join a community
            <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2'/>
            </button></p>
        </div>
       </div>
       {/* Add more links as needed */}
     </div>
     
          )}
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          {/* Navbar links for large screens */}
      
          {/* Add more links as needed */}
          <Link href="/" className="block text-[#808080]  font-500  font-500  font-500 ">
               About event
              </Link>
              <Link href="/about" className="text-[#808080]  font-500  font-500  font-500">
                Speakers
              </Link>
              <Link href="/about" className="text-[#808080]  font-500  font-500  font-500">
               Panelist
              </Link>
              <Link href="/about" className="text-[#808080]  font-500  font-500  font-500">
               Partners & Sponsors
              </Link>
              <Link href="/about" className="text-[#808080]  font-500  font-500  font-500">
                Organisers
              </Link>
              <div className="hidden lg:flex ">
          <p className=''>
            <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
            Register as an attendee
            <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2'/>
            </button></p>
        </div>
        <div className="hidden lg:flex ">
          <p className=''>
            <button className='flex items-center justify-center whitespace-nowrap text-[#009933] border-2 border-[#009933] rounded-3xl  px-[16px] py-[8px] text-[16px]'>
            Join a community
            <Image src="/img/green.svg" width="10" height="10" alt="" className='w-auto px-2'/>
            </button></p>
        </div>
        </div>
      </div>
    </nav>   
    </main>
   
  );
};

export default Navbar;
