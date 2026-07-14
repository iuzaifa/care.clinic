import AboutStory from "../components/AboutStory";
import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import DoctorsSection from "../components/sections/Doctorssection";
import MissionVision from "../components/sections/MissionVision";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/Whychooseus";
import StatsSection from "../components/StatsSection";
import { doctorsData } from "./data/doctors";
import { missionVisionData } from "./data/missionVision";
import { testimonialsData } from "./data/testimonialsData";
import { whyChooseUsData } from "./data/whyChooseUsData";




const stats = [
  { value: "4+", label: "Years Of Experience" },
  { value: "120+", label: "Expert Doctors" },
  { value: "20K+", label: "Happy Patients" },
  { value: "15", label: "Branches Nationwide" },
];


const About = () => {
  return (
    <>
      <Breadcrumb
        title="Caring For The Health & Well Being Of Family."
        subtitle="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
        imageSrc="https://img.magnific.com/premium-photo/three-confident-medical-professionals-with-crossed-arms-wearing-white-lab-coats_116547-98005.jpg?w=1480"
        // navigationPath / btnText removed: Breadcrumb component doesn't support these props
      />

      <AboutStory
        image="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
      />

      <StatsSection stats={stats} />

      <MissionVision {...missionVisionData} />

      <WhyChooseUs
        image={whyChooseUsData.image}
        imageAlt={whyChooseUsData.imageAlt}
        points={whyChooseUsData.points}
        reverse
      />

      <DoctorsSection doctors={doctorsData} limit={4} />

      <Testimonials testimonials={testimonialsData}  autoPlay autoPlayInterval={4000}/>

      <CtaSection  />
    </>
  );
};

export default About;