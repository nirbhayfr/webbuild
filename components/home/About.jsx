export default function AboutSection() {
	return (
		<section className="tj-about-section fix section-gap section-gap-x">
			<div
				className="bg-img"
				data-bg-image="assets/images/bg/common-bg.webp"
			></div>

			<div className="container">
				<div className="row rg-30">
					{/* LEFT SIDE */}
					<div className="col-lg-6 order-lg-1 order-2">
						<div
							className="about-left tj-fade-anim"
							data-delay=".1"
							data-direction="left"
						>
							<div className="about-img">
								<img
									src="assets/images/about/about-img-1.webp"
									alt="Image"
								/>
							</div>

							<div className="about-left-bottom">
								{/* EXPERIENCE BOX */}
								<div
									className="experience-area tj-fade-anim"
									data-delay=".2"
								>
									<span className="exp-badge">
										EXPERIENCE
									</span>

									<div className="countup-item">
										<div className="inline-content">
											<span className="counter">
												20
											</span>
											<span className="count-plus">
												<sup>+</sup>
											</span>
										</div>
										<span className="count-text">
											Years of Excellence in IT
											Solutions Company.
										</span>
									</div>
								</div>

								{/* AUTHOR BOX */}
								<div
									className="author-area tj-fade-anim"
									data-delay=".3"
								>
									<div className="author-info">
										<div className="author-img">
											<img
												src="assets/images/testimonial/client-1.webp"
												alt="Image"
											/>
										</div>

										<div className="author-text">
											<h6 className="author-name">
												Burdee Nicolas
											</h6>
											<span>Co. Founder</span>
										</div>
									</div>

									<div className="signature">
										<img
											src="assets/images/about/signature.webp"
											alt="Image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className="col-lg-6 order-lg-2 order-1">
						<div
							className="about-content-area tj-fade-anim"
							data-delay=".1"
							data-direction="right"
						>
							<div className="sec-heading">
								<span className="sub-title tj-fade-anim">
									[ About Tekmino ]
								</span>

								<h2 className="sec-title tj-split-text-1">
									Delivering Solution That Drive Our
									Innovation &amp; Fast Success.
								</h2>
							</div>

							<p className="desc">
								We are a team of passionate tech experts
								delivering innovative IT solutions
								tailored to help businesses grow, adapt,
								and thrive in a digital. Stay ahead of
								the competition.
							</p>

							{/* COUNTERS */}
							<div className="about-funfact">
								<div className="countup-item">
									<div className="inline-content">
										<span className="counter">
											3
										</span>
										<span className="count-plus">
											K<sup>+</sup>
										</span>
									</div>
									<span className="count-text">
										Successful Projects.
									</span>
								</div>

								<div className="countup-item">
									<div className="inline-content">
										<span className="counter">
											98
										</span>
										<span className="count-plus">
											<sup>+</sup>
										</span>
									</div>
									<span className="count-text">
										IT Professionals.
									</span>
								</div>
							</div>

							<a
								className="tj-primary-btn style-2 mt-25"
								href="about.html"
							>
								<span className="btn-text">
									<span>Learn More</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-2"></i>
								</span>
							</a>

							<div
								className="circle-text-wrap award-circle"
								data-bg-image="assets/images/about/award-circle-bg.webp"
							>
								<span
									className="circle-text"
									data-bg-image="assets/images/about/award-circle-text.png"
								></span>

								<span className="circle-icon">
									<span>
										<i className="tji-award"></i>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
