import React from 'react'

export default function Benefits({ title, content, icon }: any) {
    return (
        <div className='px-4 mb-6 cursor-pointer '>
            <div className='relative rounded-2xl border bg-white h-[220px] group'>
                <div className='bg-violet-700 absolute top-0 left-0 right-0 h-0 group-hover:h-full delay-150 duration-300 ease-in-out w-full rounded-2xl z-auto'></div>
                <div className='h-full w-full py-9 px-7 relative z-[1] '>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] mx-auto rounded-full bg-white p-3 border  text-violet-700 text-6xl group-hover:text-white group-hover:bg-violet-700 flex items-center justify-center delay-150 duration-300 ease-in-out'>
                        {icon}
                    </div>
                    <h3 className='text-xl font-bold text-center Poppins text-gray-800 group-hover:text-white mt-4 delay-150 duration-300 ease-in-out'>
                        {title}
                    </h3>
                    <p className='text-base font-normal text-center Poppins text-gray-500 group-hover:text-white max-w-[300px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
