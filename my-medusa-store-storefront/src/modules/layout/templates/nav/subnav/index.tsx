import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav1() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-red-600">
      <header className="relative h-8">
        <nav className="   text-ui-fg-subtle flex items-center  w-full h-full text-small-regular">
          <div className="text-white w-full ml-5">
            <h1>Manufactured by SWAAD AGRO INDUSTRIES PVT. LTD.</h1>
          </div>
          <div className="flex text-white w-full justify-end gap-4 me-5">
            <h1>+91 - 1800-121-6400</h1>
            <h1>Mon - Sat: 24x7</h1>
          </div>
        </nav>
      </header>
    </div>
  )
}
