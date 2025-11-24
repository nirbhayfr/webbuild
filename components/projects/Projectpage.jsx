import React from 'react'
import BreadCrumb from './BreadCrumb'
import Projects from './Projects'

const Projectpage = () => {
  return (
    <div>
    <div id="smooth-wrapper">
    <div id="smooth-content">

      <main id="primary" className="site-main">
        <div className="top-space-30"></div>
        <BreadCrumb/>
      <Projects/>
      </main>
      </div>
      </div>
   </div>
  )
}

export default Projectpage
