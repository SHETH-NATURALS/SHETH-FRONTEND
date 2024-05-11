// "use client"

// import { Region } from "@medusajs/medusa"
// import React, { createContext, useContext } from "react"
// import { ProductCollectionWithPreviews } from "types/global"

// export interface LocationContext {
//     collections: ProductCollectionWithPreviews[],
//     region: Region
// }

// const LocationDetailsContext = createContext<LocationContext | null>(null)

// interface LocationProviderProps {
//   children?: React.ReactNode,
//   collections: ProductCollectionWithPreviews[],
//   region: Region
// }

// export const LocationDetailsProvider = ({ children, collections, region }: LocationProviderProps) =>{
//     return (
//         <LocationDetailsContext.Provider value={{collections, region}}>
//             { children }
//         </LocationDetailsContext.Provider>
//     )
// }
// export const useLocation = () => {
//   const context = useContext(LocationDetailsContext)
//   if (context === null) {
//     throw new Error("useLocation must be used within a LocationDetailsProvider")
//   }
//   return context
// }
