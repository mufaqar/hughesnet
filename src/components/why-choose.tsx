import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
                <div className='flex items-center'>
                    <Image src="/images/choose.jpg" alt='choose' width={353} height={478} />
                    <Image src="/images/disc.jpg" alt='disc' width={260} height={215} className='-ml-28 mt-32' />
                </div>
                <div>
                    <h2 className='md:text-3xl text-xl font-bold mb-5'>
                        Why Choose HughesNet Internet?
                    </h2>
                    <p className='text-base font-normal'>
                        HughesNet is a valuable choice for individuals and businesses seeking high speed internet connectivity especially in the rural and remote area. Here are some of the pros and cons of HughesNet Internet.
                    </p>
                </div>
            </div>
        </section>
    )
}
