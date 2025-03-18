import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }
  console.log("hey1 love")
  console.log(product);
  console.log(product.title);

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start p-8 mt-7 rounded-[5rem] relative border border-black"
        data-testid="product-container"
      >
        <div className="flex flex-col w-[5rem] py-8 gap-y-6">
          {/* <ProductInfo product={product} />
          <ProductTabs product={product} /> */}
          {(product?.images ?? []).map((image, index) => {
            return (
              <Container
                key={image.id}
                className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                id={image.id}
              >
                {!!image.url && (
                  <Image
                    src={image.url}
                    // priority={index <= 2 ? true : false}
                    className="absolute inset-0 rounded-rounded"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </Container>
            )
          })}
        </div>
        <div className="block min-w-[50rem] relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col text-2xl small:sticky small:top-48  w-[40rem] pr-10 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>


        {/* from */}
        {/* <div className="w-full justify-items-start border-black border-8 p-5 ">
          <div className="border-black border-2 w-full p-5">
            <h1>write a reviews</h1>
            <div className="grid grid-rows-2">
              <div className="grid grid-rows-2">
                <h1>title of the review</h1>
                <input type="text" />
              </div>
              <div className="grid grid-rows-2">
                <h1>title of the review</h1>
                <input type="text" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ProductTemplate
