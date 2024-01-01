import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";
export default function WhyChoose() {
    return (
        <section className='py-6 bg-no-repeat bg-cover mt-8' style={{ backgroundImage: `url('/images/upgrade.jpg')`, }}>
            <div className='container mx-auto px-4  items-center '>
              

              
                <div className=' lg:pl-52'>
                    <div className='lg:flex '>
                    <div>
                    <h1 className='lg:text-4xl font-bold text-white Poppins mb-3'>
                        Upgrade your plan with Office Hours— Work from home without using your data
                    </h1>
                    <p className='md:text-2xl text-white   Poppins mb-5'>
                        From 8 a.m. - 5 p.m. daily.* Add to plans for <strong>just $40/mo.</strong> 
                    </p>
                    </div>
                    <div>
                    <Link href="#" className='flex mt-4 flex-col lg:bg-white bg-primary w-[230px] m-auto justify-center items-center rounded-full p-2'>
                        <span className='text-xs font-semibold lg:text-primary text-white text-center'>
                            Call to Learn More
                        </span>
                        <span className='sm:text-xl text-sm font-bold lg:text-primary text-white flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>

                    </div>
                    </div>
                  
                    <p className=' text-[11px] lg:text-[#e3e3e3] lg:pt-0 pt-4 text-black leading-tight Poppins '>
                        *Office Hours is an optional service for use with web browsing, bulk transfers, real-time communications, network storage, social networking (excluding embedded streaming videos), VPN, and email. Not all internet traffic sources are identifiable and available to benefit from Office Hours. Office Hours does not include video streaming, real-time entertainment, peer-to-peer networking, gaming, and any other categories of internet content not specifically stated above. Office Hours is available 8:00 am to 5:00 pm local time, daily. Available time may vary by location. For additional details, visit https://vsat.co/officehoursfaqs. Office Hours is not available on CAF-II Service plans. Office Hours users who use more than 2 TB in a month, which represents the top percentage of users during the hours of 8 am to 5 pm local time, may be contacted and asked to reduce usage of Office Hours. If your usage pattern exceeds the prior referenced amount for two months in a six-month period, Viasat may terminate or suspend your use of Office Hours.
                    </p>
                  
                </div>
            </div>
        </section>
    )
}
