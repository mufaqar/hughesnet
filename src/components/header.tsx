import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa6";

export default function Header() {
    return (
        <header className='sticky top-0 z-50'>
            <div className='py-1.5 bg-white'>
                <div className='container mx-auto px-4'>
                    <ul className='flex gap-2'>
                        <li>
                            <Link href="#" className='text-sm font-sansregular text-primary hover:text-black'>
                                Account Login
                            </Link>
                        </li>
                        <li className='text-black/50'>|</li>
                        <li>
                            <Link href="#" className='text-sm font-sansregular text-primary hover:text-black'>
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-white h-auto shadow-[0_3px_6px_0px_rgba(0,0,0,0.16)] py-3'>
                <div className='container mx-auto px-4 flex flex-row gap-7 justify-between items-center'>
                    <div>
                        <Link href="/">
                            <Image src="/images/HughesNet.jpg" alt='HughesNet' width={140} height={50} />
                        </Link>
                    </div>
                    <div>

                        <Link href="#" className='flex flex-col bg-primary w-[195px] duration-700 group hover:bg-secondary justify-center items-center rounded-full py-1 '>
                            <span className='text-xs group-hover:text-black font-sansbold text-white text-center'>
                                Call to Get Started
                            </span>
                            <span className='sm:text-xl  group-hover:text-black font-bold text-white flex gap-1 items-center'>
                                <FaPhone /> 833-592-0098
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
