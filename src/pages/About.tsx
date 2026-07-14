import Breadcrumb from "../components/Breadcrumb";
import DoctorsSection from "../components/sections/Doctorssection";

const About = () => {
  return (
    <>
      <Breadcrumb
        title="Caring For The Health & Well Being Of Family."
        subtitle="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
        imageSrc="https://img.magnific.com/premium-photo/three-confident-medical-professionals-with-crossed-arms-wearing-white-lab-coats_116547-98005.jpg?w=1480"
        navigationPath="#"
        btnText="Book  Appointment"
      />

      <DoctorsSection/>



    
    </>
  );
};

export default About;
