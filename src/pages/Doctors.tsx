import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import DoctorsSection from "../components/sections/Doctorssection";
import { doctorsData } from "./data/doctors";

const Doctors = () => {
  return (
    <>
      <Breadcrumb
        title="Meet Our Expert Doctors"
        subtitle="Our team of highly qualified medical professionals is dedicated to providing you with exceptional care and personalized treatment plans."
        imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070" // Replace with your local asset or image path

      />
      <DoctorsSection doctors={doctorsData} hideViewAllText={true}  />

      <CtaSection/>
    </>
  );
};

export default Doctors;
