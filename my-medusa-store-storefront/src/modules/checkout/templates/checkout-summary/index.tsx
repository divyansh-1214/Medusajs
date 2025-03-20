import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import CartTotals from "@modules/common/components/cart-totals/indexPrev"
import Divider from "@modules/common/components/divider"
import Payment from "@modules/checkout/components/payment"
import { listCartPaymentMethods } from "@lib/data/payment"
const CheckoutSummary = async ({ cart }: { cart: any }) => {
  
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "") || []
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0  ">
      <div className="w-full bg-white flex flex-col border border-black px-7 pb-7 rounded-3xl ">
        <Divider className="my-6 small:hidden" />
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular items-baseline justify-center p-10"
        >
          Your Order
        </Heading>
        <ItemsPreviewTemplate cart={cart} />
        <Divider className="my-6" />
        <CartTotals totals={cart} />
        <Payment cart={cart} availablePaymentMethods={paymentMethods} />
      </div>
    </div>
  )
}

export default CheckoutSummary
