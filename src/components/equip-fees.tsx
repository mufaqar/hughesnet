import Image from 'next/image'
import React from 'react'

export default function EquipFees() {
    return (
        <section className=''>
            <div className="container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="md:order-1 order-2 bg-red-900">
                    <Image src="/images/deals.jpg" alt="deals" width={910} height={610} className="w-full md:h-[770px] object-cover object-left" />
                </div>
                <div className="md:px-10 px-5 md:order-2 order-1">
                    <h2 className='md:text-3xl text-xl font-bold mb-5'>
                        HughesNet Internet Equipment fees, contracts, data caps & ETF's
                    </h2>
                    <p className="text-lg font-normal mb-5">
                        HughesNet customers are required to pay some fees on top of their plans base pricing. Here’s what you can expect to pay
                    </p>
                    <ul className="grid gap-2">
                        <li className="text-lg font-normal">
                            <strong>Equipment Fee:</strong> HughesNet charge $14.99 lease fee per month on all plans and $19.99 for all fusion plans. If you want to avoid the lease fee you can purchase your equipment for $349.99 on satellite plans and $449.99 for fusion plans.
                        </li>
                        <li className="text-lg font-normal">
                            <strong>Install Fee:</strong> All customers will have to schedule professional install as HughesNet does not offers self-install option. Currently. HughesNet is offering free professional installation nationwide on all plans.
                        </li>
                        <li className="text-lg font-normal">
                            <strong>Early Termination Fee:</strong> HughesNet requires 24 months contract. If you cancel your service within first 90 days you’ll pay $400 ETF. Thereafter, the fee decreases by $15 for each month of active service.
                        </li>
                        <li className="text-lg font-normal">
                            <strong>Data Caps:</strong> HughesNet internet plans comes with data caps of 15GB, 50GB, 100GB and 200GB. After you use your data, HughesNet will throttle your speed to 1-3 Mbps. If you want to stay connected at 25 Mbps, you’ll have to additional data. HughesNet data tokens price is $9 for 3GB, $15 for 5GB, $30 for 10GB and $75 for an additional 25GB of data.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
