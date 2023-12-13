import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa6";

export default function Header() {
    return (
        <header className='bg-white h-auto shadow-md py-4 sticky top-0'>
            <div className='container mx-auto px-3 flex flex-row gap-7 justify-between items-center'>
                <div>
                    <Link href="/">
                        <Image src="/images/HughesNet.jpg" alt='HughesNet' width={140} height={50} />
                    </Link>
                </div>
                <div>
                    <h5 className='text-base font-medium text-end'>
                        Call Anytime
                    </h5>
                    <Link href="#" className='sm:text-2xl text-base text-[#198cc2] flex gap-2 items-center'>
                        <FaPhone /> 833-592-0098
                    </Link>
                </div>
            </div>
        </header>
    )
}
