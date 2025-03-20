import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Nav1 from "@modules/layout/templates/nav/subnav/index"
export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <>
      <Nav1 />
      <div className="sticky top-0 inset-x-0 z-50 group">
        <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
          <nav className=" txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
            <div className="flex mx-5">
              <div className="flex items-center h-full gap-5 border-r mx-4">
                <LocalizedClientLink
                  href="/"
                  className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                  data-testid="nav-store-link">
                  meduca
                </LocalizedClientLink>
                <div className="w-32 ">
                  Deliver to Shivansh,
                  Lucknow 226021
                </div>
              </div>
              <div>
                <input type="text" placeholder="search Pasta" className="w-[15rem] h-[2rem] p-2  bg-[#E9E9E9] rounded-md" />
              </div>
              <div className="mx-3">
                <div className="hidden small:flex items-center gap-x-6 h-full">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="store"
                    data-testid="nav-account-link"
                  >
                    product
                  </LocalizedClientLink>
                  <div className="hidden small:flex items-center gap-x-6 h-full">
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href="/account"
                      data-testid="nav-account-link"
                    >
                      About us
                    </LocalizedClientLink>
                  </div>
                  <div className="hidden small:flex items-center gap-x-6 h-full">
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href="/account"
                      data-testid="nav-account-link"
                    >
                      Blog
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mx-4">
              <div>
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
              <div>
                <div className="hidden small:flex items-center gap-x-6 h-full">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/account"
                    data-testid="nav-account-link"
                  >
                    Account
                  </LocalizedClientLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
