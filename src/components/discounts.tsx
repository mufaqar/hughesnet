import Image from 'next/image'
import React from 'react'

export default function Discounts() {
    return (
        <section className='py-16 bg-cover bg-no-repeat' style={{ backgroundImage: `url('/images/goodbye.png')`, height: '400px' }}>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                <div className=' w-[35rem]'>
                    <h1 className='text-4xl   Poppins mb-3'>
                        Say Goodbye To Slow Internet.Get Connected Today -
                        Hassle-Free.
                        
                    </h1>
                    <p className='md:text-sm   text-gray-800 Poppins mb-5'>
                        Viasat offers high-speed satellite internet service in the continental
                        U.S., with unlimited data plans and <strong>speeds up to 150 Mbps </strong> on select
                        plans in select areas.
                    </p>
                    <p className='text-lg font-medium text-gray-500 Poppins'>
                       
                    </p>
                    <ul>

                    </ul>
                </div>
                <div>
                    <div className='relative'>
                        <div className='border-2 border-primary rounded-full md:w-[120px] w-[100px] md:h-[120px] h-[100px] flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 left-5 -rotate-45'>
                            <p className='md:text-3xl text-xl font-bold text-primary text-center Poppins'> 150</p>
                            <p className='text-sm font-semibold text-primary text-center Poppins'>mbps</p>
                        </div>

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


export const data =[
    {
title:"Affordable plans"

    },
    {
title:"Super-fast speeds"
    },
    {
        title:"Viasat Shield"

    },
]