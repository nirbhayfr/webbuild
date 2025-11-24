import  BreadCrumb  from "./BreadCrumb";
import  ChooseSection  from "./ChooseSection";
import  About from "./About";
import  Team from "./Team";
import  Faq from "./Faq";
import  ClientSection  from "./ClientSection";


 function Aboutpage ()  {
  return (
   <div> <div id="smooth-wrapper">
    <div id="smooth-content">
      <main id="primary" className="site-main">
        <div className="top-space-30"></div>
                 <BreadCrumb/>
                 <ChooseSection/>
                 <About/>
                <Team/>
                 <Faq/>
              <ClientSection/>
          </main>
				</div>
			</div>
		</div>
     
  );
}
export default Aboutpage;
