"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import CarouselWithContent from "../../../layout/components/carousel"
import CarouselWithCards from "../../../layout/components/carousel-cards"

const Hero = () => {
  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col justify-center items-center">
        <CarouselWithContent />
        <section className="bg-background w-full flex flex-col items-center gap-16 py-16">
          <h3 className="font-semibold text-2xl my-12">Virtual Analysis</h3>
          <div className="w-[1224px] h-[281px] bg-primary flex text-white">
            <div className="w-1/2 pl-24 py-8 pr-3">
              <h3 className="font-semibold text-2xl">NEW Virtual Skincare Analysis</h3>
              <p className="font-light">Looking For A Full Skincare Routine? Our NEW Virtual Skincare Analysis Tool Evaluates Your Skin And Provides The Most Personalized Recommendations.</p>
              <p className="font-semibold">Scan With Your Phone To Get Started</p>
              <p className="font-light">Or</p>
              <button className="p-3 border-2 border-white text-white bg-transparent hover:border-gray-400 hover:text-gray-400">Answer A Few Questions</button>
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-[1224px] h-[281px] bg-primary flex text-white">
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 pl-24 py-8 pr-3">
              <h3 className="font-semibold text-2xl">NEW Virtual Haircare Analysis</h3>
              <p className="font-light">Looking For A Full Skincare Routine? Our NEW Virtual Skincare Analysis Tool Evaluates Your Skin And Provides The Most Personalized Recommendations.</p>
              <p className="font-semibold">Scan With Your Phone To Get Started</p>
              <p className="font-light">Or</p>
              <button className="p-3 border-2 border-white text-white bg-transparent hover:border-gray-400 hover:text-gray-400">Answer A Few Questions</button>
            </div>
          </div>
          <h3 className="font-semibold text-2xl my-12">Our Bestsellers</h3>
          <div className="w-[1224px]"><CarouselWithCards slides={4} /></div>
        </section>
        <section className="bg-primary w-full flex flex-col items-center py-16">
          <h3 className="font-semibold text-2xl my-12 text-white">New In</h3>
          <div className="w-[1224px] flex">
            <div className="w-1/2 text-white">
              <div className="w-full h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-2xl my-5">Anti-Acne Package</h3>
              <p>Declare War On Acne! Get Our Package Today For A Smooth And Flawless Skin.</p>
            </div>
            <div className="w-1/2"><CarouselWithCards slides={2} /></div>
          </div>
        </section>
        <section className="bg-background w-full flex flex-col items-center gap-16 py-16">
          <div className="w-full h-[382px] flex bg-primary-25 justify-center">
            <div className="w-[1224px] flex justify-between items-center">
              <div className="w-[575px] h-full">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-[575px] relative">
                <h3 className="font-semibold text-black text-2xl">Special Offers</h3>
                <h2 className="font-semibold text-primary text-4xl my-3">Save Up To 50%</h2>
                <p>Mother's Day Is Coming!</p>
                <p>For Everything She's Given You, It's Time To Give Back. Shower Her With Love, Happiness And The Best Of Sheth.</p>
                <p className="text-primary font-bold my-2">Visit Your Local Sheth Store To Find Out More About Our Special Offers On Make Up And Skincare Products</p>
                <button className="absolute right-0 bg-primary hover:bg-primary/70 text-white px-7 py-2">Find Branches</button>
              </div>
            </div>
          </div>
          <div className="w-[1224px] h-[281px] bg-primary flex text-white">
            <div className="w-1/2 pl-24 self-center pr-3">
              <h3 className="font-semibold text-2xl my-3">Our Brand</h3>
              <p className="font-light">Looking For A Full Skincare Routine? Our NEW Virtual Skincare Analysis Tool Evaluates Your Skin And Provides The Most Personalized Recommendations.</p>
              <button className="p-3 border-2 text-sm px-7 border-white text-white bg-transparent hover:border-gray-400 hover:text-gray-400">Discover More</button>
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
