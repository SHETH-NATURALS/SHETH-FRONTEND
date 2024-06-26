import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

// Icons Import
import SearchIcon from "@mui/icons-material/Search"
import LanguageIcon from "@mui/icons-material/Language"

// Logo Import
import Image from "next/image"
import Logo from "@assets/sheth logo dark.png"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container flex items-center justify-between w-full h-full px-28">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className=""
              data-testid="nav-store-link"
            >
              <Image
                src={Logo}
                width={150}
                height={50}
                alt="Sheth Naturals Logo"
              />
            </LocalizedClientLink>
          </div>
          <div className="hidden h-full md:flex gap-x-8 items-center font-opensans font-bold">
            <LocalizedClientLink className=" focus:text-primary" href="/">
              Home
            </LocalizedClientLink>
            <LocalizedClientLink className=" focus:text-primary" href="/mzizi">
              Mizizi
            </LocalizedClientLink>
            <LocalizedClientLink className=" focus:text-primary" href="/sheba">
              Sheba
            </LocalizedClientLink>
            <LocalizedClientLink className=" focus:text-primary" href="/">
              Gifts & Sets
            </LocalizedClientLink>
            <LocalizedClientLink className=" focus:text-primary" href="/">
              Branches
            </LocalizedClientLink>
            <LocalizedClientLink className=" focus:text-primary" href="/brand">
              Our Brand
            </LocalizedClientLink>
            {/* <div className="h-full">
              <SideMenu regions={regions} />
            </div> */}
          </div>
          <div className="flex items-center gap-x-6 h-full">
            <div className="flex gap-2 items-center h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
              >
                <SearchIcon />
              </LocalizedClientLink>
              <p className="text-xl">|</p>
              {/* <div className="flex">
                <LanguageIcon/>
                <p className="">US<span className="text-xs">(EN)</span></p>
              </div> */}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <p className="text-xl">|</p>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
