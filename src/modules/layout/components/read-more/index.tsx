"use client"
import { ReactNode, useState } from "react";

interface ReadmoreProps {
    id:string,
    title: string,
    children: ReactNode
}

const Readmore = ({ id,title, children }: ReadmoreProps) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const text = children
    let truncatedText: string | ReactNode = text;

    if (typeof truncatedText === 'string') {
        truncatedText = isReadMore ? text : truncatedText.slice(0, 100);
    }

    return (
        <div id={id} className="p-3 my-2 bg-white">
            <h2 className={`font-bold text-left text-2xl ${isReadMore ? "text-primary": "text-black" }`}>{title}</h2>
            <p className="whitespace-pre-wrap">{truncatedText}</p>
            <button
                onClick={() => setIsReadMore(!isReadMore)}
                className={`flex flex-col py-2 w-full font-bold text-lg text-primary hover:text-primary-700`}
            >
                {isReadMore ? "Read Less":"Read More"}
            </button>
        </div>
    );
};

export default Readmore;