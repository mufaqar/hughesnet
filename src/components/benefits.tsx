import React from 'react'
import { FaWifi } from "react-icons/fa6";

export default function Benefits({ title, content, icon }: any) {
    return (
        <div className='bg-white p-10 border hover:bg-gray-50'>
            <span>
                {icon}
            </span>
            <h4 className='text-2xl font-bold text-center my-4'>
                {title}
            </h4>
            <p className='text-base font-normal text-center'>
                {content}
            </p>
        </div>
    )
}
