
import Benefits from "@/components/benefits";
import Deals from "@/components/deals";
import Discounts from "@/components/discounts";
import EquipFees from "@/components/equip-fees";
import Services from "@/components/services";
import Offer from "@/components/offer";
import Planbox from "@/components/planbox";
import Accordion from '@/components/accordion'
import WhyChoose from "@/components/why-choose";
import Image from "next/image";
import { FaWifi } from "react-icons/fa6";
import SeoMeta from "@/components/seo";


export default function Home() {
  return (
    <>
      <SeoMeta title="HughesNet " description="HughesNet " url="https://hughes-cable.vercel.app" />
      <Offer />
      <Services />
      <Planbox />
      <WhyChoose />
      <Discounts />
      <Deals />
      <EquipFees />
      <Accordion />

    </>
  )
}
