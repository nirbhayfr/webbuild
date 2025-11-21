import BannerSection from "./Banner";
import ChooseSection from "./WhyChooseUs";
import AboutSection from "./About";
import ServicesSection from "./Services";
import ReviewsSection from "./Reviews";
import TeamSection from "./Team";
import TechnologiesSection from "./Technologies";
import ProjectsSection from "./Projects";
import WorkingProcessSection from "./WorkingProcess";
import ContactSection from "./Contact";
import BlogSection from "./Blog";

function Homepage() {
	return (
		<div>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main id="primary" className="site-main">
						<div className="top-space-30"></div>
						<BannerSection />
						<ChooseSection />
						<AboutSection />
						<ServicesSection />
						<ReviewsSection />
						<TeamSection />
						<TechnologiesSection />
						<ProjectsSection />
						<WorkingProcessSection />
						<ContactSection />
						<BlogSection />
					</main>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
