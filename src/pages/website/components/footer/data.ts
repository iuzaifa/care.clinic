import type React from "react";


type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

type ContactItem  = {
  title: string;
  value: string | string[];
};

const linksData: NavItem[] = [
  {
    title: "Home",
    href: "#",
    icon: "home",
  },
];

const departmentsData: NavItem[] = [
  {
    title: "Cardiology",
    href: "#",
    icon: "heart",
  },
];



const contactsData : ContactItem [] = [
  {
    title: "Phone",
    value: ["+91 9876543210", "+91 9876543210" ],
  },
  {
    title: "Email",
    value: ["info@example.com"],
  },
  {
    title: "Address :",
    value: "1223 Fulton Street San Diego CA 941-23 USA",
  },
];

export {linksData ,departmentsData  , contactsData }