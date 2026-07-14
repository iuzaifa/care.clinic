import Breadcrumb from "../components/Breadcrumb";
import DepartmentSection from "../components/sections/DepartmentSection";
import DoctorsSection from "../components/sections/Doctorssection";
import { doctorsData } from "./data/doctors";

const Departments = () => {
  return (
    <>
      <Breadcrumb
        title="Caring For The Health & Well Being Of Family."
        subtitle="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
        imageSrc="https://img.magnific.com/premium-photo/three-confident-medical-professionals-with-crossed-arms-wearing-white-lab-coats_116547-98005.jpg?w=1480"
        navigationPath="#"
        btnText="Book  Appointment"
      />
      <DepartmentSection/>
      <DoctorsSection doctors={doctorsData} limit={8}   />
    </>
  );
};

export default Departments;
