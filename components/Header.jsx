import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [open, setOpen] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [offcanvasOpen, setOffcanvasOpen] = useState(false);
	const [bodyLocked, setBodyLocked] = useState(false);

	// Lock/unlock scroll
	useEffect(() => {
		if (bodyLocked) document.body.classList.add("overflow-hidden");
		else document.body.classList.remove("overflow-hidden");
	}, [bodyLocked]);

	// Overlay click closes everything
	const closeAll = () => {
		setHamburgerOpen(false);
		setOffcanvasOpen(false);
		setBodyLocked(false);
	};

	return (
		<>
			<div
				className={`body-overlay ${
					hamburgerOpen || offcanvasOpen ? "opened" : ""
				}`}
				onClick={closeAll}
			></div>
			{/* <div className="preloader is-loading">
				<div className="loading-container">
					<div className="loading"></div>
					<div id="loading-icon">
						<img
							src="../assets/images/logos/logo-icon.webp"
							alt="Loading"
						/>
					</div>
				</div>
			</div> */}

			<div className="back-to-top-wrapper">
				<button
					id="back_to_top"
					type="button"
					className="back-to-top-btn"
				>
					<span className="back_to_top_icon">
						<i className="tji-arrow-up-4"></i>
					</span>
					<span className="back_to_top_text">Scroll Top</span>
				</button>
			</div>

			{/* Search Popup */}
			<div className={`search_popup ${open ? "search-opened" : ""}`}>
				<div className="search_close">
					<button
						type="button"
						className="search_close_btn"
						onClick={() => setOpen(false)}
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17 1L1 17"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1 1L17 17"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="tj_search_wrapper">
								<div className="search_form">
									<form action="#">
										<div className="search_input">
											<h4 className="title">
												Search Projects,
												Service or Blog.
											</h4>
											<div className="search-box">
												<input
													className="search-input-field"
													type="search"
													placeholder="Search here..."
													required
												/>
												<button type="submit">
													<i className="tji-search"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`search-popup-overlay ${open ? "open" : ""}`}
				onClick={() => setOpen(false)}
			></div>

			{/* Offcanvas Menu */}
			<div
				className={`tj-offcanvas-area d-none d-lg-block ${
					offcanvasOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<a
									href="index.html"
									className="mobile_logo"
								>
									<img
										src="/assets/images/logos/primary-logo.webp"
										alt="Logo"
									/>
								</a>
							</div>
							<div className="hamburger_close">
								<button
									className="hamburger_close_btn"
									onClick={() => closeAll()}
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
									>
										<path
											d="M17 1L1 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 1L17 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className="offcanvas-text">
							<p>
								Developing personalize our customer
								journeys to increase satisfaction &
								loyalty of our expansion recognized by
								industry leaders.
							</p>
						</div>

						<div className="hamburger-search-area">
							<h5 className="hamburger-title">
								Search Now!
							</h5>
							<div className="hamburger_search">
								<form method="get" action="#">
									<button type="submit">
										<i className="tji-search"></i>
									</button>
									<input
										type="search"
										autoComplete="off"
										name="s"
										placeholder="Search here..."
									/>
								</form>
							</div>
						</div>

						<div className="hamburger-infos">
							
							<div className="home-link">
							<a href="/"><h5 className="hamburger-title">
								Home
							</h5></a>
                               </div>

							<div className="About-info">
								<a href="/about"><h5 className="hamburger-title">
								About us
							</h5></a>
								</div>
								<div className="services-info">
								<a href="/services"><h5 className="hamburger-title">
								Services
							</h5></a>
								</div>
                            <div className="projects-info">
								<a href="/projects"><h5 className="hamburger-title">
								Projetcs
							</h5></a>
								</div>
								<div className="contact-info">
								<a href="/contact"><h5 className="hamburger-title">
								Contact
							</h5></a>
								</div>
							</div>
						</div>
					

					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-2">
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
										href="https://www.linkedin.com/"
										target="_blank"
									>
										<i className="tji-linkedin"></i>
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
										href="https://x.com/"
										target="_blank"
									>
										<i className="tji-x-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div></div>
		

			{/* Mobile Hamburger Menu */}
			<div
				className={`hamburger-area d-lg-none ${
					hamburgerOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<a
									href="index.html"
									className="mobile_logo"
								>
									<img
										src="/assets/images/logos/primary-logo.webp"
										alt="Logo"
									/>
								</a>
							</div>
							<div
								className="hamburger_close"
								onClick={() => closeAll()}
							>
								<button className="hamburger_close_btn">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
									>
										<path
											d="M17 1L1 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 1L17 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className="hamburger_menu">
							<div className="mobile_menu"></div>
						</div>

						<div className="home-infos">
							<a href="/"><h5 className="hamburger-title">
								Home
							</h5></a>
						</div>
	                      <div className="about-infos">
							<a href="/about"><h5 className="hamburger-title">
								About us
							</h5></a>
						</div>
	                   <div className="services-infos">
							<a href="/services"><h5 className="hamburger-title">
								Services
							 </h5></a>
						  </div>
						<div className="project-infos">
							<a href="/project"><h5 className="hamburger-title">
								Projects
							</h5></a>
						</div>
                           <div className="contact-infos">
							<a href="/contact"><h5 className="hamburger-title">
								Contact
							</h5></a>
						</div>



					</div>

					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-2">
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
										href="https://www.linkedin.com/"
										target="_blank"
									>
										<i className="tji-linkedin"></i>
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
										href="https://x.com/"
										target="_blank"
									>
										<i className="tji-x-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Header Section */}
			<header className="header-area header-1 header-absolute">
				<div className="header-top d-lg-block d-none">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="header-top-content">
									<p className="topbar-text">
										<i className="tji-spark"></i>{" "}
										Fast & Reliable IT Solution
										Services.
										<Link to="/contact">
											Join Now
										</Link>
									</p>

									<div className="header-info">
										<div className="info-item">
											<span>
												<i className="tji-clock"></i>
											</span>
											<span>
												9 am to 6 pm
												[Mon-Sat]
											</span>
										</div>

										<div className="info-item">
											<span>
												<i className="tji-gear"></i>
											</span>
											<Link to="/contact">
												Support
											</Link>
										</div>

										<div className="info-item">
											<span>
												<i className="tji-globe"></i>
											</span>
											<div className="tj-language">
												<span>English</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Sticky Header (2nd Copy) */}
				<div className="header-bottom">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="header-wrapper">
									<div className="site_logo">
										<a
											className="logo"
											href="index.html"
										>
											{/* <img
												src="/assets/images/logos/primary-logo.webp"
												alt="Logo"
											/> */}
											<h2>WebBuild</h2>
										</a>
									</div>

									<div className="menu-area d-none d-lg-inline-flex align-items-center">
										<nav
											id="mobile-menu"
											className="mainmenu"
										>
											<ul>
												<li>
													<Link to="/">
														Home
													</Link>
												</li>

												<li>
													<Link to="/about">
														About Us
													</Link>
												</li>

												<li>
													<Link to="/services">
														Services
													</Link>
												</li>

												<li>
													<Link to="/projects">
														Projects
													</Link>
												</li>

												<li>
													<Link to="/contact">
														Contact
													</Link>
												</li>
											</ul>
										</nav>
									</div>

									<div className="header-right-item d-none d-lg-inline-flex">
										<div
											className="header-search"
											onClick={() =>
												setOpen(true)
											}
										>
											<button className="search">
												<i className="tji-search"></i>
											</button>
										</div>

										<div className="header-button d-xl-block d-none">
											<Link
												className="tj-primary-btn"
												to="/contact"
											>
												<span className="btn-text">
													<span>
														Get
														Started
													</span>
												</span>
												<span className="btn-icon">
													<i className="tji-arrow-right-2"></i>
												</span>
											</Link>
										</div>

										<button
											className="menu_btn menu_offcanvas d-none d-lg-block"
											onClick={() =>
												setOffcanvasOpen(
													true
												)
											}
										>
											<span className="cubes">
												<span></span>
												<span></span>
												<span></span>
												<span></span>
											</span>
										</button>
									</div>

									<button
										className="menu_btn mobile_menu_bar d-lg-none"
										onClick={() =>
											setHamburgerOpen(true)
										}
									>
										<span className="cubes">
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
