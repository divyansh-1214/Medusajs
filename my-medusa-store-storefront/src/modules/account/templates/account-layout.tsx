import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  console.log(customer)
  if(customer){
    return(
      <div className="">
        <AccountNav customer={customer} />
        <div className="flex-1 w-full">{children}</div>
      </div>
    )
  }
  else{
    return (
      <div>
        <div className="flex-1 w-full">{children}</div>
      </div>
    )
  }
}

export default AccountLayout
