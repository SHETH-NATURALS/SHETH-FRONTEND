import CarouselWithCards from "../../../layout/components/carousel-cards"

const NewIn = () => {
  return (
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
          <p>
            Declare War On Acne! Get Our Package Today For A Smooth And Flawless
            Skin.
          </p>
        </div>
        <div className="w-1/2">
          <CarouselWithCards slides={2} />
        </div>
      </div>
    </section>
  )
}

export default NewIn
