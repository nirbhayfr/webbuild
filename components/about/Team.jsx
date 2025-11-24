import React from 'react'
 const Team = () => {
  return (
    <section className="tj-team-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Meet Our Team ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Creative Minds Behind our Team</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our teams are customized to meet your unique ideas.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="team.html">
                        <span className="btn-text"><span>More Member</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="assets/images/team/team-1.webp" alt="Image"/>
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Eade Marren</a></h4>
                    <span className="designation">Chief Executive</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="assets/images/team/team-2.webp" alt="Image"/>
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Savannah Ngueen</a></h4>
                    <span className="designation">Operations Head</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="assets/images/team/team-3.webp" alt="Image"/>
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Cameron William</a></h4>
                    <span className="designation">Marketing Lead</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="assets/images/team/team-4.webp" alt="Image"/>
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Olivia Fox</a></h4>
                    <span className="designation">Business Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <a className="tj-primary-btn" href="team.html">
                <span className="btn-text"><span>More Member</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </section>
  )
}
export default Team;