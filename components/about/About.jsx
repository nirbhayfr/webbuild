import React from "react";

  const About = () => {
  return (
      <>
      <div className="body-overlay"></div>


        {/*start: About Section */}
        <section className="tj-about-section tj-about-section-2 section-gap-x">
          <div className="container tj-about-container">
            <div className="row">
              <div className="col-lg-6 col-xxl-7 order-lg-1 order-2">
                <div className="about-left ">
                  <div className="about-img">
                    <div className="img-reveal-1">
                      <img src="/assets/images/about/h2-about-banner.webp" alt="Image"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-5 order-lg-2 order-1">
                <div className="about-content-area fix">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ About Tekmino ]</span>
                    <h2 className="sec-title tj-split-text-1">Driving Innovation Through AI and New Technology, Delivering
                      Tailored.
                    </h2>
                  </div>
                  <div className="about-bottom">
                    <div className="about-logo tj-fade-anim" data-delay="0.3">
                      <div className="about-logo-icon">
                        <img src="/assets/images/logos/logo-icon.webp" alt=""/>
                      </div>
                      <div className="about-logo-text">
                        <img src="/assets/images/logos/logo-text.webp" alt=""/>
                      </div>
                    </div>
                    <div className="about-features-wrap tj-fade-anim" data-delay="0.5">
                      <div className="about-features">
                        <div className="about-features-item">
                          <h4 className="title">Our Mission</h4>
                          <p className="desc">Revolutionize the way you work the our solutions designed to meet the
                            challenges
                            of today business lands revolutionize.</p>
                        </div>
                        <div className="about-features-item">
                          <h4 className="title">Our Vision</h4>
                          <p className="desc">Revolutionize the way you work the solutions designed to meet unique
                            challenges of
                            today’s business landscape revolutionize.</p>
                        </div>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <a className="tj-primary-btn style-2 style-3 mt-15" href="about.html">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tj-countup-section-2 section-gap-bottom pt-90">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="about-funfact funfact-3 tj-fade-anim">
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-hand"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">10</span>
                        <span className="count-plus">K+</span>
                      </div>
                      <span className="count-text">Engaged Customers</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-trophy"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">99</span>
                        <span className="count-plus">%</span>
                      </div>
                      <span className="count-text">Customer Success Stories</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-team"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">80</span>
                        <span className="count-plus">+</span>
                      </div>
                      <span className="count-text">Team of Professionals</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className=" tji-growth"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">10</span>
                        <span className="count-plus">x</span>
                      </div>
                      <span className="count-text">More Faster Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/*end: About Section */}
     
 
</>
    );
} 
export default About;