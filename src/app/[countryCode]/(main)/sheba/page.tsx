import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import MziziTemplate from "@modules/store/templates/mzizi-products"

export const metadata: Metadata = {
  title: "Mzizi | Sheth Naturals",
  description: "Explore Mzizi producrs",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function ShebaPage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <MziziTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      collectionName="Sheba"
      collectionIdentifier="pcol_01HYGNH6ETT37J8K9V9NREQQXR"
    />
  )
}
