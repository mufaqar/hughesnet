import Link from 'next/link';
import React from 'react'
import { CgScreenWide } from "react-icons/cg";

export default function Planbox() {
    return (
        <div className='group'>
            <div className='bg-[#262626] py-8 px-8 rounded-t-[5px] pb-[99px] group-hover:bg-[#198cc2]'>
                <CgScreenWide className="text-7xl font-normal text-white text-center mx-auto" />
                <h2 className='text-2xl font-medium text-white text-center'>
                    Home Comfort
                </h2>
            </div>
            <div className='py-8 px-8 border border-[#198cc2]/40 rounded-b-[5px] border-t-0'>
                <div className='bg-neutral-100 p-8 rounded-lg -mt-20'>
                    <h2 className='md:text-5xl text-2xl font-semibold '>
                        $19
                        <sub className='text-sm'>/mo</sub>
                    </h2>
                    <p className='text-base font-normal my-8'>
                        Lorem Ipsum is simply dummy text of the printing.
                    </p>
                    <ul className='marker:content-["✓"] list-inside grid gap-3'>
                        <li className='text-base font-normal'>
                            Up tp 200+ channel
                        </li>
                        <li className='text-base font-normal'>
                            Your Startup
                        </li>
                        <li className='text-base font-normal'>
                            5 channel record
                        </li>
                        <li className='text-base font-normal'>
                            Metric for Your Startup
                        </li>
                    </ul>
                </div>
                <Link href="#" className='text-base font-medium text-white uppercase bg-[#198cc2] group-hover:bg-black text-center py-5 px-8 rounded-md block w-fit min-w-[160px] mx-auto mt-8'>
                    buy now
                </Link>
            </div>
        </div>
    )
}
