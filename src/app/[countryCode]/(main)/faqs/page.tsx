import { Metadata } from "next"
import Accordion from "@modules/layout/components/accordion"

export const metadata: Metadata = {
    title: "FAQs",
    description:
        "FAQs.",
}

const Faq = () => {
    return (
        <section className="bg-background w-full py-12 flex justify-center gap-4">
            <div className="font-bold text-2xl flex flex-col gap-1 mt-14 w-[300px]">
                <button className="bg-white text-left py-3 px-2 focus:text-primary focus:border-b-2 border-primary">Product Information</button>
                <button className="bg-white text-left py-3 px-2 focus:text-primary focus:border-b-2 border-primary">Gifts</button>
                <button className="bg-white text-left py-3 px-2 focus:text-primary focus:border-b-2 border-primary">Career</button>
            </div>
            <div className="w-[912px]">
                <h3 className="font-bold text-3xl">FAQs</h3>
                <div className="bg-background">
                    <Accordion title="Does your company test on animals?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="Where can I buy Sheth Products?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="How Does Sheth conduct safety testing?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="How do I find the right foundation shade and formula for me?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="What does your foundation code mean (example 2w2 dawn)?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="How do I know my foundation intensity level and undertone?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="How do I determine the right skincare routine for me?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="What happens if the product I am looking for is discontinued?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="I’m looking for a specific makeup look. how do i learn more about shades and techniques that will work for me?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                    <Accordion title="Do you offer gift with purchase and special offers online?" answer="Sheth has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law." />
                </div>
            </div>
        </section>
    )
}

export default Faq