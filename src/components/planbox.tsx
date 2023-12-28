import Link from 'next/link';
import React from 'react'
import { MdOutlineScreenshotMonitor } from "react-icons/md";

export default function Planbox() {
    return (
        <div className='bg-white md:p-12 p-7 flex md:flex-row flex-col gap-10'>
            <div className='md:w-2/5 w-full'>
                <p className='text-xs font-extrabold text-primary Poppins md:text-start text-center'>
                    TV + INTERNET
                </p>
                <h2 className='sm:text-3xl text-3xl font-extrabold text-gray-800 Poppins md:text-start text-center my-3'>
                    Player Bundle
                </h2>
                <p className='text-base leading-5 font-normal text-gray-500 Poppins md:text-start text-center max-w-[300px] md:mx-0 mx-auto'>
                    45+ channels (up to 50 in HD), Catch Up and Box Sets – plus MaxiNet on TV (if you subscribe)
                </p>
            </div>
            <div className='md:w-2/5 w-full flex justify-center gap-5 items-center md:border-x border-x-0'>
                <div>
                    <MdOutlineScreenshotMonitor className="text-5xl text-primary mx-auto" />
                    <p className='text-base font-normal text-gray-500 text-center Poppins mt-2'>
                        Player Tv
                    </p>
                </div>
                <p className='text-base font-normal text-gray-500 text-center Poppins'>+</p>
                <div>
                    <MdOutlineScreenshotMonitor className="text-5xl text-primary mx-auto" />
                    <p className='text-base font-normal text-gray-500 text-center Poppins mt-2'>
                        Up to 500Mbps
                    </p>
                </div>
            </div>
            <div className='md:w-1/5 w-full'>
                <h3 className='sm:text-4xl text-2xl leading-none font-bold text-primary text-center Poppins'>
                    $24.99
                </h3>
                <p className='text-base font-normal text-gray-500 text-center Poppins mt-1'>
                    per month
                </p>
                <Link href="#" className='text-base font-semibold text-white Poppins uppercase bg-primary hover:bg-black text-center py-4 px-8 rounded-full block w-fit min-w-[160px] mx-auto mt-8'>
                    buy now
                </Link>
            </div>
        </div>
    )
}
