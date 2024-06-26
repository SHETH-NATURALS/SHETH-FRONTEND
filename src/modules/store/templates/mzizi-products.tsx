import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import MziziPaginatedProducts from "./paginated-mzizi"

const MziziTemplate = ({
  sortBy,
  page,
  countryCode,
  collectionName,
  collectionIdentifier,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  collectionName: string
  collectionIdentifier: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">{collectionName} products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <MziziPaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
            collectionId={collectionIdentifier}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default MziziTemplate
