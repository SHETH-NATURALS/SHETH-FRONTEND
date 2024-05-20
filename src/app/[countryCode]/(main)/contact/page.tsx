import { Metadata } from "next"
import { Input, Select, Option } from "../../../../assets/MaterialAssets";

// Icons Import
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const metadata: Metadata = {
    title: "CONTACT US",
    description:
        "Contect Us.",
}

const Contact = () => {
    return (
        <section className="bg-background flex flex-col items-center py-8">
            <div className="w-[1224px] text-xl">
                <h2 className="font-bold text-4xl my-6">Contact Us</h2>
                <p className="my-3">Sheth Client Service Center Is Happy to Help You With Any Questions You May Have Regarding Our Products And Corporate Information.</p>
                <p>Contact Us by Phone:  1-802-526-2463  Monday to Friday, 9am to 9pm, and Saturday-Sunday, 9am to 6pm Or </p>
                <p>Fill in The Form Below to Send Us An Email.</p>
                <p className="text-lg text-[#606060] my-4">Please fill in this form to send us your inquiry. We&apos;ll be more than happy to help and will reply to you as soon as possible.</p>
            </div>
            <div className="bg-white w-[1224px] my-7 capitalize py-6 px-24">
                <h3 className="font-bold text-primary text-2xl flex items-center gap-3"><EmailOutlinedIcon />write us</h3>
                <form className="mt-8 flex flex-col">
                    <div className="w-full flex justify-between flex-wrap border-b border-gray py-5">
                        <h3 className="font-bold text-xl w-full my-4">Your information</h3>
                        <div className="w-[496px] my-2 mr-32">
                            <Select variant="standard" label="Title">
                                <Option>Mr.</Option>
                                <Option>Mrs.</Option>
                                <Option>Ms.</Option>
                                <Option>Dr.</Option>
                                <Option>Prof.</Option>
                            </Select>
                        </div>
                        <div className="w-[496px] my-2">
                            <Input crossOrigin={{}} labelProps={{ className: "after:-bottom-3.5" }} variant="standard" label="First Name" placeholder="First Name" />
                        </div>
                        <div className="w-[496px] my-2">
                            <Input crossOrigin={{}} labelProps={{ className: "after:-bottom-3.5" }} variant="standard" label="Last Name" placeholder="Last Name" />
                        </div>
                        <div className="w-[496px] my-2">
                            <Select variant="standard" label="Country">
                                <Option>Kenya</Option>
                            </Select>
                        </div>
                        <div className="w-[496px] my-2">
                            <Select variant="standard" label="Language">
                                <Option>English</Option>
                                <Option>Kiswahili</Option>
                            </Select>
                        </div>
                        <div className="w-[496px] my-2">
                            <Input crossOrigin={{}} labelProps={{ className: "after:-bottom-3.5" }} variant="standard" label="Email Address" placeholder="Email Address" />
                        </div>
                        <div className="w-[496px] my-2">
                            <Input crossOrigin={{}} labelProps={{ className: "after:-bottom-3.5" }} variant="standard" label="Phone Number" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="w-full flex justify-between flex-wrap">
                        <h3 className="font-bold text-xl w-full my-4">Your information</h3>
                        <div>
                            <input type="text" className="w-full text-2xl focus:outline-none" placeholder="Subject" />
                            <div className="flex gap-4 my-2">
                                <button className="py-2 px-5 border border-gray focus:border-primary focus:text-primary focus:bg-primary/20" type="button">Brunches</button>
                                <button className="py-2 px-5 border border-gray focus:border-primary focus:text-primary focus:bg-primary/20" type="button">Skin Type</button>
                                <button className="py-2 px-5 border border-gray focus:border-primary focus:text-primary focus:bg-primary/20" type="button">Special Offer And Promotion</button>
                                <button className="py-2 px-5 border border-gray focus:border-primary focus:text-primary focus:bg-primary/20" type="button">Returns And Refunds</button>
                                <button className="py-2 px-5 border border-gray focus:border-primary focus:text-primary focus:bg-primary/20" type="button">Product And Stock</button>
                            </div>
                        </div>
                        <textarea className="w-full h-[120px] text-2xl focus:outline-none border-b border-black" placeholder="Your Text" />
                        <label className="my-3 flex gap-2 w-full">
                            <input type="checkbox" />
                            <span>I Have Read And Understood The Contact Us Policy.</span>
                        </label>
                    </div>
                    <button type="button" className="w-[128px] text-xl text-primary font-primary border-2 border-primary px-8 py-2 self-end">Send</button>
                </form>
            </div>
            <div className="w-[1224px] h-[230px] flex justify-between">
                <div className="w-[392px] h-full bg-white px-5 py-2 capitalize">
                    <h3 className="uppercase font-bold text-primary my-3 text-2xl flex gap-4 items-center"><ChatOutlinedIcon />chat online</h3>
                    <p className="font-bold my-6">Looking for personalized advice?</p>
                    <p className="text-[#606060] text-sm my-3">The option to chat becomes active when one of our Client Advisors is available.</p>
                    <button className="w-full border-2 border-primary text-primary py-2 hover:border-primary-750 hover:text-primary-750">Ask your question</button>
                </div>
                <div className="w-[392px] h-full bg-white px-5 py-2 capitalize">
                    <h3 className="uppercase font-bold text-primary my-3 text-2xl flex gap-4 items-center"><LocalPhoneOutlinedIcon />call us</h3>
                    <p className="font-bold my-6">Our Client Advisors would be delighted to assist you.
                        <br />You may contact us at <span className="text-primary">1-802-526-2463</span></p>
                    <p className="text-[#606060] text-sm my-3">Service available from Monday to Friday from 10 am to 8 pm and Saturday from 10 am to 6 pm</p>
                </div>
                <div className="w-[392px] h-full bg-white px-5 py-2 capitalize">
                    <h3 className="uppercase font-bold text-primary my-3 text-2xl flex gap-4 items-center"><ChatBubbleOutlineOutlinedIcon />instant message</h3>
                    <p className="font-bold my-5">Would you like to contact us on an instant messaging app?</p>
                    <p className="text-[#606060] text-sm my-3">Our Client Advisors will be delighted to assist you</p>
                    <button className="w-full border-2 border-primary text-primary py-2 hover:border-primary-750 hover:text-primary-750">Ask your question</button>
                </div>
            </div>
        </section>
    )
}

export default Contact