import React from 'react'
import BreadCrumb from './BreadCrumb'
import Services from './Services'
import Contact from './Contact'
import Price from './Price'
const Servicespage = () => {
  return (
    <div>
       <div id="smooth-wrapper">
    <div id="smooth-content">

      <main id="primary" className="site-main">
      <div className="top-space-30"></div>
      <BreadCrumb/>
      <Services/>
      <Contact/>
      <Price/>


      </main>
      </div>
      </div>
    </div>
  )
}

export default Servicespage
