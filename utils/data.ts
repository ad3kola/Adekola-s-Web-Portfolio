import {
  AcademicCapIcon,
  BriefcaseIcon,
  CircleStackIcon,
  EnvelopeIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { LinkProps, SchoolHistory } from "./typings";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export const navLinks: LinkProps[] = [
  {
    name: "Home",
    Icon: HomeIcon,
    path: "/",
  },
  {
    name: "About",
    Icon: QuestionMarkCircleIcon,
    path: "#about",
  },
  {
    name: "Jobs & Education",
    Icon: AcademicCapIcon,
    path: "#education",
  },
  {
    name: "Projects",
    Icon: CircleStackIcon,
    path: "#projects",
  },
  {
    name: "connect",
    Icon: EnvelopeIcon,
    path: "#contact",
  },
];
export const socialLinks: LinkProps[] = [
  {
    name: "Twitter",
    Icon: FaTwitter,
    path: "https://x.com/Ad3kola_R?t=p1-y2gq_hyxp8xzCrV0eQ&s=09",
  },
  {
    name: "Linkedin",
    Icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/richmond-adedeji-18b356294",
  },
  {
    name: "Github",
    Icon: FaGithub,
    path: "https://github.com/ad3kola",
  },
  {
    name: "Tiktok",
    Icon: FaTiktok,
    path: '',
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    path: "https://www.instagram.com/pos.itiveperspectives?igsh=MWR3MmVmY3pkMGM4",
  },
];

export const schoolHistory: SchoolHistory[] = [
  {
    schoolName: "Grand Regal Int'l School",
    startDate: 2010,
    finishDate: 2020,
    educationLevel: "Primary School",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitdoloribus sed fuga iusto incidunt assumenda ea, reprehenderit atdeleniti earum. Dolores delectus quibusdam saepe hic omnis rerumiste sit voluptatem?",
    order: 'col-start-1'
    },
  {
    schoolName: "Grand Regal Int'l School",
    startDate: 2020,
    finishDate: 2022,
    educationLevel: "High School",
    order: 'col-start-3',
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores delectus quibusdam saepe hic omnis rerumiste sit voluptatem?",
  },
  {
    schoolName: "National Open University of Nigeria (NOUN)",
    startDate: 2022,
    finishDate: 2023,
    educationLevel: "University",
    order: 'col-start-1',
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus sed fuga iusto incidunt assumenda ea, reprehenderit atdeleniti earum. Dolores delectus quibusdam saepe hic omnis rerum",
  },
  {
    schoolName: "Holland College",
    startDate: 2024,
    finishDate: 2026,
    educationLevel: "Univeristy (Diploma) ",
    order:'col-start-3',
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sitdoloribus sed fuga iusto incidunt assumenda ea, reprehenderit atdeleniti earum. Dolores delectus quibusdam saepe hic omnis rerumiste sit voluptatem?",
  },
];