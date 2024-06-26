"use client"
import { useState } from "react";

interface AccordionProps {
    title: string,
    answer: string
}

const Accordion = ({ title, answer }: AccordionProps) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="p-3 my-2 bg-white">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className={`flex justify-between items-center py-2 w-full font-bold text-2xl ${accordionOpen ? "text-primary": "text-black" }`}
            >
                <span className="text-left">{title}</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className={`${accordionOpen ? "fill-primary": "fill-black"} shrink-0 ml-8`}
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden text-xl">{answer}</div>
            </div>
        </div>
    );
};

export default Accordion;