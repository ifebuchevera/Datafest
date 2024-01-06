import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer: React.FC = () => {
    return (
        <footer className="my-16 mx-10">
            <div className="flex lg:flex-row  flex-col container md:mx-auto justify-evenly items-center">
                <div className="my-2  ">
                    <Link href="/" className="text-[#808080]  font-500  font-500  font-500 text-lg font-bold">
                        <Image src="/img/logo.svg" alt="img" width="100" height="100" />
                    </Link>
                    <p className="my-2 ">DSNUNNSummit is a comprehensive event spotlighting <br className="xl:flex hidden" /> diverse careers in Africa's data space</p>
                    <p className="flex my-2 items-center">
                    <Image src="/img/twitter.svg" alt="img" width="100" height="100" className='w-auto mx-3' />
                    <Image src="/img/linkedin.svg" alt="img" width="100" height="100" className='w-auto mx-3' />

                    </p>
                </div>
                <div className="flex items-start md:items-center justify-evenly md:flex-row flex-col">

                <div className="flex items-start md:items-center justify-evenly my-5">
                 <div className=" mx-5 text-left  md:mx-0">
                    <p className="">About</p>
                    <p className="">Speakers</p>
                    <p className="">Partners & Sponsors</p>
                </div>
                <div className=" mx-5 text-left  md:mx-0">
                    <p className="">Panelist</p>
                    <p className="">Organizers</p>
                    <p className="">Our Blog</p>
                </div>
                </div>

                <div className="flex  md:mx-0 mx-5 text-left ">
                    <p className=''>
                      <button className='flex items-center justify-center whitespace-nowrap text-[#fff] bg-[#009933] rounded-3xl w-[240px]  px-[16px] py-[8px] text-[16px]'>
                      Join Our Community
                        <Image src="/img/arrow.svg" width="10" height="10" alt="" className='w-auto px-2' />
                      </button></p>
                  </div>   
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;