import Image from 'next/image'
import React from 'react'

export default function Deals() {
    return (
        <section className=''>
            <div className="container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="md:px-10 px-5">
                    <h2 className='md:text-3xl text-xl font-bold mb-5'>
                        Current HughesNet Internet Deals
                    </h2>
                    <p className="text-lg font-normal mb-5">
                        HughesNet is a satellite internet service provider offering high speed internet service to the rural and remote areas where other internet options are limited or not available such as DSL, Cable and Fiber. HughesNet is offering the following incentives to its new customers
                    </p>
                    <ul className="grid gap-2">
                        <li className="text-lg font-normal">
                            Get a $100 prepaid MasterCard via rebate (offer expires 8/30/2023)
                        </li>
                        <li className="text-lg font-normal">
                            Free Professional Installation
                        </li>
                        <li className="text-lg font-normal">
                            Save $25 off per month for six or twelve months on all plans (except 15 GB)
                        </li>
                        <li className="text-lg font-normal">
                            $99 credit for lease setup fee in select areas
                        </li>
                        <li className="text-lg font-normal">
                            Free HughesNet ATA (Voice Equipment)
                        </li>
                    </ul>
                </div>
                <div className="">
                    <Image src="/images/deals.jpg" alt="deals" width={910} height={610} className="w-full md:h-[770px] object-cover object-left" />
                </div>
            </div>
        </section>
    )
}
