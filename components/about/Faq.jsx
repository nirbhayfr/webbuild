import React from 'react'

 const Faq = () => {
  return (
    <section className="tj-faq-section-2 tj-faq-section-3 section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Read FAQS ]</span>
                    <h2 className="sec-title tj-split-text-1">Quick Answers For Your Important Questions</h2>
                    <div className="tj-fade-anim">
                      <a className="tj-primary-btn" href="contact.html">
                        <span className="btn-text"><span>Contact Us</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                  <div className="faq-contact faq-contact-2 tj-fade-anim">
                    <h5 className="title">
                      Getting started is easy! Simply reach out us through our contact form or give us a call & we’ll
                      schedule.
                    </h5>
                    <div className="faq-contact-item">
                      <ul className="faq-contact-list">
                        <li>
                          <img src="/assets/images/testimonial/client-1.webp" alt=""/>
                        </li>
                        <li>
                          <i className="tji-phone-2"></i>
                        </li>
                      </ul>
                      <div className="faq-contact-number-wrapper">
                        <p className="desc">Call us now</p>
                        <h5 className="faq-contact-number"><a href="tel:+18883338181">+1 (888) 333-8181</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tj_accordion tj_accordion_2 tj_accordion_3" id="tjAccordion01">
                  <div className="accordion_item active tj-fade-anim">
                    <button className="accordion_title" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-1" aria-expanded="true">
                      What services does your company offer?
                    </button>
                    <div id="accordion-1" className="collapse show" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs,
                        and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date
                        with the latest technologies. The consultation phase and keep you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-2" aria-expanded="false">
                      How can your IT solutions help my business?
                    </button>
                    <div id="accordion-2" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs,
                        and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date
                        with the latest technologies. The consultation phase and keep you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-3" aria-expanded="false">
                      Do you provide support after project completion?
                    </button>
                    <div id="accordion-3" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs,
                        and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date
                        with the latest technologies. The consultation phase and keep you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-4" aria-expanded="false">
                      How long does it take to implement an IT solution?
                    </button>
                    <div id="accordion-4" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs,
                        and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date
                        with the latest technologies. The consultation phase and keep you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-5" aria-expanded="false">
                      Is my data secure with your solutions?
                    </button>
                    <div id="accordion-5" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs,
                        and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date
                        with the latest technologies. The consultation phase and keep you informed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
export default Faq;