"use client"

import { convertToLocale } from "@lib/util/money"
import React from "react"

type CartTotalsProps = {
    totals: {
        total?: number | null
        subtotal?: number | null
        tax_total?: number | null
        shipping_total?: number | null
        discount_total?: number | null
        gift_card_total?: number | null
        currency_code: string
        shipping_subtotal?: number | null
    }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
    const {
        currency_code,
        total,
        subtotal,
        tax_total,
        discount_total,
        gift_card_total,
        shipping_subtotal,
    } = totals
    console.log();

    return (
        <div className="">
            <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
                <div className="flex items-center justify-between border-b border-black p-2">
                    <span className="flex gap-x-1 items-center text-xl text-black">
                        Subtotal
                    </span>
                    <span data-testid="cart-subtotal  " data-value={subtotal || 0}>
                        {convertToLocale({ amount: subtotal ?? 0, currency_code })}
                    </span>
                </div>
                <div className="flex items-center justify-between border-b border-black p-2">
                    <span className="text-xl text-black">Shipping Charge</span>
                    <span data-testid="cart-shipping  " data-value={shipping_subtotal || 0}>
                        {convertToLocale({ amount: shipping_subtotal ?? 0, currency_code })}
                    </span>
                </div>
            </div>
            <div className="h-px w-full  my-4 " />
            <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium  ">
                <span className="text-2xl text-black">Total</span>
                <span
                    className="txt-xlarge-plus "
                    data-testid="cart-total"
                    data-value={total || 0}
                >
                    {convertToLocale({ amount: total ?? 0, currency_code })}
                </span>
            </div>
            <div className="h-px w-full border-b border-black mt-4" />
        </div>
    )
}

export default CartTotals
