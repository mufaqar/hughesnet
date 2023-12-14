import Image from 'next/image'
import React from 'react'

export default function Deals() {
    return (
        <section className='md:bg-[url("/images/deals.jpg")] bg-left bg-cover bg-no-repeat bg-violet-700  py-28' style={{ backgroundSize: "50% 100%" }}>
            <div className="container mx-auto px-3 flex md:flex-row flex-col gap-7">
                <div className="md:w-1/2 w-full md:ml-auto md:px-20 px-4">
                    <h2 className='md:text-5xl text-3xl font-extrabold text-white Poppins mb-5'>
                        Current HughesNet Internet Deals
                    </h2>
                    <p className="text-lg font-normal text-white Poppins mb-5">
                        HughesNet is a satellite internet service provider offering high speed internet service to the rural and remote areas where other internet options are limited or not available such as DSL, Cable and Fiber. HughesNet is offering the following incentives to its new customers
                    </p>
                    <ul className="grid gap-1">
                        <li className="text-lg font-normal text-white Poppins">
                            Get a $100 prepaid MasterCard via rebate (offer expires 8/30/2023)
                        </li>
                        <li className="text-lg font-normal text-white Poppins">
                            Free Professional Installation
                        </li>
                        <li className="text-lg font-normal text-white Poppins">
                            Save $25 off per month for six or twelve months on all plans (except 15 GB)
                        </li>
                        <li className="text-lg font-normal text-white Poppins">
                            $99 credit for lease setup fee in select areas
                        </li>
                        <li className="text-lg font-normal text-white Poppins">
                            Free HughesNet ATA (Voice Equipment)
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
