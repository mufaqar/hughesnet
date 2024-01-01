import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";

export default function EquipFees() {
    return (
        <section className=' md:bg-[url("/images/bluebackground.png")]  bg-cover bg-no-repeat '>
             <div className='container mx-auto px-4   lg:py-16 py-8' >
                <h2 className='md:text-3xl text-xl lg:text-white font-bold text-center Poppins  mx-auto '>
                Viasat connects you where cable and fiber cannot at a great price
                </h2>
                <p className=" pt-4 text-lg lg:text-white font-medium text-gray-500 text-center Poppins max-w-[600px] mx-auto mb-5">
                Get incredibly fast satellite broadband internet service and get connected even in hard to reach places
                </p>
                <Link href="#" className='flex mt-6 m-auto flex-col lg:bg-white bg-primary w-[300px]  items-center rounded-full p-2'>
                        <span className='text-xs font-bold text-white lg:text-[#013064] text-center'>
                            Call to Get Started
                        </span>
                        <span className='sm:text-2xl lg:text-[#013064] text-white  text-sm font-bold  flex gap-1 items-center'>
                            <FaPhone /> 833-592-0098
                        </span>
                    </Link>
            </div>
        </section>
    )
}
