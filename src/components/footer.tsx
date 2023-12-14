import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowRightLong, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer>
            <div className='py-16 bg-gray-800'>
                <div className="container mx-auto px-3 grid md:grid-cols-4 grid-cols-1 gap-7">
                    <div>
                        <Link href="#" className="inline-block">
                            <Image
                                src={"/images/logo.png"}
                                width={254}
                                height={56}
                                alt="logo"
                            />
                        </Link>
                        <p className='text-base font-normal text-white/80 my-5'>
                            Lorem Ipsum is simply is dumi omy is text dummy text.
                        </p>
                        <ul className='flex flex-wrap gap-1'>
                            <li>
                                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-600 hover:bg-violet-700 text-white  rounded-[5px]'>
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-600 hover:bg-violet-700 text-white  rounded-[5px]'>
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-600 hover:bg-violet-700 text-white  rounded-[5px]'>
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-600 hover:bg-violet-700 text-white  rounded-[5px]'>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex w-[46px] h-[46px] justify-center items-center bg-gray-600 hover:bg-violet-700 text-white  rounded-[5px]'>
                                    <FaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='text-2xl font-semibold text-white title_underline'>
                            Our Courses
                        </h6>
                        <ul className='flex flex-col gap-4 mt-5'>
                            <li>
                                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-violet-700 items-center'>
                                    <FaArrowRightLong /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-violet-700 items-center'>
                                    <FaArrowRightLong />Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-violet-700 items-center'>
                                    <FaArrowRightLong />Our Clients
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='flex gap-2 text-base text-white/80 hover:text-violet-700 items-center'>
                                    <FaArrowRightLong /> Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='text-2xl font-semibold text-white title_underline'>
                            Contact Us
                        </h6>
                        <ul className='flex flex-col gap-4 mt-5'>
                            <li className='flex gap-2 text-base text-white/80 items-center'>
                                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-600 text-violet-700  rounded-[5px]'>
                                    <FaLocationDot />
                                </span>Lorem Ipsum is simply is dumi omy is text dummy text.
                            </li>
                            <li className='flex gap-2 text-base text-white/80 items-center'>
                                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-600 text-violet-700  rounded-[5px]'>
                                    <FaPhone />
                                </span>
                                <span><Link href="#"> + 012 34 56 78</Link>
                                </span>
                            </li>
                            <li className='flex gap-2 text-base text-white/80 items-center'>
                                <span className='flex min-w-[30px] min-h-[30px] justify-center items-center bg-gray-600 text-violet-700  rounded-[5px]'>
                                    <FaEnvelope />
                                </span> <Link href="#"> info@cablemover.net</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='text-2xl font-semibold text-white title_underline'>
                            Newsletter
                        </h6>
                        <p className='text-base font-normal text-white/80 my-5'>
                            Sign up to get update news about us
                        </p>
                        <form>
                            <div className="w-full">
                                <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                                <input
                                    className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-4 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                                    type="text"
                                    id='name'
                                    placeholder="Email" />
                            </div>
                            <button type='submit' className="text-base font-semibold text-white bg-violet-700 hover:bg-white hover:text-violet-700 px-4 py-4 rounded-[5px] w-full mt-4">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='py-7 bg-gray-600'>
                <div className='container mx-auto px-3'>
                    <div>
                        <p className='text-base font-normal text-white/80 text-center'>
                            Copyright © 2023 Cablemovers.net. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
