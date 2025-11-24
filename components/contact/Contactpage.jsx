import React from "react";

import BreadCrumb from "./BreadCrumb";
import ContactInfo from "./ContactInfo";
import ContactSection from "./ContactSection";

const Contactpage = () => {
	return (
		<div>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main id="primary" className="site-main">
						<div className="top-space-30"></div>

						<BreadCrumb />
						<ContactInfo />
						<ContactSection />
					</main>
				</div>
			</div>
		</div>
	);
};

export default Contactpage;
