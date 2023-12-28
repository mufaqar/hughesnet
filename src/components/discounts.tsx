import Image from 'next/image'
import React from 'react'

export default function Discounts() {
    return (
        <section className='py-16 bg-violet-50'>
            <div className='container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                <div>
                    <p className='text-sm font-extrabold text-primary Poppins mb-3'>
                        HughesNet
                    </p>
                    <h2 className='md:text-5xl text-xl font-bold text-gray-800 Poppins mb-5'>
                        Internet Discounts
                    </h2>
                    <p className='text-lg font-medium text-gray-500 Poppins'>
                        HughesNet participates in the Affordable Connectivity Program (ACP) to provide $30 discount per month ($75 on tribal lands) to all eligible participants on HughesNet Internet service through the Federal Communications Commission’s (FCC) ACP program. It requires participants to submit an application that demonstrates their eligibility
                    </p>
                </div>
                <div>
                    <div className='relative'>
                        <div className='border-2 border-primary rounded-full md:w-[120px] w-[100px] md:h-[120px] h-[100px] flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 left-5 -rotate-45'>
                            <p className='md:text-3xl text-xl font-bold text-primary text-center Poppins'> 600</p>
                            <p className='text-sm font-semibold text-primary text-center Poppins'>mbps</p>
                        </div>
                        <Image src="/images/working.png" alt='working' width={1024} height={907} className='w-full object-contain relative z-[1]' />
                        <div className='bg-primary rounded-full md:w-[120px] w-[100px] md:h-[120px] h-[100px] flex flex-col items-center justify-center absolute -top-5 right-5 rotate-12'>
                            <p className='md:text-3xl text-xl font-bold text-white text-center Poppins'> Full</p>
                            <p className='text-sm font-normal text-white text-center Poppins'>Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
