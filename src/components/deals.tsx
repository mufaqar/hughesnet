import Image from 'next/image'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";
import React from 'react'
import {motion} from 'framer-motion'
import { GiCheckMark } from "react-icons/gi";
export default function Deals() {
    return (
        <section className='lg:m-12'>
        <div className='container mx-auto px-4  md:bg-[url("/images/voicesever.png")] bg-left bg-contain bg-no-repeat   ' >
            <div className="flex md:flex-row flex-col gap-7">
                <div className="md:w-1/2 w-full md:ml-auto md:px-20 px-4 md:py-16">
                    <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className='md:text-3xl  text-lg font-extrabold text-[#000] Poppins mb-5'>
                    Add Voice service to Viasat high-speed satellite internet and save
                    </motion.h2>
                    <p className="text-normal font-normal text-[#1e2732] Poppins mb-5">
                    Add Viasat Voice home phone service and get <strong>$10/month off </strong> your Voice service for 3 months.
                    </p>
                    <ul className="grid gap-1">
                        <li className="text-lg flex space-x-2 font-bold  text-[cadetblue] Poppins"><GiCheckMark /> 
                       <span> Unlimited Local and long distance calls within the U.S. and Canada</span>
                        </li>
                        <Link href="#" className='flex mt-6 flex-col bg-primary w-[230px]   items-center rounded-full p-2'>
                        <span className='text-xs font-semibold text-white text-center'>
                            Call to Get Started
                        </span>
                        <span className='sm:text-xl text-sm font-bold text-white flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    )
}
