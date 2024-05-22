import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  const mziziCollection = collections[1]
  return (
    <div className="bg-background w-full">
      <ProductRail collection={mziziCollection} region={region} />
    </div>
  )
}
