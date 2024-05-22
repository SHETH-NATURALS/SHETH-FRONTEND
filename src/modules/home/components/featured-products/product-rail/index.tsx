import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import { ProductCollectionWithPreviews } from "types/global"
import { Slide } from "../../../../layout/components/carousel-cards/client-export"
import ProductCard from "@modules/layout/components/product-card"
import CarouselWithCards from "../../../../layout/components/carousel-cards"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-transparent">
      <Text className="txt-xlarge font-opensans font-semibold">
        Our Best Sellers
      </Text>
      <div className="w-[1224px] flex items-center flex-wrap justify-center bg-transparent">
        <CarouselWithCards slides={4} length={products && products.length}>
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
  )
}
