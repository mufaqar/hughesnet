import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import Deals from "@/components/deals";
import Discounts from "@/components/discounts";
import EquipFees from "@/components/equip-fees";
import Pricing_Sec from "@/components/pricing-sec";
import WhyChoose from "@/components/why-choose";
import Image from "next/image";
import { FaWifi } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <Banner />
      <section className='py-16'>
        <div className="container mx-auto px-3 ">
          <h2 className='md:text-4xl text-3xl font-extrabold text-center Poppins max-w-[508px] mx-auto mb-16'>
            Switch to HughesNet And Get Benefits You’ll Love
          </h2>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="Bonus Zone"
              content="50 GB/mo. of additional data during off-peak hours (2am-8am)."
            />
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="FREE Install"
              content="To ensure optimal service, HughesNet provides free professional installation on most plans with credit qualification."
            />
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="No Hard Data Limits"
              content="If you exceed your plan data, we won't cut you off or charge you more instead you’ll stay connected at reduced speed."
            />
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="Video Data Saver"
              content="HughesNet automatically adjust data rates for streaming video so you can watch more and use less."
            />
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="Nationwide Coverage"
              content="You can get HughesNet satellite internet anywhere in the US. All you need is a clear view of the Southern sky."
            />
            <Benefits
              icon={<FaWifi className="text-3xl mx-auto mb-3" />}
              title="24/7 Customer Support"
              content="HughesNet offers customer support around the clock to assist with technical issues, inquiries, and troubleshooting."
            />
          </div>
        </div>
      </section>
      <Pricing_Sec />
      <WhyChoose />
      <Discounts />
      <Deals />
      <EquipFees />
    </>
  )
}
