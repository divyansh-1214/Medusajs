"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import Cart from "app/[countryCode]/(main)/cart/page"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  console.log("fuck you");
  const step = getCheckoutStep(cart)
  console.log(step);

  return (
    <div className="flex  flex-col gap-y-4 border border-black p-10 rounded-3xl">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Order Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals totals={cart} />
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <Button className="w-full h-10" variant="danger">Go to checkout</Button>
      </LocalizedClientLink>
      
      <LocalizedClientLink
        href={"/store"}
        data-testid="checkout-button"
      >
        <Button className="w-full h-10 bg-yellow-300" variant="transparent">Continue Shoping</Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
