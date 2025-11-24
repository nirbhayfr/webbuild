import { useEffect } from "react";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactSection = () => {
	//  useEffect(() => {
	//   const map = new window.google.maps.Map(document.getElementById("map"), {
	//     center: { lat: 28.6139, lng: 77.2090 },
	//     zoom: 12,
	//   });
	// }, []);

	return (
		<>
			<section className="tj-contact-section-2 section-gap-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-form contact-form-3 tj-fade-anim">
								<h3 className="title">
									Feel Free Contact with Us!
								</h3>
								<form id="contact-form">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													name="cfName"
													placeholder="Name*"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													name="cfEmail"
													placeholder="Email*"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													name="cfPhone"
													placeholder="Phone*"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												{/* <!-- <input type="text" name="cfSubject" placeholder="Subject*"> --> */}
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<select name="cfSubject">
															<option value="0">
																Subject*
															</option>
															<option value="1">
																Managed
																IT
																Services
															</option>
															<option value="2">
																Cloud
																Computing
															</option>
															<option value="3">
																Cybersecurity
																Solutions
															</option>
															<option value="4">
																IT
																Consulting
																&
																Strategy
															</option>
															<option value="5">
																Software
																Development
															</option>
															<option value="6">
																Network
																Infrastructure
															</option>
														</select>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-12">
											<div className="form-input message-input">
												<textarea
													name="cfMessage"
													id="message"
													placeholder="Message*"
												></textarea>
											</div>
										</div>
										<div className="submit-btn">
											<button
												className="tj-primary-btn"
												type="submit"
											>
												<span className="btn-text">
													<span>
														Submit Now
													</span>
												</span>
												<span className="btn-icon">
													<i className="tji-arrow-right-2"></i>
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="map-area tj-fade-anim"
								data-delay="0.5"
							>
								{/* <div id="map"></div> */}
								<MapContainer
									center={[51.505, -0.09]}
									zoom={13}
									scrollWheelZoom={false}
									className="map"
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={[51.505, -0.09]}>
										<Popup>
											A pretty CSS3 popup.{" "}
											<br /> Easily
											customizable.
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactSection;
