import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { FaPhone } from "react-icons/fa6";
export default function WhyChoose() {
    return (
        <section className='py-6 bg-no-repeat bg-cover mt-8' style={{ backgroundImage: `url('/images/upgrade.jpg')`, }}>
            <div className='container mx-auto px-4  items-center '>
              

              
                <div className=' lg:pl-52'>
                    <div className='lg:flex items-center'>
                    <div>
                    <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className='lg:text-4xl font-sansbold text-white leading-5 mb-3'>
                        Upgrade your plan with Office Hours— Work from home without using your data
                    </motion.h1>
                    <p className='md:text-2xl text-white font-sansregular mb-5'>
                        From 8 a.m. - 5 p.m. daily.* Add to plans for <strong>just $40/mo.</strong> 
                    </p>
                    </div>
                    <div>
                    <Link href="#" className='flex mt-4 group hover:bg-secondary duration-700  flex-col lg:bg-white bg-primary w-[300px] m-auto justify-center items-center rounded-full p-3'>
                        <span className='text-xs group-hover:text-black font-semibold lg:text-primary text-white text-center'>
                            Call to Learn More
                        </span>
                        <span className=' group-hover:text-black text-2xl font-bold lg:text-primary text-white flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>

                    </div>
                    </div>
                  
                    <p className=' text-[12px] font-sansregular lg:text-[#e3e3e3] lg:pt-0 pt-4 text-black leading-5 '>
                        *Office Hours is an optional service for use with web browsing, bulk transfers, real-time communications, network storage, social networking (excluding embedded streaming videos), VPN, and email. Not all internet traffic sources are identifiable and available to benefit from Office Hours. Office Hours does not include video streaming, real-time entertainment, peer-to-peer networking, gaming, and any other categories of internet content not specifically stated above. Office Hours is available 8:00 am to 5:00 pm local time, daily. Available time may vary by location. For additional details, visit https://vsat.co/officehoursfaqs. Office Hours is not available on CAF-II Service plans. Office Hours users who use more than 2 TB in a month, which represents the top percentage of users during the hours of 8 am to 5 pm local time, may be contacted and asked to reduce usage of Office Hours. If your usage pattern exceeds the prior referenced amount for two months in a six-month period, Viasat may terminate or suspend your use of Office Hours.
                    </p>
                  
                </div>
            </div>
        </section>
    )
}
