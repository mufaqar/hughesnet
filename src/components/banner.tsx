import React from 'react'

export default function Banner() {
    return (
        <section className=''>
            <div className='container mx-auto md:px-20 px-3 py-32 bg-[url("/images/main.jpg")] bg-center bg-cover bg-no-repeat flex md:flex-row flex-col gap-7 items-center '>
                <div className='sm:w-2/4 w-full'>
                    <h1 className='sm:text-5xl text-4xl font-extrabold text-white capitalize Poppins'>
                        HughesNet Plans and Pricing for December, 2023
                    </h1>
                    <p className='text-xl font-normal text-white Poppins my-4'>
                        Get HughesNet Internet ® today and enjoy the lightning fast speeds
                    </p>
                    <h3 className='sm:text-[95px] text-7xl leading-none font-extrabold text-[#B772FD] Poppins'>
                        <sup className='text-3xl'>$</sup>24.99<sub className='text-lg'>/Month</sub>
                    </h3>
                </div>
            </div>
        </section>
    )
}
