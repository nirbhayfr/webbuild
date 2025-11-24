import React from 'react'

const ChooseSection = () => {
  return (
     <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Why Chose Us ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Reliable IT Solution, for Best Results.</h2>
                    <div className="tj-fade-anim">
                      <p className="desc">Our services are customized to meet your unique.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.5">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="about.html">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-thumbs-up"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Proven Track Record</h4>
                      <p className="desc">With a portfolio of successful projects and satisfied clients, we have a
                        reputation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-idea"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Tailored Solutions</h4>
                      <p className="desc">Our services are customized to meet your unique business needs, ensuring.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-rocket"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Future Technologies</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-hand-2"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">24/7 Support</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <a className="tj-primary-btn" href="about.html">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </section>
  )
}
export default ChooseSection;