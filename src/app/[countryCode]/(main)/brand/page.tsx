import { Metadata } from "next"
import Image from "next/image"
export const metadata: Metadata = {
    title: "OUR BRAND",
    description:
        "Our Brand.",
}

const Brand = () => {
    return (
        <section>
            <section className="flex justify-center items-center text-white h-[705px] w-full bg-primary-700">
                <div className="w-[1016px] py-5">
                    <h2 className="font-semibold text-4xl">Our Brand</h2>
                    <div className="w-full h-[482px] my-3">
                        <Image
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                            width={1016}
                            height={482}
                        />
                    </div>
                    <p className="font-extralight capitalize tracking-wide">We believe that beauty thrives in diversity and discovery. Our purpose is to expand the way the world sees beauty by empowering the ExtraOrdinary in each of us.</p>
                </div>
            </section>
            <section className="bg-background flex flex-col py-16 items-center">
                <div className="w-[1016px] flex flex-wrap justify-between pb-8">
                    <h3 className="font-bold text-2xl w-full my-4">Heritage</h3>
                    <div className="w-5/12 leading-8 capitalize text-lg">
                        <p>From the very beginning, our founder believed that <span className="text-primary">Sheth</span> could not only disrupt beauty retail, but that it would have a positive impact on the world.
                            Our story began in 2015 when our founder, Jane, realized that there were very few cosmetic brands that catered to her skin type. She started experimenting with different ingredients and formulations in her kitchen, and soon her friends and family were raving about her products. Encouraged by their feedback, Jane decided to turn her hobby into a business.
                            Today, our team of experts works hard to create cosmetics that are not only effective but also sustainable and ethical.</p>
                    </div>
                    <div className="w-3/6">
                        <Image
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                            width={1016}
                            height={482}
                        />
                    </div>
                </div>
                <div className="w-[1016px] flex flex-col capitalize gap-5 text-lg">
                    <h3 className="font-bold text-2xl w-full">Ethical And Sustainable Beauty</h3>
                    <p>At Sheth cosmetic company , we believe that beauty should never come at the expense of animals, the environment, or our customers&apos; health. That&apos;s why we&apos;ve made sure that our products are vegan, curl-free, gluten-free, and packaged in recycled materials</p>
                    <h3 className="font-bold text-xl w-full">Vegan, Curl-Free</h3>
                    <p>When we say our products are vegan, we mean that we never use any animal-derived ingredients or byproducts in our formulations. We believe that cruelty-free beauty is the way of the future, and we&apos;re proud to be a part of that movement.</p>
                    <h3 className="font-bold text-xl w-full">Gluten-Free Products</h3>
                    <p>For those with sensitivities or allergies to gluten, we&apos;ve made sure that our products are 100% gluten-free. You can use our products with confidence, knowing that they are safe and gentle on your skin.</p>
                    <h3 className="font-bold text-xl w-full">Recycled Packaging</h3>
                    <p>Finally, we&apos;re committed to doing our part for the environment, which is why we&apos;ve packaged our products in recycled materials. By choosing our products, you&apos;re making a positive impact on the planet and reducing your environmental footprint.
                        We&apos;re dedicated to providing you with high-quality, ethically-sourced beauty solutions that you can feel good about using.</p>
                </div>
                <div className="w-[1016px] h-[402px] flex items-center capitalize gap-3 my-6">
                    <div className="w-[600px] h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                            width={1016}
                            height={482}
                        />
                    </div>
                    <div className="w-5/12 text-lg">
                        <h3 className="font-bold text-2xl w-full my-4">Diversity Equity & Inclusion</h3>
                        <p>We believe that beauty is a form of self-expression and should be inclusive of all cultures and traditions, which is why we offer products that are inspired by diverse beauty rituals from around the world.</p>
                    </div>
                </div>
                <div className="w-[1016px] flex flex-col capitalize text-lg">
                    <h3 className="font-bold text-2xl w-full my-4">Our Commitments</h3>
                    <p>We believe that everyone deserves access to safe, effective, and ethical cosmetic products, regardless of their lifestyle or dietary restrictions. Our commitment to these values extends beyond our product offerings to include sustainable and eco-friendly manufacturing processes, ethical sourcing of ingredients, and giving back to the communities we serve. At Sheth , we are proud to be a leader in the ethical and sustainable beauty industry, and we look forward to continuing to innovate and push boundaries in our commitment to providing our customers with the best products and experiences possible.</p>
                </div>
                <section className="w-full h-[575px] bg-[#0C0002] my-7"></section>
                <div className="w-[1016px] flex flex-col capitalize text-lg">
                    <h3 className="font-bold text-2xl w-full my-4">Global branches & satisfied customers </h3>
                    <p>At Sheth, we are proud to have a global presence with branches in multiple countries. Our mission is to provide high-quality cosmetic products that cater to a diverse range of skin types and tones, while also delivering exceptional customer service. Our team members are trained to listen to customers&apos; concerns and preferences, and they use their expertise to recommend products that are tailored to their individual needs. In this section, we will provide an overview of our company&apos;s branches and the unique services they offer, as well as share some of the positive feedback we have received from our satisfied customers.</p>
                </div>
            </section>
        </section>
    )
}

export default Brand