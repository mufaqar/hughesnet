import Image from 'next/image'
import Link from 'next/link';
import { FaPhone } from "react-icons/fa6";
import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import {motion} from 'framer-motion'
export default function Discounts() {
    return (
        <section className='lg:py-16 py-4 bg-cover bg-no-repeat md:bg-[url("/images/goodbye.png")]' >
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                <div>
                    <div className=' lg:w-[35rem]'>
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
            }} className='lg:text-4xl text-lg font-medium  Poppins mb-5'>
                            Say Goodbye To Slow Internet.Get Connected Today -
                            Hassle-Free.

                        </motion.h1>
                        <p className='md:text-sm   text-gray-800 Poppins mb-5'>
                            Viasat offers high-speed satellite internet service in the continental
                            U.S., with unlimited data plans and <strong>speeds up to 150 Mbps </strong> on select
                            plans in select areas.
                        </p>
                        <p className='text-lg font-medium text-gray-500 Poppins'>

                        </p>

                    </div>
                    <ul className='lg:flex  lg:space-x-10'>
                        {data.map((item: any, idx: number) => {
                            return (
                                <div className=''>
                                    <li className='flex items-center text-primary space-x-2'><GiCheckMark /> <span className='text-[#1e2832] font-bold text-lg whitespace-nowrap'>{item.title}</span></li>
                                    <p className='text-normal px-2 text-[#1d303b]'>{item.des}</p>
                                </div>
                            )
                        })}

                    </ul>

                    <Link href="#" className='flex mt-6 flex-col bg-primary w-[230px]   items-center rounded-full p-2'>
                        <span className='text-xs font-semibold text-white text-center'>
                            Call to Get Started
                        </span>
                        <span className='sm:text-xl text-sm font-bold text-white flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>

                </div>

                
            </div>
        </section>
    )
}


export const data = [
    {
        title: "Affordable plans",
        des: "to fit your needs"
    },
    {
        title: "Super-fast speeds",
        des: "to take you to the next level"
    },
    {
        title: "Viasat Shield",
        des: "to protect your home internet network"

    },
]