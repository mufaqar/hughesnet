import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                <div className='flex items-center relative md:after:block after:hidden after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:content-[""] after:bg-gradient-to-b after:bg-violet-400 after:via-primary after:from-violet-400 after:h-1/2 after:w-2'>
                    <Image src="/images/choose.jpg" alt='choose' width={353} height={478} className='md:w-2/3 w-full' />
                </div>
                <div>
                    <p className='text-sm font-extrabold text-primary Poppins mb-3'>
                        Why Choose
                    </p>
                    <h2 className='md:text-4xl text-3xl font-extrabold Poppins mb-5'>
                        HughesNet Internet?
                    </h2>
                    <p className='text-lg font-medium text-gray-500 Poppins'>
                        HughesNet is a valuable choice for individuals and businesses seeking high speed internet connectivity especially in the rural and remote area. Here are some of the pros and cons of HughesNet Internet.
                    </p>
                </div>
            </div>
        </section>
    )
}
