import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ data }: any) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(index)) {
        return prevOpenSections.filter((i) => i !== index);
      } else {
        return [...prevOpenSections, index];
      }
    });
  };

  return (
    <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center py-10">Frequently Asked Questions</h1>
    <div className="relative z-20  overflow-hidden bg-white pb-12  dark:bg-dark lg:pb-[90px] ">
      <div className="lg:grid lg:grid-cols-2 gap-12">
        {data.map((item: any, index: number) => (
          <div key={index} className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-400 text-slate-700 rounded-t-1 group text-dark-500"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="font-bold lg:text-xl text-black">{item.question}</h1>
                {openSections.includes(index) ? (
                  <AiOutlineMinus className="absolute right-0  font-bold text-3xl text-primary" />
                ) : (
                  <AiOutlinePlus className="absolute right-0  font-bold text-3xl text-primary" />
                )}
              </button>
            </h6>



            <div
              data-collapse={`collapse-${index}`}
              className={`${
                openSections.includes(index) ? "h-auto" : "h-0 overflow-hidden"
              } transition duration-1000 ease-in-out transform`}
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

// Example data
const accordionData = [
  {
    question: "What is Viasat Internet?",
    answer:
      "Viasat Internet is residential satellite internet service. We're dedicated to bringing reliable, high-speed connectivity to the hardest to reach people, places, and things — including families in rural or remote areas where cable companies don't go.",
  },
  {
    question: "Where is Viasat Internet available?",
    answer:
      "Viasat Internet is available in continental U.S and covers much of the U.S. population in remote and rural areas where other internet companies offer slow service, or no service at all.",
  },
  {
    question: "How does satellite technology work?",
    answer:
      "You click on your favorite website using your laptop or mobile device. Your request goes to your Viasat modem, then through a short cable to the dish outside your home. The dish installed at your home beams your request up to our satellite. Our satellite sends your website request down to a gateway station connected to our ground network. The station relays your request to your favorite website. The website delivers the information you requested back to the station, which sends it up to our satellite to be sent directly to you.",
  },
  {
    question: "Who is Viasat Internet best for?",
    answer:
      "Viasat Internet is likely best for people who have trouble getting fast internet because they live in remote or rural areas where cable or fiber companies don't go. It's great for essential, everyday online activities like shopping, banking, education, and staying in touch with family.",
  },
];

const App = () => {
  return <Accordion data={accordionData} />;
};

export default App;
