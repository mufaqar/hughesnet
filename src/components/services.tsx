import React from 'react'
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa6";
function Services() {
    return (
        <section className='mx-auto container px-4 py-4'>

            <div className=''>
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
                    }} className='text-center font-bold lg:text-4xl text-xl lg:py-10 py-4'>All plans include Unlimited Standard Data</motion.h1>

                <div className='lg:grid  lg:grid-cols-3 gap-6 lg:space-y-0 space-y-4'>
                    {data.map((item: any, idx: number) => {

                        return (

                            <div className='border-[1px] border-black/20 box-border rounded-md bg-[#fafafa]' key={idx}>
                                <h1 className='bg-primary  rounded-t-md text-center text-white font-bold py-4 '>
                                    <li className='list-none flex absolute -mt-4 text-7xl text-amber-400'><FaMedal /></li>
                                    {item.title}
                                </h1>
                                <div className='px-8 pt-8'>
                                    <div className='text-center '>
                                        <p className='text-[12px] text-[#1e2732]  pb-2'>Download speeds up to</p>
                                        <h1 className='font-bold text-3xl text-[#1e2732] pb-2'>{item.mbps}</h1>
                                        <p className='text-[#1e2732] font-[500] text-[12px] pb-2'>{item.speed}</p>
                                        <Link href="#" className='flex mt-4 flex-col bg-primary w-[230px] m-auto justify-center items-center rounded-full p-2'>
                                            <span className='text-xs font-semibold text-white text-center'>
                                                Call to Get Started
                                            </span>
                                            <span className='sm:text-xl text-sm font-bold text-white flex gap-1 items-center'>
                                                <FaPhone /> 833-592-0098
                                            </span>
                                        </Link>
                                    </div>
                                    <hr className="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                                    <ul className='lg:space-y-2 pb-16'>
                                        <li className='flex items-center text-primary space-x-2'><GiCheckMark /> <span className='text-[#1e2832] font-[500] text-sm'>{item.property1}</span></li>
                                        <li className='flex items-center text-primary space-x-2'><GiCheckMark /> <span className='text-[#1e2832] font-[500] text-sm'> {item.property2}</span></li>
                                        <li className='flex items-center text-primary space-x-2'><GiCheckMark /><span className='text-[#1e2832] font-[500] text-sm'> {item.property3}</span></li>
                                    </ul>

                                </div>
                                <h3 className='bg-primary text-center bg-[#cfded4] py-2 '>*Includes  <strong className='text-[#1e2732] '>Free Professional Installation</strong> </h3>
                                <p className='text-center text-[11px] px-8 py-4 text-[#707070] font-[500] '>After using all your plan's High-Speed Data, you still have access to unlimited Standard Data, which may be slower during network congestion. *For qualifying customers.</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Services
export const data = [{
    title: "OUR MOST POPULAR",
    mbps: "50-75 Mbps",
    speed: "100-150 GB High-Speed Data",
    property1: "Essential internet activities",
    property2: "Light streaming",
    property3: "1 - 3 people",
},

{
    title: "OUR BEST VALUE",
    mbps: "100-150 Mbps",
    speed: "300-500 GB High-Speed Data",
    property1: "Streaming",
    property2: "Work or school from home",
    property3: "Families",
},
{
    title: "OUR MOST BUDGET-FRIENDLY",
    mbps: "12-25 Mbps",
    speed: "40-100 GB High-Speed Data",
    property1: "Email and chat",
    property2: "Web browsing",
    property3: "1 person",
},

]