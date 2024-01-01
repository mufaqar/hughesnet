import Link from 'next/link';
import React from 'react'
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { GiWorld } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { motion } from "framer-motion";
export default function Planbox() {
    return (
        <section className=' container mx-auto px-4  '>
            <div className='bg-cover bg-no-repeat mb-20 md:bg-[url("/images/plansbg.png")]'>
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
                    }} className='font-sansbold text-xl  lg:text-3xl text-center py-8'>All Viasat Plans Include…</motion.h1>


                <div className='lg:grid lg:grid-cols-3 items-center mt-4 pb-8 lg:space-y-0 space-y-4 gap-4 px-8'>
                    {data.map((item: any, idx: number) => {
                        return (

                            <div className='relative rounded-2xl border bg-white lg:h-[250px] group' key={idx}>
                                <div className='bg-primary absolute top-0 left-0 right-0 h-0 group-hover:h-full delay-150 duration-300 ease-in-out w-full rounded-2xl z-auto'></div>
                                <div className=' py-9 px-7 relative z-[1] '>
                                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-[100px] h-[100px] mx-auto rounded-full bg-white p-3 border  text-primary text-6xl group-hover:text-white group-hover:bg-primary flex items-center justify-center delay-150 duration-300 ease-in-out'>
                                        {item.icon}
                                    </div>

                                    <h3 className='text-xl font-sansextrabold text-center  group-hover:text-white mt-10 delay-150 duration-300 ease-in-out'>
                                        {item.title}
                                    </h3>
                                    <p className='font-sansregular text-center   group-hover:text-white max-w-[300px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                                        {item.description}
                                    </p>
                                    <p className='text-xs font-sansregular text-center   group-hover:text-white max-w-[300px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                                        {item.qualifying}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                }} className='text-[12px] font-sansregular text-center -mt-14'>*One-time standard installation fee may be charged at the time of sale. Monthly service fee, equipment lease fee and taxes apply. Speeds are “up to,” are not guaranteed and will vary. Service is not available in all areas. Offer may be changed or withdrawn at any time. Copyright © 2023 Viasat, Inc. All rights reserved. Viasat, the Viasat logo and the Viasat signal are registered trademarks of Viasat, Inc.</motion.p>

        </section>
    )
}

export const data = [
    { icon: <HiWrenchScrewdriver />, title: "FREE professional installation*", description: "Connect without the long wait, typicallywithin 3-5 days.", qualifying: "*For qualifying customers." },
    { icon: <GiWorld />, title: "High-speed internet", description: "Covering 99% of the U.S.", },
    { icon: <IoWifi />, title: "Built-In Wi-Fi", description: "Stay connected anywhere in your home." },

]