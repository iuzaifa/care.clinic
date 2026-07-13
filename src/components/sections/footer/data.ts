import type { IconType } from "react-icons";
import icons from "../../ui/icons";

type NavItem = {
  title: string;
  href: string;
  icon?: IconType;
};

type ContactItem = {
  title: string;
  value: string | string[];
};

const linksData: NavItem[] = [
  {
    title: "FAQs",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "Blog",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "Weekly timetable",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "Terms & Conditions",
    href: "#",
    icon: icons.chevronRight,
  },
];

const departmentsData: NavItem[] = [
  {
    title: "Cardiology",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "Migraine Treatment",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "General Consultation",
    href: "#",
    icon: icons.chevronRight,
  },
  {
    title: "Injection Therapy",
    href: "#",
    icon: icons.chevronRight,
  },
];

const contactsData: ContactItem[] = [
  {
    title: "Phone",
    value: ["+91 9876543210", "+91 9876543210"],
  },
  {
    title: "Email",
    value: ["info@example.com"],
  },
  {
    title: "Address",
    value: "1223 Fulton Street San Diego CA 941-23 USA",
  },
];

export { linksData, departmentsData, contactsData };
