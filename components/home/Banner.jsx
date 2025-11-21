import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
	return (
		<>
			<section className="tj-banner-section fix">
				<div
					className="hero-bg"
					style={{
						backgroundImage:
							"url('assets/images/hero/hero-bg.webp')",
					}}
				></div>

				<div className="container">
					<div className="row">
						{/* Left Column */}
						<div className="col-xxl-6 col-xl-5 col-lg-6">
							<div className="banner-content">
								<span
									className="sub-title tj-fade-anim"
									data-duration="0.5"
								>
									[ Transforming Ideas ]
								</span>

								<h1 className="banner-title tj-split-text-4">
									Innovative Tech Solutions for
									Business.
								</h1>

								<div
									className="btn-area tj-fade-anim"
									data-delay=".6"
								>
									<Link
										className="tj-primary-btn"
										to="/services"
									>
										<span className="btn-text">
											<span>
												Explore Services
											</span>
										</span>
										<span className="btn-icon">
											<i className="tji-arrow-right-2"></i>
										</span>
									</Link>

									<a
										className="number"
										href="tel:18883338181"
									>
										<i className="tji-phone-2"></i>
										<span>+1 (888) 333-8181</span>
									</a>
								</div>

								<div
									className="list-area tj-fade-anim"
									data-delay=".6"
									data-duration="1"
									data-direction="left"
								>
									<ul className="list-style-1">
										<li>
											<span>
												<i className="tji-check"></i>
											</span>
											Innovate Smarter
										</li>
										<li>
											<span>
												<i className="tji-check"></i>
											</span>
											Technology Simplified
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Right Column */}
						<div className="col-xxl-6 col-xl-7 col-lg-6">
							<div className="banner-img-area">
								<div
									className="banner-img tj-fade-anim"
									data-delay="0.3"
									data-direction="right"
								>
									<img
										src="assets/images/hero/hero-img.webp"
										alt="Image"
									/>
								</div>

								<div
									className="trusted tj-bounce tj-fade-anim"
									data-delay="1"
									data-direction="left"
								>
									<span className="icon">
										<i className="tji-shield"></i>
									</span>
									<span className="text">
										Trusted by 800+ Tech Giants.
									</span>
								</div>

								<div
									className="customers-box tj-fade-anim"
									data-delay="0.6"
									data-direction="right"
								>
									<div className="customers">
										<ul>
											<li>
												<img
													src="assets/images/testimonial/client-1.webp"
													alt="client"
												/>
											</li>
											<li>
												<img
													src="assets/images/testimonial/client-2.webp"
													alt="client"
												/>
											</li>
											<li>
												<img
													src="assets/images/testimonial/client-3.webp"
													alt="client"
												/>
											</li>
											<li>
												<img
													src="assets/images/testimonial/client-4.webp"
													alt="client"
												/>
											</li>
										</ul>
									</div>

									<div className="customers-bottom">
										<div className="rating-area">
											<div className="customers-number">
												4.9
											</div>

											<div className="star-ratings">
												<div
													className="fill-ratings"
													style={{
														width: "90%",
													}}
												>
													<span>
														★★★★★
													</span>
												</div>

												<div className="empty-ratings">
													<span>
														★★★★★
													</span>
												</div>
											</div>
										</div>

										<h6 className="customers-text">
											Based on 600+ Google
											Reviews.
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="banner-scroll tj-fade-anim"
					data-delay="1.2"
					data-direction="top"
				>
					<a href="#client" className="scroll-down">
						<span className="text">Scroll Down</span>
						<span className="icon">
							<i className="tji-arrow-down-2"></i>
						</span>
					</a>
				</div>
			</section>
			<section
				id="client"
				className="tj-client-section section-gap-top"
			>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div
								className="client-content tj-fade-anim"
								data-delay="0.1"
							>
								<h5 className="sec-title">
									Join Over <span>1000+</span>{" "}
									Companies with Tekmino Here
								</h5>
							</div>

							{/* Swiper Slider */}
							<Swiper
								modules={[Autoplay]}
								loop={true}
								speed={3000}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
								}}
								slidesPerView={5}
								spaceBetween={20}
								allowTouchMove={false}
								grabCursor={false}
								breakpoints={{
									0: { slidesPerView: 2 },
									576: { slidesPerView: 3 },
									768: { slidesPerView: 4 },
									1200: { slidesPerView: 5 },
								}}
								className="client-slider"
							>
								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-1.webp"
											alt="Brand 1"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-2.webp"
											alt="Brand 2"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-3.webp"
											alt="Brand 3"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-4.webp"
											alt="Brand 4"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-5.webp"
											alt="Brand 5"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide className="client-item">
									<div className="client-logo">
										<img
											src="assets/images/brands/brand-6.webp"
											alt="Brand 6"
										/>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
