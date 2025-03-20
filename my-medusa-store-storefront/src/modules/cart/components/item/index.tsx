"use client"

import LineItemOptions from "@modules/common/components/line-item-options"
import { Table, Text, clx } from "@medusajs/ui"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { useState } from "react"
import { deleteLineItem } from "@lib/data/cart"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }
  const [c, setC] = useState(1);

  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }
  // TODO: Update this to grab the actual max inventory
  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  if (type == "full") {
    return (
      <div className="grid grid-cols-2 w-[40rem] pb-2 m-2">
        <div className=" grid grid-cols-3">

          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className={clx("flex", {
              // "w-16": type === "preview",
              "small:w-24 w-12": type === "full",
            })}
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
            />
          </LocalizedClientLink>

          <div className="col-span-2">
            <Text
              className="txt-medium-plus text-ui-fg-base"
              data-testid="product-title"
            >
              {item.product_title}
            </Text>
            <Table.Cell className="hidden small:table-cell">
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
            </Table.Cell>
            <div>
              <div className="flex gap-2 items-center w-28 pt-4">
                <CartItemSelect
                  value={item.quantity}
                  onChange={(value) => changeQuantity(parseInt(value.target.value))}
                  className="w-14 h-10 p-4"
                  data-testid="product-select-button"
                >
                  {Array.from(
                    {
                      length: Math.min(maxQuantity, 10),
                    },
                    (_, i) => (
                      <option value={i + 1} key={i}>
                        {i + 1}
                      </option>
                    )
                  )}

                  <option value={1} key={1}>
                    1
                  </option>
                </CartItemSelect>
                {updating && <Spinner />}
                <div className="    flex gap-5 bg-[#EFEFEF] p-2 rounded-lg ">
                  <button onClick={() => setC(Math.max(1, c - 1))}>-</button>
                  <span>{c}</span>
                  <button onClick={() => setC(c + 1)}>+</button>
                </div>
              </div>
              <ErrorMessage error={error} data-testid="product-error-message" />
            </div>
          </div>

        </div>
        <div className=" grid grid-rows-2">
          <LineItemPrice
            item={item}
            style="default"
            currencyCode={currencyCode}
          />
          <DeleteButton className="justify-end text-3xl" id={item.id} data-testid="product-delete-button" />

        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <Table.Row  className="w-full p-[10rem]" data-testid="product-row">
          <Table.Cell className="text-left">
            <Text
              className="txt-medium-plus text-ui-fg-base"
              data-testid="product-title"
            >
              {item.product_title}
            </Text>
          </Table.Cell>
          <Table.Cell className="!pr-0">
            <span
              className={clx("!pr-0", {
                "flex flex-col items-end h-full justify-center": type === "preview",
              })}
            >
              {type === "preview" && (
                <span className="flex gap-x-1 ">
                  <Text className="text-ui-fg-muted">{item.quantity} </Text>
                </span>
              )}
            </span>
          </Table.Cell>
        </Table.Row>
      </>
    )
  }
}

export default Item
