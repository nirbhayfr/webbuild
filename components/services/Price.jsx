import React from 'react'

const Price = () => {
  return (
    <div>
       <section className="tj-pricing-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Best pricing ]</span>
                  <h2 className="sec-title tj-split-text-1">Pricing Plans to Find the Right IT Support</h2>
                  <div className="price_switcher tj-fade-anim" data-delay="1">
                    <p>Monthly</p>
                    <label className="toggle_switcher">
                      <input className="toggle-checkbox" type="checkbox"/>
                      <span className="toggle-switch"></span>
                    </label>
                    <p>Yearly <span>(Save 15%)</span></p>
                  </div>
                </div>
                <div className="pricing_items_wrap pricing_items_wrap_2 tj-slide-wrap">
                  <div className="pricing_item tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Basic Plan</h4>
                      <div className="package_desc">Essential Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="199" data-month-price="99">99</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Essential IT Support
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cloud Storage (50 GB)
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Monthly System Check
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Basic Security Updates
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Software Patches and Fixes
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        1 Scheduled Maintenance
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item recommend tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Standard Plan</h4>
                      <div className="package_desc">Complete Electrical Solutions</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="499" data-month-price="249">249</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Advanced IT Management
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cloud Storage (200 GB)
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Custom Software Solutions
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Threat Detection Services
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Data Backup and Recovery
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Monthly IT Consultation
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Premium Plan</h4>
                      <div className="package_desc">Advanced Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="899" data-month-price="499">499</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Comprehensive IT Solutions
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Unlimited Cloud Storage
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Priority 1-Hour Support
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cybersecurity Protection
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Dedicated Account Manager
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        24/7 Emergency Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Price
