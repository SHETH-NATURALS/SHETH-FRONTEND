import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="font-opensans">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        <h2 className="text-3xl font-bold text-primary" data-testid="product-title">
          {product.title}
        </h2>
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <p className="text-lg font-opensans font-bold" data-testid="product-description">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
