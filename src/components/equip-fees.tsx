import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";
import {motion} from 'framer-motion'
export default function EquipFees() {
    return (
        <section className=' md:bg-[url("/images/bluebackground.png")]  bg-cover bg-no-repeat '>
             <div className='container mx-auto px-4   lg:py-16 py-8' >
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
            }} className='md:text-4xl text-xl lg:text-white font-sansextrabold text-center   mx-auto '>
                Viasat connects you where cable and fiber cannot at a great price
                </motion.h1>
                <p className=" pt-4 text-lg lg:text-white font-sansnormal text-gray-500 text-center  max-w-[600px] mx-auto mb-5">
                Get incredibly fast satellite broadband internet service and get connected even in hard to reach places
                </p>
                <Link href="#" className='flex mt-6 m-auto flex-col lg:bg-white bg-primary w-[280px] hover:bg-secondary duration-700 items-center rounded-full p-2'>
                        <span className='text-medium group-hover:text-primary  font-sansbold text-white lg:text-[#013064] text-center'>
                            Call to Get Started
                        </span>
                        <span className='sm:text-2xl lg:text-[#013064] group-hover:text-primary  text-white  text-sm font-bold  flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>
            </div>
        </section>
    )
}
