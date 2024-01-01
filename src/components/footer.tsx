import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

export default function Footer() {
    return (
        <section className='bg-[#f8f8f8]'>
        <div className='container mx-auto px-4 py-6'>
            <div className='lg:flex justify-between items-center '>
                <div>
                    <img src="images/logo.png" alt="" />
                </div>
                <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className='lg:flex divide-x-2 space-x-2'>
                    <Link href={'/'} className='text-[12px] font-[sansnormal] list-none hover:text-[#a6a6a6] text-[#525252] '>Privacy Policy </Link>
                    <Link href={'/'}  className='text-[12px] font-[sansnormal]   list-none hover:text-[#a6a6a6] text-[#525252] pl-2'>  Terms and Conditions</Link>
                    <Link href={'/'}  className='text-[12px] font-[sansnormal]   list-none hover:text-[#a6a6a6] text-[#525252] pl-2'>Accessibility</Link>
                    <Link href={'/'}  className='text-[12px] font-[sansnormal]  list-none hover:text-[#a6a6a6] text-[#525252] pl-2'>  Do Not Sell or Share My Personal Information</Link>
                    <Link href={'/'}  className='text-[12px] font-[sansnormal]   list-none hover:text-[#a6a6a6] text-[#525252] pl-2'> Limit the Use of My Sensitive Information</Link>
                </motion.div>
                        
                        </div>
                         <p className='text-[12px] font-[sansnormal]   list-none hover:text-[#a6a6a6] text-[#525252] text-end'>
                            Copyright © 2023 Cablemovers.net. All rights reserved.
                        </p>
        </div>
        </section>
    )
}
