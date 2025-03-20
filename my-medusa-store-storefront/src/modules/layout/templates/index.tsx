import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Nav1 from "@modules/layout/templates/nav/subnav/index"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div >
      <Nav1/>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
