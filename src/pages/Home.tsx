
import { BsHeartPulse } from "react-icons/bs";
import GoogleMap from "../components/GoogleMap";
import DoctorsSection from "../components/sections/Doctorssection";
import HeroSection from "../components/sections/Herosection";
import HowItWorks from "../components/sections/Howitworks";
import ServicesSection from "../components/sections/Servicessection";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/Whychooseus";
import { howItWorksData } from "./data/webdata";
import { doctorsData } from "./data/doctors";
import { servicesData } from "./data/services";
import { whyChooseUsData } from "./data/whyChooseUsData";
import { testimonialsData } from "./data/testimonialsData";


const Home = () => {
  return (
    <>
      <HeroSection
        BadgeIcon={BsHeartPulse}
        badge="Welcome To CareClinic"
        title="Your Health,"
        highlight="Our Priority"
        description="We provide exceptional healthcare services with compassion and excellence."
        primaryBtnText="Book Appointment"
        secondaryBtnText="Learn More"
        features={[
          { title: "Easy", subtitle: "Appointment" },
          { title: "Expert", subtitle: "Doctors" },
          { title: "Quality", subtitle: "Treatment" },
          { title: "24/7", subtitle: "Support" },
        ]}
      />

      <HowItWorks badge={howItWorksData.badge} title={howItWorksData.title} steps={howItWorksData.steps}/>;

      {/* <DoctorsSection /> */}
      <DoctorsSection doctors={doctorsData} limit={4} />

      <ServicesSection services={servicesData} limit={5} />

      <WhyChooseUs
        image={whyChooseUsData.image}
        imageAlt={whyChooseUsData.imageAlt}
        points={whyChooseUsData.points}
        limit={8}
      />


      <Testimonials testimonials={testimonialsData} autoPlay autoPlayInterval={4000} />

      <GoogleMap />

    </>
  );
};

export default Home;
