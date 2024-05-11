"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import CarouselWithContent from "../../../layout/components/carousel"
import CarouselWithCards from "../../../layout/components/carousel-cards"
import Blogs from "../Blogs"
import VirtualAnalysis from "../VirtualAnalysis"
import NewIn from "../NewIn"
import BrandOffer from "../BrandOffer"
import BestSellers from "../BestSellers"

const Hero = () => {
  return (
    <div className="h-full w-full relative flex flex-col justify-center items-center">
        <CarouselWithContent />
        <VirtualAnalysis />
        <BestSellers/>
        <NewIn />
        <BrandOffer />
        <Blogs />
    </div>
  )
}

export default Hero
