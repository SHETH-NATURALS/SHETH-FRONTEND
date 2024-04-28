"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import CarouselWithContent from "../../../layout/components/carousel"

const Hero = () => {
  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col justify-center items-center">
        <CarouselWithContent/>
        <section className="bg-background w-full flex flex-col items-center gap-16 py-16">
          <h3 className="font-semibold text-2xl my-12">Virtual Analysis</h3>
          <div className="w-[1224px] h-[281px] bg-primary"></div>
          <div className="w-[1224px] h-[281px] bg-primary"></div>
          <h3 className="font-semibold text-2xl my-12">Our Bestsellers</h3>
        </section>
      </div>
    </div>
  )
}

export default Hero
