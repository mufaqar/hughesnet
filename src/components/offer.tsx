import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaCaretDown } from "react-icons/fa";
function Offer() {
    return (
        <section className='bg-[url("/images/promo-bg.png")] bg-center bg-cover bg-no-repeat' >
            <div className=' container mx-auto px-4 lg:flex justify-between pt-12 pb-12 space-y-4 lg:space-y-0'>
                <div className=''>
                    <div className='lg:w-[37rem]'>
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
            }} className='sm:text-[45px] pb-8 text-2xl font-sansextrabold text-black capitalize  leading-tight'>
                        Get High-Speed Internet and Straightforward Pricing with Viasat
                        </motion.h1>

                    </div>
                    <div className='box-border relative bg-white lg:w-[35rem]  pt-8 px-7 pb-4 rounded-[8px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]'>
                        <div className='absolute -top-5 -left-4 flex items-center justify-center gap-3 bg-gradient-to-r from-primary bg-[#44b3a4] py-2 w-[248px] rounded-[4px] shadow-[0_3px_6px_0px_rgba(0,0,0,0.16)]'>
                            <Image src="/images/promooffer.svg" alt='promooffer' width={26} height={26} />
                            <p className='text-sm font-sansbold text-white'>
                                Special Offer
                            </p>
                        </div>
                        <div className='lg:flex items-center mt-4 lg:space-x-2'>
                            <p className='text-lg font-sansbold text-[#26272b]'>
                                Sign up and get up to
                            </p>
                            <h2 className='sm:text-[46px] text-4xl font-sansextrabold text-primary underline'>
                                $300 OFF
                            </h2>
                            <p className=' leading-3 font-sansbold  text-[#26272b] lg:pl-2 lg:pt-0 pt-2'>
                                on select plans <br /><br/>
                                in select areas
                            </p>
                        </div>
                        <li className='list-none text-primary flex lg:space-x-2 items-center pt-6'>
                            <FaCheck />
                            <span className='text-black font-sansnormal'>Plus, get <span className='text-primary'> free professional installation*</span></span>
                        </li>
                        <p className='text-[12px] text-black/70 pt-2 font-sansnormal'>After using all your plan's High-Speed Data, you still have access to unlimited Standard Data, which may be slower during network congestion. *For qualifying customers.</p>
                        <Link href="#" className='flex mt-4 flex-col bg-primary group hover:bg-secondary duration-700 w-[230px] justify-center items-center rounded-full p-2'>
                            <span className='text-sm group-hover:text-black font-sansextrabold text-white text-center'>
                                Call to get this deal
                            </span>
                            <span className='sm:text-xl group-hover:text-black text-sm font-sansextrabold text-white flex gap-1 items-center'>
                                <FaPhone /> 833-592-0098
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='lg:w-[30rem] bg-white rounded-md'>
                    <div className='text-center'>
                        <h1 className='bg-[#0c3950] text-white font-sansbold lg:text-lg py-4'>Start here to see Recommended plans</h1>
                        <li className='flex items-center justify-center  -mt-5 list-none text-5xl text-[#0c3950]'>
                            <FaCaretDown />
                        </li>
                    </div>

                    <div className='container mx-auto lg:px-20 px-4 pb-6 lg:pb-0'>
                        <div>
                            <h1 className='font-sansnormal lg:text-2xl text-center pb-4  text-[#26272b]'>What do you primarily use internet for?
                            </h1>
                            <ul className='space-y-4 cursor-pointer'>
                                <li className='bg-primary font-sansnormal text-xl rounded-full py-4 text-center text-white '>
                                    <Link href={'/'}>Streaming</Link>
                                </li>
                                <li className='bg-primary font-sansnormal text-xl  rounded-full py-4 text-center text-white '>
                                    <Link href={'/'}>Browsing</Link>
                                </li>
                                <li className='bg-primary font-sansnormal text-xl  rounded-full py-4 text-center text-white '>
                                    <Link href={'/'}>All/Other</Link>
                                </li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Offer