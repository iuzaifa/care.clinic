import type { IconType } from "react-icons";
import icon from "../../../../components/ui/icons"

type DataTypes = {
  id : number
  title: string;
  description: string;
  imagesrc: string;
  redoc?: string;
  icon?: IconType;
};

export const departmentData: DataTypes[] = [
  {
    id : 1,
    title: "Neurology",
    description:
      "Comprehensive diagnosis and treatment for disorders of the brain, spinal cord, and nervous system.",
    imagesrc : "https://img.magnific.com/free-photo/male-radiologist-analyzing-mri-scan-results-patient-computer-monitor-control-room_637285-5158.jpg?t=st=1780505067~exp=1780508667~hmac=bb2e247da241ab5b19577106837692494bfc5ccbef397778a99704c6e8d9476f&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 2,
    title: "Cardiology",
    description:
      "Advanced heart care services including diagnosis, treatment, and preventive cardiology.",
    imagesrc : "https://img.magnific.com/free-photo/woman-specialist-explaining-heart-function-condition-test-results_482257-124874.jpg?t=st=1780504771~exp=1780508371~hmac=69760719ed4b7f3477777accc80a8ca354ae048e71bb1c34c853c138fef4bbbd&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 3,
    title: "Dental Care",
    description:
      "Professional dental treatments, cosmetic dentistry, oral surgery, and routine checkups.",
    imagesrc : "https://img.magnific.com/free-photo/little-beautiful-girl-dentist-smiling_158595-7736.jpg?semt=ais_test_b&w=740&q=80",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 4,
    title: "Pediatrics",
    description:
      "Dedicated healthcare services for infants, children, and adolescents.",
    imagesrc :  "https://img.magnific.com/free-photo/happy-female-doctor-giving-high-fie-little-boy-who-came-with-father-hospital_637285-492.jpg?t=st=1780505183~exp=1780508783~hmac=83a87f948f9280c9a410fa2393bb1be3e1aa52e5ddfe3887bbbf8454e99c3495&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 5,
    title: "Orthopedic Center",
    description:
      "Expert care for bones, joints, ligaments, and musculoskeletal conditions.",
    imagesrc :  "https://img.magnific.com/free-photo/explaining-x-ray-results-patient_1098-13317.jpg?t=st=1780505267~exp=1780508867~hmac=2537298086731f22c6de03ed7827e633b4d832748b229ec545770d2b1c5fbb03&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 6,
    title: "Ophthalmology",
    description:
      "Comprehensive eye care services including vision testing and eye disease treatment.",
    imagesrc :  "https://img.magnific.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27499.jpg?t=st=1780507744~exp=1780511344~hmac=7f7ba00b99a8b091719218bc1e1f471c288116a2cbca2273ebf7452b02fe2461&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 7,
    title: "Dermatology",
    description:
      "Specialized treatments for skin, hair, and nail conditions using modern techniques.",
    imagesrc :  "https://img.magnific.com/free-photo/rejuvenating-facial-treatment_158595-4595.jpg?t=st=1780507877~exp=1780511477~hmac=aaaed0d0f2c85ba780c4361516f101796fee24e7a1f2f2835d6bfa799e2aa45e&w=1480",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
  {
    id : 8,
    title: "Emergency Care",
    description:
      "24/7 emergency medical assistance with rapid response and critical care support.",
    imagesrc :  "https://img.magnific.com/premium-photo/medical-team-performing-reanimation-with-defibrillator-patient-hospital_249974-7797.jpg?semt=ais_test_b&w=740&q=80",
    redoc: "Read More",
    icon: icon.rightArrow,
  },
];
