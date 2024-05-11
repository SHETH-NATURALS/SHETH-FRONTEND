import CarouselWithCards from "../../../layout/components/carousel-cards"

const BestSellers = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h3 className="font-semibold text-2xl my-12">Our Bestsellers</h3>
      <div className="w-[1224px]">
        <CarouselWithCards slides={4} />
      </div>
    </section>
  )
}

export default BestSellers
