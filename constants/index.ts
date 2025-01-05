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

export interface LeadershipTeam {
  id: number;
  leaderName: string;
  title: string;
  img: string;
}

export const leadershipTeam: LeadershipTeam[] = [
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
    leaderName: "Keyla Smith",
    title: "Assistant choir lead",
    img: "/Images/assistantchoirlead.png",
  },
  {
    id: 6,
    leaderName: "Jordan Mwesigwa",
    title: "Entertainment lead",
    img: "/Images/entertainmentlead.png",
  },
  {
    id: 7,
    leaderName: "John Doe",
    title: "Men's lead",
    img: "/Images/menslead.png",
  },
];

export interface UpcomingEvents {
  id: number;
  eventName: string;
  details: string;
  eventDay: string;
  month: string;
  dayOfMonth: string;
  eventTime: string;
  img: string;
}

export const upcomingEvents: UpcomingEvents[] = [
  {
    id: 0,
    eventName: "Good Friday celebrations",
    details:
      "Join us for a solemn and Good Friday service as we remember the sacrifice of Jesus Christ on the cross. This day calls us to honor the love and grace shown to us through His ultimate act of selflessness",
    eventDay: "Friday",
    month: "April",
    dayOfMonth: "18",
    eventTime: "5:00PM - 8:00PM",
    img: "/Images/events/good-friday.png",
  },
  {
    id: 1,
    eventName: "Easter holy days celebrations",
    details:
      "This special event is a time to reflect on the hope and renewal brought by the resurrection of Jesus Christ. Gather with us as we worship, connect, and share the message of love and salvation",
    eventDay: "Sunday",
    month: "April",
    dayOfMonth: "20",
    eventTime: "7:00AM - 5:00PM",
    img: "/Images/events/easter.png",
  },
];

export interface EventHighlights {
  id: number;
  eventName: string;
  details: string;
  img: string;
}

export const eventHighlights: EventHighlights[] = [
  {
    id: 0,
    eventName: "New year’s eve overnight",
    details:
      "Our New Year’s Eve overnight celebration was a powerful and unforgettable experience as we gathered to dedicate the year ahead to his guidance",
    img: "/Images/events/overnight.png",
  },
  {
    id: 1,
    eventName: "Christmas celebrations",
    details:
      "Our Christmas Celebration was a heartwarming evening filled with worship, community, and the true spirit of Christmas",
    img: "/Images/events/xmas.png",
  },
  {
    id: 2,
    eventName: "Children's fun day ",
    details:
      "Our Children’s Fun Day was a delightful and energetic event where kids from the community came together to play, learn, and grow in faith",
    img: "/Images/events/children.png",
  },
  {
    id: 3,
    eventName: "Children's fun day ",
    details:
      "Our Children’s Fun Day was a delightful and energetic event where kids from the community came together to play, learn, and grow in faith",
    img: "/Images/events/children.png",
  },
  {
    id: 4,
    eventName: "Children's fun day ",
    details:
      "Our Children’s Fun Day was a delightful and energetic event where kids from the community came together to play, learn, and grow in faith",
    img: "/Images/events/children.png",
  },
];

export interface Session {
  id: number;
  sessionName: string;
  sessionDetails: string;
}


export interface DepartmentServices {
  id: number;
  service_name: string;
  times: string[];
  sessions: Session[];
}

export const departmentServices: DepartmentServices[] = [
  {
    id: 0,
    service_name: "Sunday services",
    times: ["7:00AM", "11:00AM", "5:00PM"],
    sessions: [
      {
        id: 0,
        sessionName: "Morning service",
        sessionDetails:
          "A quiet, reflective time to start your day in worship and prayer.The earliest bird catches the worm",
      },
      {
        id: 1,
        sessionName: "Main service",
        sessionDetails:
          "Our central service with powerful worship, a timely message, and community connection",
      },
      {
        id: 2,
        sessionName: "Main service",
        sessionDetails:
          " After the Main Service, men’s meeting followed by youth fellowship to deepen relationships and spiritual growth.",
      },
    ],
  },
  {
    id: 1,
    service_name: "Bible Study & deliverance",
    times: ["5:00PM"],
    sessions: [
      {
        id: 0,
        sessionName: "Midweek session",
        sessionDetails:
          "A deep dive into scripture with discussions to enrich your faith on Wednesday",
      },
      {
        id: 1,
        sessionName: "Friday session",
        sessionDetails:
          "A powerful evening of prayer, teaching, and deliverance for spiritual renewal",
      },
      {
        id: 2,
        sessionName: "Special study workshops",
        sessionDetails:
          "As scheduled - Tailored Bible sessions that offer practical applications and spiritual empowerment",
      },
    ],
  },
  {
    id: 2,
    service_name: "Ministry preparations",
    times: ["2:00PM", "5:00PM"],
    sessions: [
      {
        id: 0,
        sessionName: "Children’s ministry practice",
        sessionDetails:
          "Creative rehearsals to engage children in dynamic Bible lessons for Sunday",
      },
      {
        id: 1,
        sessionName: "Worship team rehearsals",
        sessionDetails:
          "Thursday  & Saturday – Practice sessions to ensure impactful worship services.",
      },
      {
        id: 2,
        sessionName: "Event preparation & briefing",
        sessionDetails:
          "Every Saturday - Final walkthroughs and briefings for Sunday service execution",
      },
    ],
  },
  {
    id: 3,
    service_name: "Ministry meetings",
    times: ["2:00PM", "5:00PM"],
    sessions: [
      {
        id: 0,
        sessionName: "Women’s meeting",
        sessionDetails:
          "A quiet, reflective time to start your day in worship and prayer.The earliest bird catches the worm",
      },
      {
        id: 1,
        sessionName: "Men’s Fellowship",
        sessionDetails: "Sunday after the main service",
      },
      {
        id: 2,
        sessionName: "Youth Ministry",
        sessionDetails:
          "Tuesday & Sunday - Energetic gatherings focused on teaching, worship, and building youth leadership.",
      },
    ],
  },
  {
    id: 4,
    service_name: "Saturday preparations",
    times: ["2:00PM", "5:00PM"],
    sessions: [
      {
        id: 0,
        sessionName: "Children’s Ministry Practice",
        sessionDetails:
          "Every Saturday - A dedicated time for rehearsing activities and Bible stories for the children's ministry",
      },
      {
        id: 1,
        sessionName: "Worship Team & Choir Rehearsals",
        sessionDetails:
          "Fine-tuning musical and vocal arrangements for Sunday worship.",
      },
      {
        id: 2,
        sessionName: "Service Review & Setup",
        sessionDetails:
          "A team meeting to go over service flow, technical needs, and final touches.",
      },
    ],
  },
];
