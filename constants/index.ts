import {
  Church,
  HandHelping,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  MessageCircleCode,
} from "lucide-react";
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

interface InquireProp {
  id: number;
  social_used: string;
  value: string;
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
    title: "Services & Departments",
    route: "/services",
  },

  {
    id: 2,
    title: "Events",
    route: "/events",
  },
  {
    id: 3,
    title: "Contact",
    route: "/contact",
  },
  {
    id: 4,
    title: "About",
    route: "/about",
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

export const InquireProps: InquireProp[] = [
  {
    id: 0,
    social_used: "Phone number",
    value: "+256 752 569228",
    icon: Phone,
  },
  {
    id: 1,
    social_used: "Email address",
    value: "cfcministriesug@gmail.com",
    icon: Mail,
  },
  {
    id: 2,
    social_used: "Whatsapp",
    value: "+256 752 569228",
    icon: MessageCircleCode,
  },
  {
    id: 3,
    social_used: "Location",
    value: "Kawempe-Tula Road",
    icon: MapPin,
  },
];

interface LeadershipTeam {
  id: number;
  leaderName: string;
  title: string;
  img: string;
}
[] = [
  {
    id: 0,
    leaderName: "Pastor Jjuuko Musisi",
    title: "Lead Pastor",
    img: "/Images/leadpastor.png",
  },
  {
    id: 1,
    leaderName: "Birungi Esther",
    title: "Choir leader",
    img: "/Images/choirleader.png",
  },
  {
    id: 2,
    leaderName: "Kibirige Joseph",
    title: "Media team lead",
    img: "/Images/medialeader.png",
  },
  {
    id: 3,
    leaderName: "Jane Doe",
    title: "Women’s lead",
    img: "/Images/womenlead.png",
  },
  {
    id: 4,
    leaderName: "Jjuuko Isaac",
    title: "Socials Manager",
    img: "/Images/socialsmanager.png",
  },
  {
    id: 5,
    leaderName: "John Doe",
    title: "Men's lead",
    img: "/Images/menslead.png",
  },
];
