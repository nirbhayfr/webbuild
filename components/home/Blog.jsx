import React from "react";

export default function BlogSection() {
	const blogs = [
		{
			id: 1,
			img: "assets/images/blog/blog-1.webp",
			category: "Solutions",
			author: "Ellinien Loma",
			title: "How to Successfully Migrate Your Business to the Cloud",
			link: "blog-details.html",
			date: "28",
			month: "Feb",
			delay: "0.1",
		},
		{
			id: 2,
			img: "assets/images/blog/blog-2.webp",
			category: "Focus",
			author: "Ellinien Loma",
			title: "Building a Stronger Workforce with IT Training",
			link: "blog-details.html",
			date: "28",
			month: "Feb",
			delay: "0.2",
		},
		{
			id: 3,
			img: "assets/images/blog/blog-3.webp",
			category: "Software",
			author: "Ellinien Loma",
			title: "Optimizing Your IT Budget: Tips and Strategies",
			link: "blog-details.html",
			date: "28",
			month: "Feb",
			delay: "0.3",
		},
	];

	return (
		<section className="tj-blog-section section-gap fix">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title tj-fade-anim">
								[ Insights & Innovation ]
							</span>
							<h2 className="sec-title tj-split-text-1">
								Explore Latest Insights, & Innovations.
							</h2>
						</div>
					</div>
				</div>

				<div className="row rg-30">
					{blogs.map((blog) => (
						<div className="col-lg-4 col-md-6" key={blog.id}>
							<div
								className="blog-item tj-fade-anim"
								data-delay={blog.delay}
							>
								<div className="blog-thumb img-reveal-2">
									<a href={blog.link}>
										<img
											src={blog.img}
											alt={blog.title}
										/>
									</a>

									<div className="blog-date">
										<span className="date">
											{blog.date}
										</span>
										<span className="month">
											{blog.month}
										</span>
									</div>
								</div>

								<div className="blog-content">
									<div className="blog-meta">
										<span className="categories">
											<a href={blog.link}>
												{blog.category}
											</a>
										</span>
										<span>
											By{" "}
											<a href={blog.link}>
												{blog.author}
											</a>
										</span>
									</div>

									<h4 className="title">
										<a href={blog.link}>
											{blog.title}
										</a>
									</h4>

									<a
										className="tj-text-btn"
										href={blog.link}
									>
										<span className="btn-inner">
											<span className="btn-icon">
												<span>
													<i className="tji-arrow-right-4"></i>
												</span>
											</span>

											<span className="btn-text">
												<span>
													Read More
												</span>
											</span>

											<span className="btn-icon">
												<span>
													<i className="tji-arrow-right-4"></i>
												</span>
											</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
