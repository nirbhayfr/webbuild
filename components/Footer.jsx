import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<section className="tj-cta-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="cta-area tj-fade-anim">
								<div className="cta-content">
									<h2 className="title">
										Don’t Miss Out the Future!
									</h2>
								</div>

								<div className="cta-right">
									<div className="subscribe-form cta-form">
										<form>
											<input
												type="email"
												name="email"
												placeholder="Enter email here..."
											/>
											<button
												className="tj-primary-btn style-2"
												type="submit"
											>
												<span className="btn-text">
													<span>
														Subscribe
														Now
													</span>
												</span>
												<span className="btn-icon">
													<i className="tji-bell"></i>
												</span>
											</button>
										</form>
									</div>

									<div className="social-links cta-social">
										<span className="title">
											Follow us:
										</span>
										<ul>
											<li>
												<a
													href="https://www.facebook.com/"
													target="_blank"
												>
													<i className="tji-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/"
													target="_blank"
												>
													<i className="tji-instagram"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.x.com/"
													target="_blank"
												>
													<i className="tji-x-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.linkedin.com/"
													target="_blank"
												>
													<i className="tji-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* cta-right */}
							</div>
							{/* cta-area */}
						</div>
					</div>
				</div>
			</section>

			<footer className="tj-footer-section footer-1 section-gap-x">
				<div
					className="bg-img"
					data-bg-image="/assets/images/footer/footer-bg.webp"
				></div>

				<div className="footer-main-area">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="footer_widget_wrapper">
									{/* Column 1 */}
									<div className="footer-widget footer-col-1">
										<div className="footer-logo">
											<a href="index.html">
												{/* <img
													src="/assets/images/logos/primary-logo.webp"
													alt="Logo"
												/> */}
												<h2>WebBuild</h2>
											</a>
										</div>

										<div className="footer-text">
											<p>
												Every great solution
												start understand the
												time into learn
												about.
											</p>
										</div>

										<div className="download-buttons">
											<a href="https://play.google.com/store/games">
												<img
													src="/assets/images/footer/google-play.webp"
													alt=""
												/>
											</a>
											<a href="https://www.apple.com/app-store/">
												<img
													src="/assets/images/footer/app-store.webp"
													alt=""
												/>
											</a>
										</div>
									</div>

									{/* Column 2 */}
									<div className="footer-widget widget-nav-menu">
										<h5 className="title">
											Services
										</h5>
										<ul>
											<li>
												<a href="service-details.html">
													<span>
														Manage IT
														Service
													</span>
												</a>
											</li>
											<li>
												<a href="service-details.html">
													<span>
														Cloud
														Computing
													</span>
												</a>
											</li>
											<li>
												<a href="service-details.html">
													<span>
														Cyber
														Security
													</span>
												</a>
											</li>
											<li>
												<a href="service-details.html">
													<span>
														Software
														Develop
													</span>
												</a>
											</li>
											<li>
												<a href="service-details.html">
													<span>
														Change
														Manage
													</span>
												</a>
											</li>
											<li>
												<a href="service-details.html">
													<span>
														IT
														Consulting
													</span>
												</a>
											</li>
										</ul>
									</div>

									{/* Column 3 */}
									<div className="footer-widget widget-nav-menu">
										<h5 className="title">
											Resourses
										</h5>
										<ul>
											<li>
												<a href="contact.html">
													<span>
														Contact Us
													</span>
												</a>
											</li>
											<li>
												<a href="blog-details.html">
													<span>
														Privacy
														Policy
													</span>
												</a>
											</li>

											<li>
												<Link to="/projects">
													<span>
														Projects
													</span>
													<span className="badge">
														New
													</span>
												</Link>
											</li>
										</ul>
									</div>

									{/* Column 4 */}
									<div className="footer-widget widget-contact">
										<h5 className="title">
											Contact Info
										</h5>

										<div className="footer-contact-info">
											<div className="contact-item">
												<span>
													993 Renner
													Burg, West
													Rond, MT
													94251-030, USA.
												</span>
											</div>

											<div className="contact-item">
												<a href="tel:10095447818">
													P: +1 (009)
													544-7818
												</a>
												<a href="mailto:support@tekmino.com">
													E:
													support@tekmino.com
												</a>
											</div>

											<div className="contact-item">
												<span>
													<i className="tji-clock"></i>{" "}
													Mon-Fri
													09am-06pm
												</span>
											</div>
										</div>
									</div>
								</div>
								{/* footer wrapper */}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="tj-copyright-area">
					<div className="copyright-wrap">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="copyright-content-area">
										<div className="copyright-text">
											<p>
												<a
													href="https://themeforest.net/user/theme-junction/portfolio"
													target="_blank"
												>
													Tekmino
												</a>{" "}
												&copy; 2025. All
												right reserved.
											</p>
										</div>

										<div className="copyright-menu">
											<ul>
												<li>
													<a href="contact.html">
														Privacy &
														Policy
													</a>
												</li>
												<li>
													<a href="contact.html">
														Terms &
														Condition
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
