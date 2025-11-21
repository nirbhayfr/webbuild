import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function VideoAndTestimonial() {
	const [mainSwiper, setMainSwiper] = useState(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const setThumbActive = (thumbIndex) => {
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		// remove existing
		thumbsSwiper.slides.forEach((slideEl) =>
			slideEl.classList.remove("swiper-slide-thumb-active")
		);
		// add to the correct slide element (since loop=false, index maps 1:1)
		const targetEl = thumbsSwiper.slides[thumbIndex];
		if (targetEl) targetEl.classList.add("swiper-slide-thumb-active");
	};

	// handle clicking a thumb
	const handleThumbClick = (index) => {
		if (mainSwiper && !mainSwiper.destroyed) {
			mainSwiper.slideTo(index); // navigate main
		}
		if (thumbsSwiper && !thumbsSwiper.destroyed) {
			thumbsSwiper.slideTo(index); // center the thumb slider if needed
			setThumbActive(index); // force visual active
		}
	};

	// When main swiper changes (via nav or autoplay), update thumb active class
	useEffect(() => {
		if (!mainSwiper) return;
		// attach event that fires when slide changes
		const onSlideChange = () => {
			const idx = mainSwiper.realIndex ?? mainSwiper.activeIndex;
			setThumbActive(idx);
			// also ensure thumbs slider centers on idx
			if (thumbsSwiper && !thumbsSwiper.destroyed)
				thumbsSwiper.slideTo(idx);
		};

		mainSwiper.on("slideChange", onSlideChange);

		// initial sync
		setTimeout(() => {
			const idx = mainSwiper.realIndex ?? mainSwiper.activeIndex ?? 0;
			setThumbActive(idx);
			if (thumbsSwiper && !thumbsSwiper.destroyed)
				thumbsSwiper.slideTo(idx);
		}, 50);

		return () => {
			if (mainSwiper && mainSwiper.off)
				mainSwiper.off("slideChange", onSlideChange);
		};
	}, [mainSwiper, thumbsSwiper]);

	const people = [
		{
			name: "Mevon Lane",
			img: "/assets/images/testimonial/client-1.webp",
		},
		{
			name: "Ralph Edwards",
			img: "/assets/images/testimonial/client-2.webp",
		},
		{
			name: "Guy Hawkins",
			img: "/assets/images/testimonial/client-3.webp",
		},
	];

	return (
		<>
			{/* Video Section */}
			<div className="tj-video-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="video-content-area">
								<div className="video-bg img-parallax">
									<img
										src="/assets/images/bg/video-bg.webp"
										alt="Video Background"
									/>
								</div>
								<div className="video-wrap">
									<div className="btn-hover-wrapper">
										<div className="btn-hover-inner">
											<a
												className="video-btn circle-ripple video-popup"
												data-autoplay="true"
												data-vbtype="video"
												data-maxwidth="1200px"
												href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"
											>
												<span className="video-icon">
													<i className="tji-play"></i>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonial Section */}
			<div className="tj-testimonial-section section-gap-x">
				<div className="marquee-area">
					<div className="scroll-slider">
						<div className="scroll-wrapper">
							{[1, 2, 3, 4, 5].map((i) => (
								<div className="marquee-item" key={i}>
									<h3 className="marquee-text">
										<span>/</span>Clients Feedback
									</h3>
								</div>
							))}
						</div>

						<div className="scroll-wrapper">
							{[1, 2, 3, 4, 5].map((i) => (
								<div className="marquee-item" key={i}>
									<h3 className="marquee-text">
										<span>/</span>Clients Feedback
									</h3>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="testimonial-area gap-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="testimonial-wrapper">
									{/* THUMB SLIDER (controlled) */}
									<Swiper
										onSwiper={setThumbsSwiper}
										modules={[]}
										spaceBetween={10}
										slidesPerView={3}
										centeredSlides={true}
										slideToClickedSlide={false} // we handle clicks ourselves
										watchSlidesProgress={true}
										loop={false}
										className="client-thumb"
										style={{ cursor: "pointer" }}
									>
										{people.map((p, idx) => (
											<SwiperSlide
												key={idx}
												className="thumb-item"
												onClick={() =>
													handleThumbClick(
														idx
													)
												}
											>
												<div className="thumb-img">
													<img
														src={
															p.img
														}
														alt={
															p.name
														}
													/>
												</div>
												<div className="author-header">
													<h4 className="title">
														{p.name}
													</h4>
													<span className="designation">
														Co.
														Founder
													</span>
												</div>
											</SwiperSlide>
										))}
									</Swiper>

									{/* NAV */}
									<div className="testimonial-navigation d-none d-md-inline-flex">
										<div className="slider-prev">
											<span className="anim-icon">
												<i className="tji-arrow-left-3"></i>
												<i className="tji-arrow-left-3"></i>
											</span>
										</div>
										<div className="slider-next">
											<span className="anim-icon">
												<i className="tji-arrow-right-3"></i>
												<i className="tji-arrow-right-3"></i>
											</span>
										</div>
									</div>

									{/* MAIN SLIDER (controlled target) */}
									<Swiper
										onSwiper={setMainSwiper}
										modules={[
											Navigation,
											Pagination,
										]}
										loop={false}
										navigation={{
											nextEl: ".slider-next",
											prevEl: ".slider-prev",
										}}
										pagination={{
											el: ".swiper-pagination-area",
											clickable: true,
										}}
										className="testimonial-slider swiper"
									>
										<div className="swiper-wrapper">
											{people.map((p, idx) => (
												<SwiperSlide
													key={idx}
													className="swiper-slide"
												>
													<div className="testimonial-item">
														<div className="rating-area">
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
														<div className="desc">
															<p>
																Working
																with
																Tkmino
																has
																been
																a
																game-changer
																for
																our
																business.
																Professionalism,
																innovation,
																and
																attention
																to
																detail
																helped
																us
																achieve
																our
																goals.
															</p>
														</div>
													</div>
												</SwiperSlide>
											))}
										</div>
									</Swiper>

									<div className="swiper-pagination-area"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
