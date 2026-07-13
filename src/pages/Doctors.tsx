import Breadcrumb from "../components/Breadcrumb";
import DoctorsSection from "../components/sections/doctor/DoctorsSection";

const Doctors = () => {
  return (
    <>
      <Breadcrumb
        title="Meet Our Expert Doctors"
        subtitle="Our team of highly qualified medical professionals is dedicated to providing you with exceptional care and personalized treatment plans."
        imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070" // Replace with your local asset or image path
        btnText="Book an Appointment" // Optional: Remove this line if you don't want a button
        navigationPath=""    // Optional: Where the button redirects
      />
      <DoctorsSection />
    </>
  );
};

export default Doctors;
