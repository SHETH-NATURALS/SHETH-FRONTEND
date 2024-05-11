import { Region } from "@medusajs/medusa"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import PreviewPrice from "@modules/products/components/product-preview/price"
import Image from "next/image"

interface ProductProps {
    productPreview: ProductPreviewType,
    isFeatured?:boolean,
    region: Region
}

const ProductCard = async ({ productPreview, isFeatured, region}: ProductProps) => {
    const pricedProduct = await retrievePricedProductById({
        id: productPreview.id,
        regionId: region.id,
      }).then((product) => product)
    
      if (!pricedProduct) {
        return null
      }
    
      const { cheapestPrice } = getProductPrice({
        product: pricedProduct,
        region,
      })
    return (
        <div className="h-[500px] w-auto bg-white flex flex-col flex-shrink-0 relative">
            <div className="h-[384px]">
                <Image
                    src={productPreview.thumbnail ?? ''}
                    alt={productPreview.title}
                    width={384}
                    height={384}
                />
            </div>
            <div className="flex flex-col text-center justify-end absolute w-full h-full p-3 gap-4">
                <p className="font-semibold text-primary">{ productPreview.title }</p>
                <p>Product Description</p>
                { cheapestPrice && <PreviewPrice price={cheapestPrice}/>}
            </div>
        </div>
    )
}

export default ProductCard