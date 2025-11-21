import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Looping project slider with working Prev / Next buttons and pagination.
 * - Uses refs for navigation buttons via onBeforeInit (Swiper React recommended pattern)
 * - Loop is enabled
 * - Responsive slidesPerView via breakpoints
 */

export default function ProjectsSectionSlider() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const items = [1, 2, 3, 4]; // replace with your real project data

	return (
		<section className="tj-project-section section-gap section-gap-x fix">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading">
							<span className="sub-title tj-fade-anim">
								[ Recent Projects ]
							</span>
							<div className="sec-heading-inner">
								<h2 className="sec-title tj-split-text-1">
									Breaking Boundaries, Building
									Dreams.
								</h2>
								<div
									className="tj-fade-anim"
									data-delay="0.1"
								>
									<p className="desc">
										Our projects are tailored to
										meet your unique business
										needs.
									</p>
								</div>

								{/* Desktop nav buttons */}
								<div
									className="slider-navigation d-none d-md-inline-flex tj-fade-anim"
									data-delay="0.3"
								>
									<div
										className="slider-prev"
										ref={prevRef}
										style={{ cursor: "pointer" }}
									>
										<span className="anim-icon">
											<i className="tji-arrow-left-3"></i>
											<i className="tji-arrow-left-3"></i>
										</span>
									</div>
									<div
										className="slider-next"
										ref={nextRef}
										style={{ cursor: "pointer" }}
									>
										<span className="anim-icon">
											<i className="tji-arrow-right-3"></i>
											<i className="tji-arrow-right-3"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid px-0">
				<div className="row">
					<div className="col-12">
						<div
							className="project-wrapper tj-fade-anim"
							data-delay="0.2"
						>
							<Swiper
								modules={[
									Navigation,
									Pagination,
									Autoplay,
								]}
								loop={true}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false,
								}}
								spaceBetween={20}
								slidesPerView={1}
								breakpoints={{
									640: { slidesPerView: 1.2 },
									768: { slidesPerView: 2 },
									1024: { slidesPerView: 3 },
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								// Attach refs to Swiper navigation using onBeforeInit
								onBeforeInit={(swiper) => {
									// attach navigation elements when refs are mounted
									if (
										typeof swiper.params
											.navigation !==
										"undefined"
									) {
										swiper.params.navigation.prevEl =
											prevRef.current;
										swiper.params.navigation.nextEl =
											nextRef.current;
									}
								}}
								className="swiper project-slider"
							>
								{items.map((n) => (
									<SwiperSlide key={n}>
										<div className="project-item">
											<div className="project-img img-reveal-2">
												<img
													src={`assets/images/project/project-${n}.webp`}
													alt={`Project ${n}`}
												/>
											</div>
											<div className="project-content">
												<div className="content-inner">
													<span className="categories">
														<a href="project-details.html">
															Solution
														</a>
													</span>
													<h4 className="title">
														<a href="project-details.html">
															Project
															Title{" "}
															{n}
														</a>
													</h4>
												</div>
												<a
													className="tj-icon-btn"
													href="project-details.html"
												>
													<i className="tji-arrow-right-3"></i>
												</a>
											</div>
										</div>
									</SwiperSlide>
								))}

								{/* pagination area (Swiper will populate this) */}
								<div className="swiper-pagination-area" />
							</Swiper>

							{/* Mobile-only nav (keeps same prev/next refs) */}
							<div className="d-md-none text-center mt-30">
								<div className="slider-navigation d-inline-flex">
									<div
										className="slider-prev"
										ref={prevRef}
										style={{ cursor: "pointer" }}
									>
										<span className="anim-icon">
											<i className="tji-arrow-left-3"></i>
											<i className="tji-arrow-left-3"></i>
										</span>
									</div>
									<div
										className="slider-next"
										ref={nextRef}
										style={{ cursor: "pointer" }}
									>
										<span className="anim-icon">
											<i className="tji-arrow-right-3"></i>
											<i className="tji-arrow-right-3"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
