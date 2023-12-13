import React from 'react'
import Planbox from './planbox'

export default function Pricing_Sec() {
    return (
        <section className='py-16 bg-[#1D1D1D]'>
            <div className='container mx-auto px-3 '>
                <h2 className='md:text-3xl text-xl font-bold text-white text-center mb-10'>
                    HughesNet Internet Plans
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                    <Planbox />
                    <Planbox />
                    <Planbox />
                </div>
                <p className='text-sm font-normal text-white mt-5'>
                *DISCLAIMER: Monthly Fee reflects the applied $5 savings for ACH enrollment. Enroll before the 2nd billing cycle for continued savings. Service plans require a 24-month commitment. Equipment Lease or Purchase fees extra.
                </p>
            </div>
        </section>
    )
}
