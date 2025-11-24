import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <div className="tj-contact-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading text-center">
                  <span className="sub-title tj-fade-anim">[ Contact info ]</span>
                  <h2 className="sec-title tj-split-text-1">Reach Out Us Now!</h2>
                </div>
              </div>
            </div>
            <div className="row row-gap-4">
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.1">
                  <div className="contact-icon">
                    <i className="tji-location"></i>
                  </div>
                  <h3 className="contact-title">Our Location</h3>
                  <p>993 Renner Burg, West Rond, MT 94251-030</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.3">
                  <div className="contact-icon">
                    <i className="tji-envelop"></i>
                  </div>
                  <h3 className="contact-title">Email us</h3>
                  <ul className="contact-list">
                    <li><a href="mailto:support@tekmino.com">support@tekmino.com</a></li>
                    <li><a href="mailto:info@tekmino.com">info@tekmino.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.5">
                  <div className="contact-icon">
                    <i className="tji-phone"></i>
                  </div>
                  <h3 className="contact-title">Call us</h3>
                  <ul className="contact-list">
                    <li><a href="tel:10095447818">+1 (009) 544-7818</a></li>
                    <li><a href="tel:10098801810">+1 (009) 880-1810</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.7">
                  <div className="contact-icon">
                    <i className="tji-chat"></i>
                  </div>
                  <h3 className="contact-title">Live chat</h3>
                  <ul className="contact-list">
                    <li><a href="mailto:livechat@tekmino.com">livechat@tekmino.com</a></li>
                    <li className="active"><a href="contact.html">Need help?</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactInfo
