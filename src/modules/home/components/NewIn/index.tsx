import { Product } from "@medusajs/product"
import CarouselWithCards from "../../../layout/components/carousel-cards"
import { ProductCollectionWithPreviews } from "types/global"
import { Region } from "@medusajs/medusa"
import { Slide } from "@modules/layout/components/carousel-cards/client-export"
import ProductCard from "@modules/layout/components/product-card"
import Image from "next/image"
interface NewInProps {
  collections: ProductCollectionWithPreviews[]
  region: Region
}

const NewInHelper = ({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) => {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <section className="bg-primary w-full flex flex-col items-center py-16">
      <h3 className="font-semibold text-2xl my-12 text-white">New In</h3>
      <div className="w-[1224px] flex">
        <div className="w-1/2 text-white">
          <div className="w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
              width={2560}
              height={281}
            />
          </div>
          <h3 className="font-semibold text-2xl my-5">Anti-Acne Package</h3>
          <p>
            Declare War On Acne! Get Our Package Today For A Smooth And Flawless
            Skin.
          </p>
        </div>
        <div className="w-1/2">
          <CarouselWithCards slides={2} length={products && products.length}>
            {products &&
              products.map((product, index) => (
                <Slide index={index} key={product.id}>
                  <ProductCard
                    productPreview={product}
                    region={region}
                    isFeatured
                  />
                </Slide>
              ))}
          </CarouselWithCards>
        </div>
      </div>
    </section>
  )
}

const NewIn = ({ collections, region }: NewInProps) => {
  return collections.map((collection) => (
    <NewInHelper
      key={collection.id}
      collection={collection}
      region={region}
    />
  ))
}

export default NewIn
