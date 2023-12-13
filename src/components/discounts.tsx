import React from 'react'

export default function Discounts() {
    return (
        <section className='bg-[url("/images/discount.jpg")] bg-top bg-cover bg-no-repeat bg-blend-multiply bg-[#198cc2] py-28'>
            <div className='container mx-auto px-3'>
                <h2 className='md:text-3xl text-xl font-bold text-white text-center mb-5'>
                    HughesNet Internet Discounts
                </h2>
                <p className='text-base font-medium text-white text-center max-w-[900px] mx-auto'>
                    HughesNet participates in the Affordable Connectivity Program (ACP) to provide $30 discount per month ($75 on tribal lands) to all eligible participants on HughesNet Internet service through the Federal Communications Commission’s (FCC) ACP program. It requires participants to submit an application that demonstrates their eligibility
                </p>
            </div>
        </section>
    )
}
