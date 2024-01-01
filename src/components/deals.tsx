import Image from 'next/image'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";
import React from 'react'
import {motion} from 'framer-motion'

import { GiCheckMark } from "react-icons/gi";
export default function Deals() {
    return (
        <section className='lg:m-12'>
        <div className='container mx-auto px-4' >
            <div className="lg:flex md:py-4 justify-between lg:space-x-8 items-center">
<div>

<Image
      src="/images/voicesever.png"
      width={500}
      height={500}
      alt="Picture of the author"
      className='w-full h-full'
    />
</div>

                <div className="  ">
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
            }} className=' leading-10 md:text-4xl md:pt-4 font-sansbold text-[#000] lg:w-[30rem] pb-5 '>
                    Add Voice service to Viasat high-speed satellite internet and save
                    </motion.h2>
                    <p className="text-normal font-sansregular lg:w-[30rem] text-[#1e2732] pb-5">
                    Add Viasat Voice home phone service and get <strong className='font-sansbold'>$10/month off </strong> your Voice service for 3 months.
                    </p>
                    <ul className="grid gap-1">
                        <li className="text-lg flex space-x-2   text-[cadetblue] "><GiCheckMark /> 
                       <span className='text-black text-xl text-[#1e2832] lg:w-[30rem] font-sansbold'> Unlimited Local and long distance calls within the U.S. and Canada</span>
                        </li>
                        <Link href="#" className='flex mt-6 flex-col bg-primary w-[300px]  group hover:bg-secondary duration-700  items-center rounded-full p-2'>
                        <span className='text-medium group-hover:text-black font-sansextrabold text-white text-center'>
                            Call to order
                        </span>
                        <span className='sm:text-xl group-hover:text-black text-sm font-bold text-white flex gap-1 items-center'>
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
