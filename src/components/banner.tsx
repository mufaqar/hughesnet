import React from 'react'
import Offer from './offer'

export default function Banner() {
    return (
        <section className='md:px-20 py-32 bg-[url("/images/promo-bg.png")] bg-center bg-cover bg-no-repeat'>
            <div className='container mx-auto px-3'>
                <div className='sm:w-7/12 w-full'>
                    <h1 className='sm:text-[45px] text-4xl font-bold text-black capitalize Poppins'>
                    Get High-Speed Internet and Straightforward Pricing with Viasat
                    </h1>
                  <Offer />
                </div>
            </div>
        </section>
    )
}
