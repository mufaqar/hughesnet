import Link from 'next/link';
import React from 'react'
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { GiWorld } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
export default function Planbox() {
    return (
        <section className=" container mx-auto px-4 bg-cover bg-no-repeat mb-20 " style={{ backgroundImage: `url('/images/plansbg.png')`, height: '400px' }}>
            <div>
                <h1 className='font-bold text-3xl text-center py-8'>All Viasat Plans Include…</h1>


                <div className='grid grid-cols-3 gap-6'>
                    {data.map((item: any, idx: number) => {
                        return (

                            <div className="group lg:w-96 relative   cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid  h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                        <li className='list-none text-4xl text-white'>{item.icon}</li>
                                    </span>
                                    <div className="pt-6  text-center text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className='font-bold text-xl'>{item.title}</h3>
                                    </div>
                                    <div className="text-center text-base font-semibold leading-7">

                                        <p className="text-sm  pt-2 px-6 transition-all duration-300 group-hover:text-white">

                                            {item.description}

                                        </p>
                                        <p className='text-[12px] transition-all duration-300 group-hover:text-white pt-1'>{item.qualifying}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <p className='text-[11px] text-center pt-8 '>*One-time standard installation fee may be charged at the time of sale. Monthly service fee, equipment lease fee and taxes apply. Speeds are “up to,” are not guaranteed and will vary. Service is not available in all areas. Offer may be changed or withdrawn at any time. Copyright © 2023 Viasat, Inc. All rights reserved. Viasat, the Viasat logo and the Viasat signal are registered trademarks of Viasat, Inc.</p>

        </section>
    )
}

export const data = [
    { icon: <HiWrenchScrewdriver />, title: "FREE professional installation*", description: "Connect without the long wait, typicallywithin 3-5 days.", qualifying: "*For qualifying customers." },
    { icon: <GiWorld />, title: "High-speed internet", description: "Covering 99% of the U.S.", },
    { icon: <IoWifi />, title: "Built-In Wi-Fi", description: "Stay connected anywhere in your home." },

]