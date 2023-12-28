import Image from 'next/image'
import React from 'react'

function Offer() {
    return (
        <div className='relative bg-white pt-10 px-7 pb-4 rounded-[8px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]'>
            <div className='absolute -top-3 -left-4 flex items-center justify-center gap-3 bg-gradient-to-r from-primary bg-[#44b3a4] py-2 w-[248px] rounded-[4px] shadow-[0_3px_6px_0px_rgba(0,0,0,0.16)]'>
                <Image src="/images/promooffer.svg" alt='promooffer' width={26} height={26} />
                <p className='text-sm font-medium text-white'>
                    Special Offer
                </p>
            </div>
            <div>
                <p className='text-base font-bold text-black'>
                    Sign up and get up to
                </p>
                <h2 className='sm:text-[46px] text-4xl font-bold text-primary underline'>
                    $300 OFF
                </h2>
                <p className='text-base leading-3 font-bold text-black'>
                    on select plans <br />
                    in select areas
                </p>
            </div>
        </div>
    )
}

export default Offer