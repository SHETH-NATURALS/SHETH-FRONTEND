import CarouselWithContent from "../../../layout/components/carousel"
import Blogs from "../Blogs"
import VirtualAnalysis from "../VirtualAnalysis"
import BrandOffer from "../BrandOffer"
import React from "react"
import Image from "next/image"
type childenProp = {
  children: React.ReactNode
}

const Hero = ({ children }: childenProp) => {
  return (
    <div className="h-full w-full relative flex flex-col justify-center items-center">
      <CarouselWithContent>
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
            width={2560}
            height={281}
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-end bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 my-28">
              <h1 className="text-white font-bold m-8 text-3xl md:text-4xl lg:text-5xl">
                Unlock Your Natural Glow!
              </h1>
              <div className="flex justify-center gap-8">
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Shop Now
                </button>
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
            width={2560}
            height={281}
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-end bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 my-28">
              <h1 className="text-white font-bold m-8 text-3xl md:text-4xl lg:text-5xl">
                Unlock Your Natural Glow!
              </h1>
              <div className="flex justify-center gap-8">
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Shop Now
                </button>
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
            width={2560}
            height={281}
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-end bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 my-28">
              <h1 className="text-white font-bold m-8 text-3xl md:text-4xl lg:text-5xl">
                Unlock Your Natural Glow!
              </h1>
              <div className="flex justify-center gap-8">
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Shop Now
                </button>
                <button className="text-white uppercase font-semibold px-8 py-2 border border-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </CarouselWithContent>
      <VirtualAnalysis />
      {children}
      <BrandOffer />
      <Blogs />
    </div>
  )
}

export default Hero
