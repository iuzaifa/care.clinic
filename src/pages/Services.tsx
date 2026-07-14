import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/Whychooseus";

import InsuranceSection from "../components/ui/InsuranceSection";
import ProcessSteps from "../components/ui/ProcessSteps";
import ServicesGrid from "../components/ui/ServicesGrid";
import { insurance } from "./data/insurance";
import { serivcePageData } from "./data/servicepage";
import { testimonialsData } from "./data/testimonialsData";
import { whyChooseUsData } from "./data/whyChooseUsData";

const Services = () => {
  return (
    <>
      <Breadcrumb
        title="Comprehensive Care, Every Specialty"
        subtitle="From routine checkups to advanced surgical care, explore the full range of services offered by our expert medical team."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
        currentPage="Services"
      />

      <ServicesGrid
        services={serivcePageData}
        onServiceClick={(id) => console.log("Navigate to service:", id)}
      />

      <ProcessSteps/>

      <InsuranceSection providers={insurance} />

      <WhyChooseUs
        image={whyChooseUsData.image}
        imageAlt={whyChooseUsData.imageAlt}
        points={whyChooseUsData.points}
      />

      <Testimonials testimonials={testimonialsData} limit={3} />

      {/* <FaqSection/> */}

      <CtaSection
        title="Ready To Book Your Appointment?"
        subtitle="Our specialists are ready to provide the care you deserve. Schedule your visit today."
      />
    </>
  );
};

export default Services;