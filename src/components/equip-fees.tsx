import Image from 'next/image'
import React from 'react'

export default function EquipFees() {
    return (
        <section className='py-16'>
            <div className="container mx-auto px-3 ">
                <h2 className='md:text-4xl text-3xl font-extrabold text-center Poppins max-w-[680px] mx-auto mb-10'>
                    HughesNet Internet Equipment fees, contracts, data caps & ETF's
                </h2>
                <p className="text-lg font-medium text-gray-500 text-center Poppins max-w-[548px] mx-auto mb-5">
                    HughesNet customers are required to pay some fees on top of their plans base pricing. Here’s what you can expect to pay
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="bg-violet-50 p-5 md:h-[300px] h-full py-8">
                        <h3 className='md:text-2xl text-xl font-bold text-gray-800 Poppins mb-3'>
                            Equipment Fee:
                        </h3>
                        <p className='text-base font-medium text-gray-500 Poppins'>
                            HughesNet charge $14.99 lease fee per month on all plans and $19.99 for all fusion plans. If you want to avoid the lease fee you can purchase your equipment for $349.99 on satellite plans and $449.99 for fusion plans.
                        </p>
                    </div>
                    <div className="bg-violet-100 p-5 md:h-[300px] h-full py-8">
                        <h3 className='md:text-2xl text-xl font-bold text-gray-800 Poppins mb-3'>
                            Install Fee:
                        </h3>
                        <p className='text-base font-medium text-gray-500 Poppins'>
                            All customers will have to schedule professional install as HughesNet does not offers self-install option. Currently. HughesNet is offering free professional installation nationwide on all plans.
                        </p>
                    </div>
                    <div className="md:bg-violet-100 bg-violet-50 p-5 md:h-[300px] h-full py-8">
                        <h3 className='md:text-2xl text-xl font-bold text-gray-800 Poppins mb-3'>
                            Early Termination Fee:
                        </h3>
                        <p className='text-base font-medium text-gray-500 Poppins'>
                            HughesNet requires 24 months contract. If you cancel your service within first 90 days you’ll pay $400 ETF. Thereafter, the fee decreases by $15 for each month of active service.
                        </p>
                    </div>
                    <div className="md:bg-violet-50 bg-violet-100 p-5 md:h-[300px] h-full py-8">
                        <h3 className='md:text-2xl text-xl font-bold text-gray-800 Poppins mb-3'>
                            Data Caps:
                        </h3>
                        <p className='text-base font-medium text-gray-500 Poppins'>
                            HughesNet internet plans comes with data caps of 15GB, 50GB, 100GB and 200GB. After you use your data, HughesNet will throttle your speed to 1-3 Mbps. If you want to stay connected at 25 Mbps, you’ll have to additional data. HughesNet data tokens price is $9 for 3GB, $15 for 5GB, $30 for 10GB and $75 for an additional 25GB of data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
