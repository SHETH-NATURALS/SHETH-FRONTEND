import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

import Accordion from "@modules/layout/components/accordion"
import Readmore from "@modules/layout/components/read-more"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <section className="bg-background flex flex-col items-center font-opensans">
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-8 relative w-[1224px]"
        data-testid="product-container"
      >
        <div className="block relative mx-3">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col w-[392px] h-[282px] gap-y-12">
          <ProductInfo product={product} />
          {/* <ProductTabs product={product} /> */}
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div className="w-[1224px] flex flex-col capitalize py-6">
        <ul className="flex justify-between border-b border-gray-500 text-gray-500 text-xl font-bold">
          <li><a className="focus:text-primary hover:text-primary-700 focus:border-b border-primary" href="#product-details">Product details</a></li>
          <li><a className="focus:text-primary hover:text-primary-700 focus:border-b border-primary" href="#apply">How to apply</a></li>
          <li><a className="focus:text-primary hover:text-primary-700 focus:border-b border-primary" href="#ingredient">Ingredient</a></li>
          <li><a className="focus:text-primary hover:text-primary-700 focus:border-b border-primary" href="#advance">What makes it advance</a></li>
          <li><a className="focus:text-primary hover:text-primary-700 focus:border-b border-primary" href="#specification">Product specification</a></li>
        </ul>
        <Readmore id="product-details" title="Product Details">
          Introducing Sheth Naturals&apos; groundbreaking revitalizing deep conditioner, harnessing the potent power of natural ingredients to transform your hair from within. Crafted after years of meticulous research, this deep conditioner is enriched with a unique blend of botanical extracts, including Rose de Granville, to deeply nourish and rejuvenate your locks. Our advanced formula, composed of 92% natural-origin ingredients, delivers twice the concentration, combining the richness of nourishing oils with the penetrating properties of a serum.
          From the very first use, experience deeply replenished and revitalized hair. In just a few weeks, witness a remarkable improvement in hair elasticity, strength, and shine. With consistent use, watch as your hair undergoes a transformation, appearing denser, stronger, and noticeably more resilient. Embrace the extraordinary beauty of your hair with Sheth Naturals&apos; Prestige.

          (1) Instrumental test, 32 panelists, after 30 min.

          (2) In a Aloe Vera Oil bottle.

          (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water percentage included. The remaining 8% of ingredients contribute to the formula&apos;s performance, sensory appeal and stability.

          (4) In Rose de Granville micro-nutrients compared to the previous formula.

          (5) Clinical assessment by a dermatologist on the evolution of the product&apos;s performance on the skin elasticity, comparison between the effect after 7 days and 28 days on 34 women.
        </Readmore>
        <Readmore id="apply" title="How to apply">
          step 1: Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.
          step 2: Use gentle pressure to make the serum penetrate deeply.
          step 3: Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
        </Readmore>
        <Readmore id="ingredient" title="Ingredient">
          AQUA/WATER/EAU, C12-15 ALKYL BENZOATE, GLYCERYL STEARATE SE, BUTYLENE GLYCOL, GLYCERIN, OLUS OIL/VEGETABLE OIL/HUILE VÉGÉTALE, ISONONYL ISONONANOATE, CETYL ALCOHOL, ETHYLHEXYL PALMITATE, CYCLOPENTASILOXANE, DIMETHICONE, POLYESTER-7, PHENOXYETHANOL, NEOPENTYL GLYCOL DIHEPTANOATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, STEARETH-21, AVENA SATIVA (OAT) KERNEL EXTRACT, CARBOMER, DIMETHICONOL, POTASSIUM CETYL PHOSPHATE, CHLORPHENESIN, CAPRYLYL GLYCOL, XANTHAN GUM, HYDROLYZED VIOLA TRICOLOR EXTRACT, ALLANTOIN, ALOE BARBADENSIS (ALOE VERA) LEAF JUICE, DISODIUM EDTA, TOCOPHERYL ACETATE, CAMELLIA OLEIFERA SEED OIL, ROSA CANINA FRUIT OIL, ROSA DAMASCENA (ROSE) EXTRACT, SODIUM HYDROXIDE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, MICHELIA ALBA LEAF OIL, SODIUM LACTATE, COCO-GLUCOSIDE, PEG-8, ETHYLHEXYLGLYCERIN, SODIUM HYALURONATE, TOCOPHEROL, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-1, ASCORBYL PALMITATE, PLUMERIA RUBRA FLOWER EXTRACT, ASCORBIC ACID, CITRIC ACID, NICOTIANA SYLVESTRIS LEAF CELL CULTURE, LINALOOL, CITRONELLOL, GERANIOL.
        </Readmore>
        <Readmore id="advance" title="What makes it advance">
          OVER 11 AWARDS WON!
          BIONYMPH PEPTIDE: peptide blend that helps to condition for smoother, plumper looking skin
          VITAMINS C & E: work in harmony to BRIGHTEN the look of your complexion and EVEN the appearance of the skin tone
          ROSEHIP OIL: helps revitalise and balance the look of skin
          HYALURONIC ACID: helps keep skin hydrated for up to 24 hours
          FRANGIPANI FLOWER EXTRACT: a floral extract with moisturising benefits
          CAMELLIA OIL: hydrates and nourishes the skin for a dewy-looking complexion
          ALOE VERA: calming, smoothing, moisturising properties
          SHEA BUTTER: Nourishes and softens
        </Readmore>
        <Readmore id="specification" title="Product Specification">
          Product Code-46000701
          Key Ingredients-Hyaluronic Acid, Vitamin C
          Beauty Effect-Brightening
          Brand-Estée Lauder
          Type-Serums
          Volume-30ml
        </Readmore>
      </div>
      <div className="w-[1224px] h-[688px] bg-[#bfbfbf] py-8"></div>
      <div className="flex flex-col w-[1224px] capitalize py-6 items-center">
        <h3 className="font-bold my-5 text-4xl">{product.title} frequently asked questions</h3>
        <Accordion title="What is the best way to use this product?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
        <Accordion title="How often should I use this product?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
        <Accordion title="Can this product be used during pregnancy?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
        <Accordion title="How often should I use this product?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
        <Accordion title="How long will it take to see results from using this product?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
        <Accordion title="Can this product be used in conjunction with other skincare products?" answer=" Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately." />
      </div>
      {/* <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div> */}
    </section>
  )
}

export default ProductTemplate
