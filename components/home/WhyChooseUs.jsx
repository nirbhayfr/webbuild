import { Link } from "react-router-dom";

function ChooseSection() {
	return (
		<section className="tj-choose-section fix section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading">
							<span className="sub-title tj-fade-anim">
								[ Why Choose Us ]
							</span>

							<div className="sec-heading-inner">
								<h2 className="sec-title tj-split-text-1">
									Reliable IT Solution, for Best
									Results.
								</h2>

								<div
									className="tj-fade-anim"
									data-delay="0.1"
								>
									<p className="desc">
										Our services are customized to
										meet your unique.
									</p>
								</div>

								<div
									className="tj-fade-anim"
									data-delay="0.3"
								>
									<Link
										className="tj-primary-btn d-none d-lg-inline-flex"
										to="/about-us"
									>
										<span className="btn-text">
											<span>Learn More</span>
										</span>
										<span className="btn-icon">
											<i className="tji-arrow-right-2"></i>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row rg-30">
					{[
						{
							icon: "tji-thumbs-up",
							title: "Proven Track Record",
							desc: "With a portfolio of successful projects and satisfied clients, we have a reputation.",
							direction: "top",
						},
						{
							icon: "tji-idea",
							title: "Tailored Solutions",
							desc: "Our services are customized to meet your unique business needs, ensuring solution.",
							direction: "bottom",
						},
						{
							icon: "tji-rocket",
							title: "Future Technologies",
							desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions.",
							direction: "top",
						},
						{
							icon: "tji-hand-2",
							title: "24/7 Support",
							desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions.",
							direction: "bottom",
						},
					].map((item, index) => (
						<div className="col-xl-3 col-md-6" key={index}>
							<div
								className="choose-box tj-fade-anim"
								data-delay=".3"
								data-duration="1"
								data-direction={item.direction}
							>
								<div className="choose-inner">
									<div className="choose-icon">
										<i className={item.icon}></i>
									</div>
									<div className="choose-content">
										<h4 className="title">
											{item.title}
										</h4>
										<p className="desc">
											{item.desc}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="d-lg-none text-center mt-40">
					<a className="tj-primary-btn" href="about.html">
						<span className="btn-text">
							<span>Learn More</span>
						</span>
						<span className="btn-icon">
							<i className="tji-arrow-right-2"></i>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default ChooseSection;
