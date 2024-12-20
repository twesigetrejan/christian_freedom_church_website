import { Church, HandHelping, TrendingUp, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Interfaces
interface NavLink {
  id: number;
  title: string;
  route: string;
}

interface ServiceCard {
  id: number;
  schedule: string;
  image: string;
}

interface ValueProp {
  id: number;
  value: string;
  value_explanation: string;
  icon: LucideIcon;
}

// Navigation Links
export const navlinks: NavLink[] = [
  {
    id: 0,
    title: "Home",
    route: "/",
  },
  {
    id: 1,
    title: "Services",
    route: "/",
  },
  {
    id: 2,
    title: "Events",
    route: "/",
  },
  {
    id: 3,
    title: "Contact",
    route: "",
  },
  {
    id: 4,
    title: "About",
    route: "",
  },
];

// Service Cards
export const ServiceCardProps: ServiceCard[] = [
  {
    id: 0,
    schedule: "Sunday 7:00 & 11:00am",
    image: "/Images/service-image1.png",
  },
  {
    id: 1,
    schedule: "Midweek Daily 5:00pm",
    image: "/Images/service-image2.png",
  },
  {
    id: 2,
    schedule: "Bible Study 5:00pm",
    image: "/Images/service-image3.png",
  },
];

// Values Props
export const ValuesProps: ValueProp[] = [
  {
    id: 0,
    value: "Services to others",
    value_explanation: "Serving other people is our first priority",
    icon: HandHelping,
  },
  {
    id: 1,
    value: "Strong community",
    value_explanation: "Our church is community based, you are welcome",
    icon: Users,
  },
  {
    id: 2,
    value: "Spiritual growth",
    value_explanation: "Your relationship with God is most important for us",
    icon: TrendingUp,
  },
  {
    id: 3,
    value: "A place for everyone",
    value_explanation: "Drawing the youth towards church community",
    icon: Church,
  },
];
