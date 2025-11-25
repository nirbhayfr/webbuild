import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Homepage from "../components/home/Homepage";
import Aboutpage from "../components/about/Aboutpage";
import Servicespage from "../components/services/Servicespage";
import Projectpage from "../components/projects/Projectpage";
import Contactpage from "../components/contact/Contactpage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Homepage />} />
					{/* <Route path="home" element={<Homepage />} /> */}
					<Route path="/about" element={<Aboutpage />} />
					<Route path="/services" element={<Servicespage />} />
					<Route path="/projects" element={<Projectpage />} />
					<Route path="/contact" element={<Contactpage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
