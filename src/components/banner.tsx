import React from 'react'

export default function Banner() {
    return (
        <section className='bg-[url("/images/banner.jpg")] bg-center bg-cover bg-no-repeat md:py-16 pt-16 pb-20'>
            <div className='container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-7 items-center min-h-screen h-full'>
                <div>
                    <h1 className='md:text-6xl text-4xl font-bold text-white'>
                        HughesNet Plans and Pricing for December, 2023
                    </h1>
                    <p className='md:text-2xl text-xl font-medium text-white my-5'>
                        Get Spectrum Internet ® today and enjoy the
                        lightning fast speeds for Web surfing, gaming,
                        streaming and more with no limits and overages.HughesNet Satellite Internet delivers fast speeds with multiple data options and keeps you connected no matter where you live.
                    </p>
                    <div className='flex flex-col gap-0 justify-between'>
                        <ul className='md:text-2xl text-xl font-medium text-white mb-5 grid gap-1'>
                            <li className='text-lg'>
                                Built-in WiFi
                            </li>
                            <li className='text-lg'>
                                Video data saver
                            </li>
                            <li className='text-lg'>
                                No hard data limits
                            </li>
                            <li className='text-lg'>
                                2 year price lock guarantee
                            </li>
                        </ul>
                        <div>
                            <p className='md:text-2xl text-xl font-medium text-white mb-2'>
                                Price Starting At
                            </p>
                            <p className='md:text-6xl text-4xl font-bold text-[#198cc2]'>
                                <sup className='text-lg'>$</sup>49<sub className='text-lg'>99/mo</sub>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
