import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="tj-contact-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="assets/images/bg/common-bg-2.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Get In Touch ]</span>
                    <h2 className="sec-title tj-split-text-1">Have any Questions on Mind? Get in Touch for Market
                      Experts.</h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn mt-25 d-none d-lg-inline-flex" href="contact.html">
                        <span className="btn-text"><span>Contact Us Now</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                  <div className="contact-info tj-fade-anim" data-delay="0.3" data-direction="bottom">
                    <div className="contact-item">
                      <h6 className="title">Contact Info:</h6>
                      <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                      <a className="contact-link" href="mailto:support@tekmino.com">support@tekmino.com</a>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">Find Us:</h6>
                      <span className="contact-link">Renner Burg, West Rond, MT 9421-030, USA.</span>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">Opening Hour:</h6>
                      <span className="contact-link">Mon - Fri <span>(Open)</span></span>
                      <span className="contact-link">09:00am - 06.00pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="contact-form style-2 tj-fade-anim" data-delay="0.3" data-direction="right">
                  <h3 className="title">Drop Us a <span>Line.</span></h3>
                  <form id="contact-form-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Full Name <span>*</span></label>
                          <input type="text" name="cfName2"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Email Address <span>*</span></label>
                          <input type="email" name="cfEmail2"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Phone number <span>*</span></label>
                          <input type="tel" name="cfPhone2"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Select Service <span>*</span></label>
                          <div className="tj-nice-select-box">
                            <div className="tj-select">
                              <select name="cfSubject2">
                                <option value="1">Managed IT Services</option>
                                <option value="2">Cloud Computing</option>
                                <option value="3">Cybersecurity Solutions</option>
                                <option value="4">IT Consulting & Strategy</option>
                                <option value="5">Software Development</option>
                                <option value="6">Network Infrastructure</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-input message-input">
                          <label className="cf-label">Type message</label>
                          <textarea name="cfMessage2" id="message"></textarea>
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>Send Message</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-3"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
