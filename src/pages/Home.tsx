
import GoogleMap from "../components/GoogleMap";
import DoctorsSection from "../components/sections/Doctorssection";
import HeroSection from "../components/sections/Herosection";
import HowItWorks from "../components/sections/Howitworks";
import ServicesSection from "../components/sections/Servicessection";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/Whychooseus";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <DoctorsSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <GoogleMap />

    </>
  );
};

export default Home;
