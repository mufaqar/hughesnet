import React from 'react'
import Planbox from './planbox'

export default function Pricing_Sec() {
    return (
        <section className='py-16 bg-violet-50'>
            <div className='container mx-auto px-3 '>
                <h2 className='md:text-4xl text-3xl font-extrabold text-center Poppins max-w-[508px] mx-auto mb-10'>
                    HughesNet Internet Plans
                </h2>
                <div className='grid md:grid-cols-1 grid-cols-1 gap-7'>
                    <Planbox />
                    <Planbox />
                    <Planbox />
                </div>
                <p className='text-sm leading-5 font-normal text-gray-500 Poppins mt-5'>
                *DISCLAIMER: Monthly Fee reflects the applied $5 savings for ACH enrollment. Enroll before the 2nd billing cycle for continued savings. Service plans require a 24-month commitment. Equipment Lease or Purchase fees extra.
                </p>
            </div>
        </section>
    )
}
