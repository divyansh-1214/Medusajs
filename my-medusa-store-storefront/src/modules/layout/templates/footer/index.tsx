import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <>
      <footer className="grid grid-cols-4 bg-[#3D3D3D] text-white p-24 ">
        <div className="flex flex-col gap-2">
          <div className="icon">icon</div>
          <div className="email">
            <a href="" type="email"> theneomindia@gmail.com</a>
          </div>
          <div className="address w-[15rem]">
            <a href="">226017 Head Office Swad Agro Industries Private Limited B K, Narona, Mohaan Road.</a>
          </div>
          <div className="phone">
            <a href="">91-1800-121-6400</a>
          </div>
          <div className="follow flex gap-4">
            <div>f</div>
            <div>x</div>
            <div>i</div>
            <div>p</div>
            <div>y</div>
          </div>
        </div>

        <div className="legal_info flex flex-col">
          <h1 className="py-3 font-semibold text-xl">Legal infromation</h1>
          <div className="">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
              salse & refund
            </LocalizedClientLink>
          </div>
          <div className="">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
              Terms & Conditions
            </LocalizedClientLink>
          </div>
          <div className="">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
              Privacy Policy
            </LocalizedClientLink>
          </div>
          <div className="">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
              Shipping & Delivery
            </LocalizedClientLink>
          </div>
        </div>
        
        <div className="navigation">
          <h1 className="py-3 font-semibold text-xl">Navigation</h1>
          <div>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/"
              data-testid="nav-account-link"
            >
              Home
            </LocalizedClientLink>
          </div>
          <div>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
              About
            </LocalizedClientLink>
          </div>
          <div>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/store"
              data-testid="nav-account-link"
            >
              Product
            </LocalizedClientLink>
          </div>
        </div>
        <div>

        <h1 className="py-3 font-semibold text-xl">Category</h1>
        <div className="product grid grid-cols-2 w-44">
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
          <div>
          <LocalizedClientLink
              className="hover:text-ui-fg-base hover:color-amber-400"
              href=""
              data-testid="nav-account-link"
            >
                Rajma
            </LocalizedClientLink>
          </div>
        </div>
        </div>

      </footer>
    </>
  )
}
